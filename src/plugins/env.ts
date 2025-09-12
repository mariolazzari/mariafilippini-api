import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";
import { Env, EnvSchema } from "../schemas";

declare module "fastify" {
  interface FastifyInstance {
    config: Env;
  }
}

export default fp(async fastify => {
  await fastify.register(fastifyEnv, {
    schema: EnvSchema,
    dotenv: true,
  });
});
