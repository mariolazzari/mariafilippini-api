import { FastifyInstance } from "fastify";

export const actsService = (app: FastifyInstance) => {
  const { prisma } = app;

  const getActs = async () => await prisma.act.findMany();

  const getAct = async (id: number) =>
    await prisma.act.findUnique({ where: { id } });

  return { getActs, getAct };
};
