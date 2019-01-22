import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { SocialIcon } from 'react-social-icons'
import IndexLayout from "../components/indexLayout"

const SI = styled(SocialIcon)`
    background-image: none;
    cursor: pointer;
    margin: 10px;
`;

const Author = styled(Link)`
    color: orange;
    text-decoration: none;
`;

export default ({ data }) => {
    const { sociallinks: { github, linkedin, medium }, email } = data.site.siteMetadata;

    return (
        <IndexLayout>
            <h1>Contact <Author to="/about">{data.site.siteMetadata.author}</Author></h1>
            <p>If you want to contact me. Send me an <a href={`mailto:${email}`}>email</a>.</p>
            <p>If you want checkout some source code for my projects. Checkout my <a target="__blank" href={github} >Github</a> link.</p>
            <p>Don't forget to clap the blog posts you liked on <a target="__blank" href={medium}>Medium.</a></p>
            <div>
                <SI url={github} target="__blank" network="github" label="Source Code"/>
                <SI url={linkedin} target="__blank" network="linkedin" label="Do you have a job for me??" />
                <SI url={medium} target="__blank" network="medium" label="Clap Clap Clap"/>
                <SI url={`mailto:${email}`} target="__blank" label="Email me" />
            </div>
        </IndexLayout>    
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                author
                email
                sociallinks {
                    github
                    linkedin
                    medium
                    stackoverflow
                }
            }
        }
    }
`