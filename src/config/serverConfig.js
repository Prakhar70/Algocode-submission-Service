const dotenv = require("dotenv");

dotenv.config();


module.exports = {
  PORT: process.env.PORT || 5000,
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  ATLAS_DB_URL:
    process.env.ATLAS_DB_URL ||
    "mongodb+srv://prakharagarwal70:MVMKAkFTCAQ4HZet@cluster0.d4ovd.mongodb.net/",
  NODE_ENV: process.env.NODE_ENV || "development",
  PROBLEM_ADMIN_SERVICE_URL:
    process.env.PROBLEM_ADMIN_SERVICE_URL || "http:localhost:3000",
};
