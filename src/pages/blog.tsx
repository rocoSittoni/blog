import { HeadFC } from "gatsby"
import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"))

const Blog = () => {

    return (
        <Layout>
            <div className="Blog">
                <h1 className="Blog__Title">Writing</h1>
                
                <div className="Blog__Year">
                    <h2 className="Blog__Year--Date">2023</h2>
                    <div className="Blog__Year--Content">
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
                <div className="Blog__Year">
                    <h2 className="Blog__Year--Date">2022</h2>
                    <div className="Blog__Year--Content">
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
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Blog | Roco Sittoni</title>

export default Blog