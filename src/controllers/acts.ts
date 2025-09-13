import { FastifyReply, FastifyRequest } from "fastify";
import { Act, ActId } from "../schemas/act";
import { Message } from "../schemas";
import { notFound } from ".";
import { actsService } from "../services/actsService";

const actNotFound = (reply: FastifyReply, id: number) =>
  notFound(reply, `Act not found with id ${id}`);

export const actsController = {};

// get all acts
export const getActs = async (request: FastifyRequest, reply: FastifyReply) => {
  const { getActs } = actsService(request.server);
  const acts = await getActs();

  return reply.code(200).send(acts);
};

// get act by ID
export const getAct = async (
  request: FastifyRequest<{ Params: ActId }>,
  reply: FastifyReply
) => {
  const { getAct } = actsService(request.server);
  const { id } = request.params;
  const act = await getAct(id);
  if (!act) {
    return actNotFound(reply, id);
  }
  return reply.status(200).send(act);
};

// add new act
export const addAct = async (
  request: FastifyRequest<{ Body: Act }>,
  reply: FastifyReply
) => {
  const { prisma } = request.server;
  const act = await prisma.act.create({
    data: request.body,
  });
  return reply.status(201).send(act);
};

// update exiting act
export const updateAct = async (
  request: FastifyRequest<{ Params: ActId; Body: Act }>,
  reply: FastifyReply
) => {
  const { prisma } = request.server;
  const { id } = request.params;
  const { count } = await prisma.act.updateMany({
    where: { id },
    data: request.body,
  });
  if (count === 0) {
    return actNotFound(reply, id);
  }

  return reply.code(200).send(request.body);
};

// delete existing act
export const deleteAct = async (
  request: FastifyRequest<{ Params: ActId }>,
  reply: FastifyReply
): Promise<Message> => {
  const { id } = request.params;
  const { prisma } = request.server;
  const act = await prisma.act.delete({
    where: { id },
  });
  if (!act) {
    return actNotFound(reply, id);
  }

  return reply.status(200).send({ act });
};
