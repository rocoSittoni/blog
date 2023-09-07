import React from "react"

const LatestPosts = () => {

    return (
        <div className="Latest__Posts">
            <div className="Latest__Posts--Header">
                <h1 className="Latest__Posts--Title">Latest Posts</h1>
                <button>View all</button>
            </div>
            <div className="Latest__Posts--Content">
                {
                    [0, 1, 2, 3, 4, 5].map(i => {
                        return (
                            <div className="Latest__Posts--Post">
                                <div className="Latest__Posts--Post-Row">
                                    <h4 className="Latest__Posts--Post-Title">This is a random blog post.</h4>
                                    <h5 className="Latest__Posts--Post-Date">August 11, 2023</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LatestPosts