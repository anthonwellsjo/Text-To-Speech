/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  /* Your site config here */
  pathPrefix: "/Its-Chuck",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Pacifico`,
          `Montserrat`,
          `Courier Prime`
        ],
        display: 'swap'
      }
    }
  ],
}