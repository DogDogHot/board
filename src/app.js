import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import errorHandler from "./middlewares/errorHandler.middleware";
import { NotFoundError } from "./helpers/errors.helper";
import config from "./config/sequelize.config";
import initModels from "./models/init-models";
import v1Routes from "./routes";

const sequelize = new Sequelize(config);

const db = initModels(sequelize);
sequelize.sync();

/**
 * Define Express
 * @type {*|Express}
 */
const app = express();

/**
 * 프로시 환경일 경우 설정
 */
app.set("trust proxy", true);

/**
 * access log 포맷 정의
 */
app.use(
  morgan(
    `:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]  :response-time ms ":referrer" ":user-agent"`,
    {
      skip(req) {
        if (req.method === "OPTIONS") {
          return true;
        }
        return false;
      },
    }
  )
);

/**
 * Set security HTTP Headers
 */
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

/**
 * Parse json request body
 */
app.use(express.json());

/**
 * Parse urlencoded request body
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Sanitize data
 */
app.use(xss());

/**
 * GZIP compression
 */
app.use(compression());

/**
 * Parsing cookie
 */
app.use(cookieParser());

/**
 * CORS policy configuration
 */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/**
 * Routes definitions
 */
app.use("/api/v1/", v1Routes);

/**
 * This helper function is useful if we use express as a pure API endpoint
 * Everytime you hit a route that doesn't exist it returns a json error 404
 */
// eslint-disable-next-line no-unused-vars
app.all("*", (_, res) => {
  throw new NotFoundError("Resource not found on this server!!");
});

app.use(errorHandler);

export default app;
