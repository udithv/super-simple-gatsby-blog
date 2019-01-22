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

    & iframe, video, embed, img{
        display: block;
        margin: 2rem auto;
    }
`;

const Tags = styled.div`
    margin: 2rem;
`;

const Tag = styled.span`
    font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif;
    background-color: #eff0f1;
    color: #393318;
    padding: 4px 8px;
    margin: 0.1rem;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 2rem 0;
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;

    &:after {
        content: "§";
        display: inline-block;
        position: relative;
        top: -0.7em;
        font-size: 1.5em;
        padding: 0 0.25em;
        background: white;
    }
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
                    <Hr />
                    <Tags>
                        <Tag>nodejs</Tag>
                        <Tag>reactjs</Tag>
                        <Tag>mongodb</Tag>
                        <Tag>graphql</Tag>
                    </Tags>
                </Container>
            </PostContainer>
        )}
    />
    
)

