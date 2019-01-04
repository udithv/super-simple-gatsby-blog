module.exports = {
    siteMetadata: {
        title: `Udith's Blog`,
        description: `This is Udith's personal blog. It covers technology, gaming, programming, movies and tv shows.`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
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