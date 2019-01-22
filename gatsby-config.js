module.exports = {
    siteMetadata: {
        title: `Udith's Blog`,
        author: `Udith Victor`,
        email: `udithv01@gmail.com`,
        description: `This is Udith's personal blog. It covers technology, gaming, programming, movies and tv shows.`,
        sociallinks: {
            github: `https://www.github.com/udithv`,
            linkedin: `https://www.linkedin.com/udithv`,
            medium: `https://www.medium.com/udithv`,
            stackoverflow: `https://www.stackoverflow.com/udithv`
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Udith's Blog",
                short_name: "Udith's Blog",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "standalone",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { 
                name: `src`,
                path: `${__dirname}/src`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
              color: `tomato`,
              showSpinner: false,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
              lang: 'en'
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`
    ],
}