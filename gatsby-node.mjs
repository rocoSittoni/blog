import { resolve } from 'path';

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityPost {
        nodes {
          title
          content
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allSanityPost.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug.current}`,
      component: resolve('./src/templates/post.tsx'),
      context: {
        slug: node.slug.current,
      },
    });
  });
}