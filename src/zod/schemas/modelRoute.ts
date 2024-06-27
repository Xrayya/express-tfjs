import { array, number, string, z } from "zod";
import { ExpressRequestSchema, TypedRequest } from "./expressRequest";
import { validCategories } from "../../constants";

export const getQuestionRecommendationSchema = new ExpressRequestSchema({
  bodySchema: z.object({
    userId: string(),
    quizCategory: string().refine(
      (value) => {
        return validCategories.includes(value);
      },
      {
        message: "Invalid quiz category",
      },
    ),
  }),
  paramsSchema: z.object({}),
  queryParamsSchema: z.object({}),
});

export type GetQuestionRecommendationRequest = TypedRequest<
  typeof getQuestionRecommendationSchema
>;

export const calculateExpSchema = new ExpressRequestSchema({
  bodySchema: z.object({
    answers: array(array(number()).length(10)),
  }),
  paramsSchema: z.object({}),
  queryParamsSchema: z.object({}),
});

export type CalculateExpRequest = TypedRequest<typeof calculateExpSchema>;
