import { FastifyPluginAsync } from "fastify";
import {
  getActs,
  //  getAct,
  addAct,
  updateAct,
  deleteAct,
} from "../controllers/acts";
import { ActIdSchema, ActSchema, ActsSchema } from "../schemas/act";
import { MessageSchema } from "../schemas";

export const actsRoutes: FastifyPluginAsync = async app => {
  // get all acts
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

  // get act by title
  // app.get(
  //   "/acts/:title",
  //   {
  //     schema: {
  //       params: ActTitleSchema,
  //       response: {
  //         200: ActSchema,
  //         404: MessageSchema,
  //       },
  //     },
  //   },
  //   getAct
  // );

  // add new act
  app.post(
    "/acts",
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
    "/acts/:id",
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
    "/acts/:id",
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
