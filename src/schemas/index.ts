import { Static, Type } from "@sinclair/typebox";

export const MessageSchema = Type.Object({
  message: Type.String({ minLength: 5 }),
});

export type Message = Static<typeof MessageSchema>;
