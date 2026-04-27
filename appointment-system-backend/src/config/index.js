import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  // Server
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 3000,

  // Frontend
  frontendUrl: process.env.FRONTEND_URL,

  // Database
  database: {
    dbName: process.env.DB_NAME,
    dbUrl: process.env.MONGODB_URI,
    maxPool: Number(process.env.MAX_POOL_SIZE) || 10,
    minPool: Number(process.env.MIN_POOL_SIZE) || 1,
  },
  
  //  JWT
  jwt: {
    secret: process.env.JWT_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshSecretExpiry: process.env.JWT_REFRESH_SECRET_EXPIRES_IN,
    rememberMeExpiry: process.env.JWT_REFRESH_SECRET_EXPIRES_IN_REMEMBER_ME
  },

  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },

  //Logs
  log: {
    logLevel: process.env.LOG_LEVEL || "info",
    logDir: process.env.LOG_DIR || "./logs",
    maxSize: process.env.LOG_MAX_SIZE || "10m",
    maxFiles: process.env.LOG_MAX_FILES || "14d",
  },
};

const validateConfig = () => {
  const requiredConfig = ["database.dbUrl", "jwt.secret", "jwt.refreshSecret"];
  if (config.nodeEnv === "production") {
    const missing = [];
    requiredConfig.forEach((key) => {
      const keys = key.split(".");
      let value = config;
      keys.forEach((k) => {
        value = value?.[k];
      });
      if (!value) {
        missing.push(key);
      }
    });

    if (missing.length > 0) {
      throw new Error(
        `Missing required config in production: ${missing.join(", ")}`,
      );
    }
  }
};

validateConfig();

export { config };
