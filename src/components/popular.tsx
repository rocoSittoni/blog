import { graphql, Link } from 'gatsby';
import React from 'react'
import { Post } from '../interfaces/post.interface'

const Popular = (sanityData: any) => {

    console.log(sanityData.sanityData)
    const posts = sanityData.sanityData;

    return (
        <div className="Popular">
            <h1 className="Popular__Title">Popular</h1>
            <div className="Popular__Content">
                {
                    posts.map((post: any) => {
                        return (
                            <Link to={post.node.slug.current}>
                                <div className="Popular__Post">
                                    <h3 className="Popular__Post--Title">{post.node.title}</h3>
                                    <div className="Popular__Post--Footer">
                                        <div>{post.node.launchDate}</div>
                                        <div>{post.node.categories[0]}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

// allSanityPost(filter: { popular: { eq: true } }) {
export const query = graphql`
query {
    allSanityPost {
      nodes {
        title
        launchDate
        categories
        content
      }
    }
  }
  
`;

export default Popular