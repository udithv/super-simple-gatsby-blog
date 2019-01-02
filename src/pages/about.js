import React from "react"
import { graphql } from "gatsby"
import IndexLayout from "../components/indexLayout"

export default ({ data }) => (
    <IndexLayout>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best photos and videos 
            of pandas eating lots of food.
        </p>
    </IndexLayout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`