import { graphql, HeadFC, Link } from "gatsby"
import React, { lazy, useMemo } from "react"
import { Post } from "../interfaces/post.interface";
const Layout = lazy(() => import("../components/layout"))

const Blog = (sanityData: any) => {
    
    const postsByYear: any = useMemo(() => {
        const collection: any[] = []
        sanityData.data.allSanityPost.edges.forEach((post: any) => {
            const year = Number(post.node.launchDate.split("-")[0]);
            collection[Number(year)] = [...(collection[Number(year)] || []), post.node]
        })
    
        return collection
    }, [sanityData])
    const years = useMemo(() => Object.keys(postsByYear).reverse(), [postsByYear])

    return (
        <Layout>
            <div className="Blog">
                <h1 className="Blog__Title">Writing</h1>
                
                {
                    years.map(year => {
                        return(
                            <div className="Blog__Year">
                            <h2 className="Blog__Year--Date">{year}</h2>
                            <div className="Blog__Year--Content">
                                {
                                    postsByYear[year].map((node: any) => {
                                        const newDate = new Date(node.launchDate)
                                        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                                        const formattedDate = `${monthNames[newDate.getMonth()]} ${newDate.getDate()}`;
                                        return (
                                            <Link className="Latest__Posts--Link" to={node.slug.current}>
                                                <div className="Latest__Posts--Post">
                                                    <div className="Latest__Posts--Post-Row">
                                                        <h4 className="Latest__Posts--Post-Title">{node.title}</h4>
                                                        <h5 className="Latest__Posts--Post-Date">{formattedDate}</h5>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
  allSanityPost(sort: {launchDate: DESC}) {
    edges {
      node { 
        title
        launchDate,
        slug {
          current
        }
      }
    }
  }
}
`;

export const Head: HeadFC = () => <title>Blog | Roco Sittoni</title>

export default Blog