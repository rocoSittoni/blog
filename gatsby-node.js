// exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
  
//     const result = await graphql(`
//       {
//         allSanityPost {
//           edges {
//               node {
//                 title
//                 description
//                 tags
//                 launchDate
//                 slug {
//                   current
//                 }
//                 image {
//                   asset {
//                     url
//                   }
//                 }
//               }
//             }
//         }
//       }
//     `)
  
//     if (result.errors) {
//       throw result.errors
//     }
  
//     const projects = result.data.allSanityPost.edges || []
//     projects.forEach((edge, index) => {
//       const path = `/project/${edge.node.slug.current}`
  
//       createPage({
//         path,
//         component: require.resolve('./src/templates/project.js'),
//         context: {slug: edge.node.slug.current},
//       })
//     })
//   }