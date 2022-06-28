/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My First Gatsby Site",
    description:"이 사이트는 백엔드 스쿨 1기교육생 오현직학생 소유입니다."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
}