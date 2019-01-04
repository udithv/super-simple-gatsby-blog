import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { rhythm } from "../utils/typography"
import SideBar from './sidebar';

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    padding: ${rhythm(1)+' '+rhythm(2)};

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
const ArticlesWrapper = styled.div`
    flex: 3;
    height: 100%;

    @media(max-width: 768px) {
        flex: 1
    }
`
export default ({ children, postTitle }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={ data => (
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={data.site.siteMetadata.description} />
                    <title>{data.site.siteMetadata.title}</title>
                </Helmet>
                <SideBar />
                <ArticlesWrapper>
                    {children}
                </ArticlesWrapper>
            </Container>
        )}
    />
    
)

