import fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import addFormats from "ajv-formats";
// routes
import { actsRoutes } from "./routes/acts";
// plugins
import prismaPlugin from "./plugins/prisma";
import envPlugin from "./plugins/env";
import { Env } from "./schemas/env";

const app = fastify({
  logger: true,
  ajv: { plugins: [addFormats] },
}).withTypeProvider<TypeBoxTypeProvider>();

// register plugins
const registerPlugins = async () => {
  app.register(envPlugin);
  app.register(prismaPlugin);
};

// regiter routes
const registerRoutes = async () => {
  const opts = { prefix: "/api" };
  await app.register(actsRoutes, opts);
};

export const startServer = async () => {
  try {
    app.log.info("Starting server...");
    // register plugons and routes
    await registerPlugins();
    await registerRoutes();
    // read enviroment
    const env = app.config as Env;
    // start server
    await app.listen({ port: env.PORT, host: "0.0.0.0" });
    app.log.info(`Server listening on http://localhost:${env.PORT}`);
  } catch (ex) {
    app.log.error("Error starting server");
    app.log.error(ex);
    process.exit(1);
  }
};
