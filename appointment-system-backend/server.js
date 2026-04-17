import app from "./src/app.js";
import { config } from "./src/config/index.js";
import { connectDB, disconnectDB } from "./src/config/db.js";
import logger from "./src/utils/logger.js";
import seedRoles from "./src/database/seeds/role.seed.js";
import dns from 'dns'

dns.setServers(['1.1.1.1', '8.8.8.8'])
const startServer = async () => {
  try {
    await connectDB();
    logger.info("Database connected");

    await seedRoles();

    const server = app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });

    let isShuttingDown = false;

    const gracefulShutdown = (signal) => {
      if (isShuttingDown) return;

      isShuttingDown = true;

      logger.info(`${signal} received, Shutting down gracefully`);

      const forceShutdown = setTimeout(async () => {

        logger.error("Forcefully closing the connection");
        await disconnectDB();
        process.exit(1);
      }, 30000);
      
      server.close(async () => {
        clearTimeout(forceShutdown);
        await disconnectDB();
        logger.info("Database disconnected");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  } catch (error) {
    logger.error("Failed to start server", error);
    process.exit(1);
  }
};
process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
 logger.error("Unhandled Rejection:", err);
  process.exit(1);
});
startServer();
