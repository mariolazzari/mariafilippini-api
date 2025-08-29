import { FastifyPluginAsync } from "fastify";
import { getActs, getAct } from "../controllers/acts";
import { ActSchema, ActsSchema } from "../schemas/act";
import { Type } from "@sinclair/typebox";

export const actsRoutes: FastifyPluginAsync = async app => {
  app.get(
    "/acts",
    {
      schema: {
        response: {
          200: ActsSchema,
        },
      },
    },
    getActs
  );

  app.get(
    "/acts/:title",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            title: Type.String({ minLength: 5, maxLength: 100 }),
          },
          required: ["title"],
        },
        response: {
          200: ActSchema,
          404: Type.Object({ message: Type.String() }),
        },
      },
    },
    getAct
  );
};
