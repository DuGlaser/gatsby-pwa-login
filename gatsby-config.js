module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "sample",
        short_name: "sample",
        start_url: "/?utm_source=homescreen",
        // detail: https://web.dev/add-manifest/
        background_color: "#fff", // app startup background
        theme_color: "#d23d29", // browser tool ber color
        display: "minimal-ui", // app style
        icon: "static/icons/app.png",
      },
    },
  ],
};
