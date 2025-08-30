import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";
import { Env, EnvSchema } from "../schemas/env";

declare module "fastify" {
  interface FastifyInstance {
    config: Env; // 👈 typed config available everywhere
  }
}

export default fp(async fastify => {
  await fastify.register(fastifyEnv, {
    schema: EnvSchema,
    dotenv: true,
  });
});
