import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import IndexLayout from "../components/indexLayout"

const Img = styled.img`
    display: block;
    margin: 10px auto;
`;

export default ({ data }) => (
    <IndexLayout>
        <h1>About <Link to="/">{data.site.siteMetadata.title}</Link></h1>
        <p>
            Udith (yes, I am talking in the third person) is a computer engineer with a Bachelor's degree. He is a developer interested in 
            web, programming and anything that has to do with technology.
            <br />
            I am also an shitty flute player.
        </p>

        <Img src="https://thumbs.gfycat.com/SomberRemarkableAnura-small.gif" alt="shitty_flute" />

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