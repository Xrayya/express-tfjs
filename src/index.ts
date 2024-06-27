import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import loggingMiddleware from "./middlewares/logging.middleware";
import { loadModel } from "./tf/bootstrap";
import modelRouter from "./routes/model.route";

dotenv.config();

const qFlareModelApp = express();
const port = process.env.PORT || 3000;

qFlareModelApp.use(cors());
qFlareModelApp.use(express.json());
qFlareModelApp.use(loggingMiddleware);

qFlareModelApp.locals.expModel = loadModel()

qFlareModelApp.get("/", (_req, res) => {
  res
    .json({
      status: "ok",
      message: "You're entering root route QFlare backend",
    })
    .status(200);
});

qFlareModelApp.use("/exp", modelRouter)

qFlareModelApp.use("*", (_req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

qFlareModelApp.listen(port, () => {
  console.log("\x1b[34m", `[Express] listening at http://localhost:${port}`);
});

export default qFlareModelApp;
