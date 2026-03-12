import mongoose from "mongoose";
import { config } from "./index.js";
import { logger } from "../utils/logger.js";

const connectDB = async () => {
  try {
    const result = await mongoose.connect(
      `${config.database.dbUrl}/${config.database.dbName}`,
      {
        maxPoolSize: config.database.maxPool,
        minPoolSize: config.database.minPool,
        connectTimeoutMS: 30000,
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      },
    );

    logger.info(`MongoDB Connected: ${result.connection.host}`);
    return true;
  } catch (error) {
    logger.error("Error connecting to DB", error);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  logger.info("New Connection established");
});

mongoose.connection.on("disconnected", () => {
  logger.info("Lost connection to DB");
});
mongoose.connection.on("error", (err) => {
  logger.error("MongoDB error:", err);
});

const disconnectDB = async () => {
  try {
    const result = await mongoose.disconnect();
    logger.info("Database disconnected successfully");
    return true;
  } catch (error) {
    logger.error("Error disconnecting to DB", error);
    process.exit(1);
  }
};

export { connectDB, disconnectDB };
