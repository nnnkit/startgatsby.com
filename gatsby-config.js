module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-images" },
          {
            resolve: "gatsby-remark-prismjs"
            // options: {
            //   inlineCodeMarker: "÷"
            // }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts", // name of the folder
        path: `${__dirname}/posts/` // path of url
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
