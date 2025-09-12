import { FastifyPluginAsync } from "fastify";
import { getActs, getAct, addAct, updateAct, deleteAct } from "../controllers";
import { ActIdSchema, ActSchema, ActsSchema } from "../schemas/act";
import { MessageSchema } from "../schemas";

export const actsRoutes: FastifyPluginAsync = async app => {
  // get all acts
  app.get(
    "/",
    {
      schema: {
        response: {
          200: ActsSchema,
        },
      },
    },
    getActs
  );

  // get act by ID
  app.get(
    "/:id",
    {
      schema: {
        params: ActIdSchema,
        response: {
          200: ActSchema,
          404: MessageSchema,
        },
      },
    },
    getAct
  );

  // add new act
  app.post(
    "/",
    {
      schema: {
        body: ActSchema,
        response: {
          201: ActSchema,
        },
      },
    },
    addAct
  );

  // update act
  app.put(
    "/:id",
    {
      schema: {
        params: ActIdSchema,
        body: ActSchema,
        response: {
          201: ActSchema,
          404: MessageSchema,
        },
      },
    },
    updateAct
  );

  // delete act
  app.delete(
    "/:id",
    {
      schema: {
        params: ActIdSchema,
        response: {
          200: MessageSchema,
          404: MessageSchema,
        },
      },
    },
    deleteAct
  );
};
