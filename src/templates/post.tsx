import { graphql, PageProps } from 'gatsby'
import React from 'react'
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';

interface PostProps extends PageProps {
  data: {
    allSanityPost: {
      nodes: any
    };
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const post = data.allSanityPost.nodes[0];
  return (
    <Layout>
      <div className="Post"></div>
      <h1 className='Post__Title'>{post.title}</h1>
      <div className="content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allSanityPost(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        title
        content
      }
    }
  }
`;

export default Post