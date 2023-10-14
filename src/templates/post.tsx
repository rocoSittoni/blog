import { graphql, PageProps } from 'gatsby'
import React from 'react'

interface PostProps extends PageProps {

}

const Post: React.FC<PostProps> = ({ data }) => {
  
  // const post = data.markdownRemark;
  console.log(data)

  return (
    <div>
      {/* <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default Post