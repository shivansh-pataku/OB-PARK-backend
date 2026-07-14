export default () => ({
  app: {
    name: process.env.APP_NAME,
    port: parseInt(process.env.PORT || '3000', 10), // 10 means decimal which is the default base for parseInt means it takes the string and converts it to a number in base 10
    environment: process.env.NODE_ENV,
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
});