import React from "react"
import { Link } from 'gatsby';

const LatestPosts = (sanityData: any) => {

    console.log(sanityData.sanityData)

    return (
        <div className="Latest__Posts">
            <div className="Latest__Posts--Header">
                <h1 className="Latest__Posts--Title">Latest Posts</h1>
                <button>View all</button>
            </div>
            <div className="Latest__Posts--Content">
                {
                    sanityData.sanityData.map((post: any) => {
                        return (
                            <Link to={post.node.slug}>
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