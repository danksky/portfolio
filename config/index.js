module.exports = {
  author: "@danksky",
  siteTitle: "Daniel Kawalsky's Portfolio",
  siteShortTitle: "dk.", // Used as logo text in header, footer, and splash screen
  siteDescription: "A portfolio of professional and personal projects.",
  siteUrl: "https://portfolio.danielkawalsky.com/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  splashScreen: false, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffetchrss.com%2Frss%2F5fbd2ebc6434cd62b54324125fbd2e9c5784de557f337b62.xml",
  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/daniel-kawalsky/",
    },
    {
      name: "GitHub",
      url: "https://github.com/danksky",
    },
    {
      name: "Medium",
      url: "https://blog.danielkawalsky.com",
    },
  ],

  navLinks: {
    menu: [
      // {
      //     name: "Articles",
      //     url: "/#articles",
      // },
      {
        name: "About",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    // {
    //     name: "Imprint",
    //     url: "/imprint"
    // }
  ],
}
