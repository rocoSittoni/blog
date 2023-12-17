import React, { lazy } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby";

import '../styles/index.scss';
import LatestPosts from "../components/latestPosts";
import { Post } from "../interfaces/post.interface";
import Popular from "../components/popular";

const Layout = lazy(() => import("../components/layout"))
import { StaticImage } from "gatsby-plugin-image"
import rick from '../gifs/rick.gif'
import ProjectsList from "../components/ProjectsList";

interface HomeProps extends PageProps {
  data: {
    allSanityPost: {
      edges: {
        node: any;
      }
    };
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {

  const sanityData: any = data.allSanityPost.edges;

  return (
    <Layout>
      <main className="Home">
        <div className="Home__Header">
          <div className="Home__Left">
            <h1 className="Home__Title">Hi, I'm Roco!</h1>
            {/* &#x1F680; */}
            {/* <p className="Home__Subtitle">Welcome to my lab. 🧪</p> */}
            <p className="Home__Description">
              I'm a software developer focused on working with challenging projects while having fun.
              This is the place where i share the stuff that i create and write.
            </p>
          </div>
          <div className="Home__Right">
            {/* <StaticImage src="../images/rick.gif" alt="Rick-Sanchez" /> */}
            <img src={rick} alt="Rick Sanchez" style={{width: '100%'}} />
          </div>
        </div>
        <LatestPosts sanityData={sanityData} />
        <Popular sanityData={sanityData} />
        <ProjectsList viewAll={true}/>
      </main>
    </Layout>
  )
}

export const query = graphql`
query {
  allSanityPost(sort: {launchDate: DESC}, limit: 6) {
    edges {
      node { 
        title
        categories
        launchDate,
        slug {
          current
        }
      }
    }
  }
}
`;

export default Home
export const Head: HeadFC = () => <title>Home | Roco Sittoni</title>
