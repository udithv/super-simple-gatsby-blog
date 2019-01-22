import React from "react"
import styled from "styled-components"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { rhythm } from "../utils/typography"

const PostContainer = styled.div`
    
    height: 100vh;
    width: 100%;
    padding: ${rhythm(1)+' '+rhythm(2)};
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${rhythm(2)};
`

const MainTitle = styled.h3`
    font-style: normal;

    a {
        text-decoration: none;
    }
`

const Navlinks = styled.div`
    a:not(:last-child) {
        margin-right: ${rhythm(1)};  
    }
`
const Container = styled.div`
    margin: 1rem auto;
    width: 75%;
`;

export default ({ children, postTitle }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={ data => (
            <PostContainer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{postTitle}</title>
                </Helmet>
                <Nav>
                    <MainTitle>
                        <Link to={`/`}>
                            {data.site.siteMetadata.title}
                        </Link>
                    </MainTitle>
                    <Navlinks>
                        <Link to={`/about/`}>
                            About
                        </Link>
                        <Link to={`/contact/`}>
                            Contact me
                        </Link>
                    </Navlinks>
                </Nav>
                <Container>
                    {children}
                </Container>
            </PostContainer>
        )}
    />
    
)

