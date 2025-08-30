import { FastifyReply, FastifyRequest } from "fastify";
import { Act, ActId, Acts } from "../schemas/act";
import { Message } from "../schemas";

export const getActs = async (request: FastifyRequest): Promise<Act[]> => {
  const acts: Acts = await request.server.prisma.act.findMany();

  return acts;
};

// export const getAct = async (
//   request: FastifyRequest<{ Params: ActTitle }>,
//   reply: FastifyReply
// ): Promise<Act | null> => {
//   const act:Act= await request.server.prisma.act.fingUnique({ where: {id:}})
//   const act = acts.find(
//     act =>
//       act.title.toLocaleLowerCase() === request.params.title.toLocaleLowerCase()
//   );
//   if (!act) {
//     return reply.status(404).send({ message: "Act not found" });
//   }
//   return reply.status(200).send(act);
// };

export const addAct = async (
  request: FastifyRequest<{ Body: Act }>,
  reply: FastifyReply
): Promise<Act> => {
  const newAct: Act = await request.server.prisma.act.create({
    data: request.body,
  });

  return reply.status(201).send(newAct);
};

export const updateAct = async (
  request: FastifyRequest<{ Params: ActId; Body: Act }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const act: Act = await request.server.prisma.act.update({
    where: { id },
    data: request.body,
  });
  if (!act) {
    return reply.code(404).send({ message: `Act not found with id ${id}` });
  }

  return request.body;
};

export const deleteAct = async (
  request: FastifyRequest<{ Params: ActId }>,
  reply: FastifyReply
): Promise<Message> => {
  const { id } = request.params;
  const deletedAct = await request.server.prisma.act.delete({
    where: { id },
  });

  return reply.status(200).send({ message: "Act deleted", act: deletedAct });
};
