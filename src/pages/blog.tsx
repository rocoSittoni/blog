import { HeadFC } from "gatsby"
import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"))

const Blog = () => {

    return (
        <Layout>
            <div className="Blog">
                <h1 className="Blog__Title">Writing</h1>
                
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Blog | Roco Sittoni</title>

export default Blog