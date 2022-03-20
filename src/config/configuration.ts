export default () => ({
  port: process.env.PORT,
  jwt: {
    jwtSecret: process.env.JWT_SECRET,
  },
});
