module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "hays", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Hays Stanford", // Site title.
  siteTitleAlt: "Hays Stanford", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://blog.haysstanford.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Learn JavaScript by Building What You Want.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/ocean-background-min.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Hays Stanford", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 5, // The max number of posts per page.
  googleAnalyticsID: "UA-123797485-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/HaysS",
    "https://twitter.com/thehaysstanford",
    "mailto:stanfordhays@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/HaysS",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/thehaysstanford",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:stanfordhays@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Hays Stanford", // Label used before the year
    year: "2018", // optional, set specific copyright year or range of years, defaults to current year
    url: "http://www.blog.haysstanford.com/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
