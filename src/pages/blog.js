import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/blogs.module.css'
import Img from 'gatsby-image'

const Blogs = ({ data }) => {
    console.log(data)
    const blogs = data.blogs.nodes
    const contact = data.contact.siteMetadata.contact


    return (
        <Layout>
            <div>
                <div className={styles.portfolio}>
                    <h2>Blog about coffee</h2>
                    <div className={styles.blogs}>
                        { blogs.map(blog => (
                            <Link to={"/projects/" + blog.frontmatter.slug} key={blog.id}>
                                <div>
                                    <Img fluid={blog.frontmatter.thumb.childImageSharp.fluid} />
                                    <h3>{ blog.frontmatter.title }</h3>
                                    <p> { blog.frontmatter.stack } </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <p>Like what you see mail me at { contact }</p>
            </div>
        </Layout>
    );
}

export default Blogs

// export page query
export const query = graphql`
query BlogPage {
    blogs: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            title
            stack
            slug
            thumb {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
          id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
  }
`