import { FastifyReply } from "fastify";

// build not found entity message
export const notFound = (reply: FastifyReply, message: string) =>
  reply.code(404).send({ message });

// export all methods
export * from "./acts";
