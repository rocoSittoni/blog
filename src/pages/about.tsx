import { HeadFC } from "gatsby"
import React, { lazy } from "react"
const Layout = lazy(() => import("../components/layout"))

const About = () => {
    return (
        <Layout>
            <div className="About">
                <h1 className="About__Title">About me</h1>
                <p className="About__Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur, odit, modi sequi fugiat adipisci animi facere quis, autem ut iusto. Perferendis quae expedita eum minus voluptates natus nisi a.</p>
            </div>
        </Layout>
    )
}

export const Head: HeadFC = () => <title>About me | Roco Sittoni</title>

export default About