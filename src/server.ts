import fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import addFormats from "ajv-formats";
// routes
import { actsRoutes } from "./routes/acts";
// plugins
import prismaPlugin from "./plugins/prisma";
import envPlugin from "./plugins/env";

const app = fastify({
  logger: true,
  ajv: { plugins: [addFormats] },
}).withTypeProvider<TypeBoxTypeProvider>();

// register plugins
const registerPlugins = async () => {
  app.log.info("Registing plugins...");
  app.register(envPlugin);
  app.register(prismaPlugin);
  app.log.info("Plugins registred");
};

// regiter routes
const registerRoutes = async () => {
  app.log.info("Registing routes...");
  await app.register(actsRoutes, { prefix: "/api/acts" });
  app.log.info("Routes registred");
};

export const startServer = async () => {
  try {
    app.log.info("Starting server...");
    // register plugins and routes
    await registerPlugins();
    await registerRoutes();
    // start server
    const msg = await app.listen({ port: app.config.PORT, host: "0.0.0.0" });
    app.log.info(`Server listening on ${msg}`);
  } catch (ex) {
    app.log.error("Error starting server");
    app.log.error(ex);
    process.exit(1);
  }
};
