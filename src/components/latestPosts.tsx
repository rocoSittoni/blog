import React from "react"
import { Link } from 'gatsby';

const LatestPosts = (sanityData: any) => {

    const posts = sanityData.sanityData.slice(0, 6);

    return (
        <div className="Latest__Posts">
            <div className="Latest__Posts--Header">
                <h1 className="Latest__Posts--Title">Latest Posts</h1>
                <Link to="/blog">
                    <button>View all</button>
                </Link>
            </div>
            <div className="Latest__Posts--Content">
                {   

                    posts.map((post: any) => {
                        return (
                            <Link to={post.node.slug.current}>
                                <div className="Latest__Posts--Post">
                                    <div className="Latest__Posts--Post-Row">
                                        <h4 className="Latest__Posts--Post-Title">{post.node.title}</h4>
                                        <h5 className="Latest__Posts--Post-Date">{post.node.launchDate}</h5>
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

export default LatestPosts