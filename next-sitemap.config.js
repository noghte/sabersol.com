module.exports = {
  siteUrl: "https://sabersol.com",
  exclude: ["/404", "/blog/seo-guide-jamstack-react-development"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
