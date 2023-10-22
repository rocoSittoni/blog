import { HeadFC } from "gatsby"
import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"))
import ProjectsList from "../components/projects"

const Projects = () => {

    return (
        <Layout>
            <div className="Projects">
                <h1 className="Projects__Title">Projects</h1>
                <ProjectsList viewAll='false'/>
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>Projects | Roco Sittoni</title>

export default Projects