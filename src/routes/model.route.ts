import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { requestValidationMiddleware } from "../middlewares/requestValidation.middleware";
import {
  calculateExpSchema,
  getQuestionRecommendationSchema,
} from "../zod/schemas/modelRoute";
import {
  calculateExp,
  getQuestionRecommendataion,
} from "../controllers/model.controller";

const modelRouter = express.Router();

modelRouter.use(authMiddleware);

modelRouter.post(
  "/recommendation",
  requestValidationMiddleware(getQuestionRecommendationSchema),
  getQuestionRecommendataion,
);
modelRouter.post(
  "/exp",
  requestValidationMiddleware(calculateExpSchema),
  calculateExp,
);

export default modelRouter;
