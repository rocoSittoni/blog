import { HeadFC } from "gatsby"
import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"))

const Projects = () => {

    return (
        <Layout>
            <div className="Projects"></div>
            <h1 className="Projects__Title">Projects</h1>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Projects | Roco Sittoni</title>

export default Projects