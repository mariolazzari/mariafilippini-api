import { Type, Static } from "@sinclair/typebox";

export const EnvSchema = Type.Object({
  PORT: Type.Number({ default: 4002 }),
  DATABASE_URL: Type.String(),
  JWT_SECRET: Type.String(),
});

export type Env = Static<typeof EnvSchema>;
