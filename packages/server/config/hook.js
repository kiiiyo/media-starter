module.exports = {
  settings: {
    algolia: {
      enabled: true,
      applicationId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      debug: true, // default: false
      prefix: "media-starter", // default: Strapi environment (strapi.config.environment)
    },
  },
};
