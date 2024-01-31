import { graphql, Link } from 'gatsby';
import React from 'react'

const Popular = (sanityData: any) => {
    const posts = sanityData.sanityData;
    return (
        <div className="Popular">
            <h1 className="Popular__Title">Popular</h1>
            <div className="Popular__Content">
                {
                    posts.map((post: any) => {
                        return (
                            <Link to={'/blog/' + post.node.slug.current} className='Popular__Post'>
                                <h3 className="Popular__Post--Title">{post.node.title}</h3>
                                <div className="Popular__Post--Footer">
                                    <div>{post.node.launchDate}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const query = graphql`
query {
    allSanityPost {
      nodes {
        title
        launchDate
        content
      }
    }
  }
  
`;

export default Popular