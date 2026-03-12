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

  //Logs
  log: {
    logLevel: process.env.LOG_LEVEL || "info",
    logDir: process.env.LOG_DIR || "./logs",
    logMaxSize: process.env.LOG_MAX_SIZE || "10m",
    logMaxFiles: process.env.LOG_MAX_FILES || "14d",
  },
};

const validateConfig = () => {
  const requiredConfig = ["database.dbUrl"];
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
