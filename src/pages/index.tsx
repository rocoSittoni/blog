import React, { lazy } from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/index.scss';
import LatestPosts from "../components/latestPosts";
import Popular from "../components/popular";
import Projects from "../components/projects";

const Layout = lazy(() => import("../components/layout"))

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="Home">
        <div className="Home__Header">
          <div className="Home__Left">
            <h1 className="Home__Title">Hi, I'm Roco!</h1>
            <p className="Home__Subtitle">Welcome to my digital space. (Icon)</p>
            <p className="Home__Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et illo, ea quis perspiciatis placeat dolor modi dolorum cupiditate, facilis ad deleniti odit corrupti possimus</p>
          </div>
          <div className="Home__Right">
            
          </div>
        </div>
        <LatestPosts />
        <Popular />
        <Projects />
      </main>
    </Layout>
  )
}

export default Home

export const Head: HeadFC = () => <title>Home | Roco Sittoni</title>
