import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

const { title } = data.site.siteMetadata

    return (
        <nav>
            <div className="headerLink">
            <Link to="/"><h1>BeanBusters</h1></Link>
            </div>
            <div className="links">
                <Link to="/discovercoffee">Coffee</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/localCafe">Local cafe</Link>
                <Link to="/about">About</Link>
                <Link to="/account">Account</Link>    
            </div>
        </nav>
    )
}
