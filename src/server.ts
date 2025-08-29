import fastify from "fastify";
import { actsRoutes } from "./routes/acts";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const app = fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>();

// regiter routes
const registerRoutes = async () => {
  const opts = { prefix: "/api" };
  await app.register(actsRoutes, opts);
};

export const startServer = async () => {
  try {
    await registerRoutes();
    await app.listen({ port: 4002, host: "0.0.0.0" });
    app.log.info(`Server listening on http://localhost:4002`);
  } catch (ex) {
    app.log.error(ex);
    process.exit(1);
  }
};
