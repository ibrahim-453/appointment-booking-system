import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { config } from "./config/index.js";
import requestIdMiddleware from "./middlewares/requestId.js";
import { httpLogger } from "./utils/httpLogger.js";

// Initialize Express
const app = express();

// Security Middleware
app.use(
  helmet({
    contentSecurityPolicy: config.nodeEnv === "production" ? undefined : false,
  }),
);

// Cors Configuration
app.use(
  cors({
    origin:
      config.nodeEnv === "production"
        ? config.frontendUrl
        : "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID"],
  }),
);

app.use(requestIdMiddleware);
app.use(httpLogger);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

export default app;
