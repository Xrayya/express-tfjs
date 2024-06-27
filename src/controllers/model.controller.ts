import { Response } from "express";
import {
  CalculateExpRequest,
  GetQuestionRecommendationRequest,
} from "../zod/schemas/modelRoute";
import { predictExp } from "../models/model.model";

export const getQuestionRecommendataion = async (
  req: GetQuestionRecommendationRequest,
  res: Response,
) => { };

export const calculateExp = async (
  req: CalculateExpRequest,
  res: Response,
) => {
  const expGain = await predictExp(req.body.answers);

  res.status(200).json({
    status: "success",
    data: {
      expGain,
    },
  });
};
