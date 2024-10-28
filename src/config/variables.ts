export default {
  MONGO_IP: process.env.MONGO_IP || "mongo",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_INITDB_ROOT_USERNAME || "user",
  MONGO_PASSWORD: process.env.MONGO_INITDB_ROOT_PASSWORD || "pass",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
};
