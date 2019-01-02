import React from "react"
import { graphql } from "gatsby"
import PostLayout from "../components/postLayout"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <PostLayout postTitle={post.frontmatter.title}>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </PostLayout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`