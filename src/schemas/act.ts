import { Static, Type } from "@sinclair/typebox";

export const ActSchema = Type.Object({
  title: Type.String({ minLength: 5, maxLength: 100 }),
  titleDia: Type.Optional(Type.String()),
  genre: Type.String(),
  duration: Type.String(),
  scene: Type.String(),
  actors: Type.String(),
  subject: Type.String(),
  plot: Type.String(),
  meaning: Type.String(),
  remarks: Type.Optional(Type.String()),
});

export type Act = Static<typeof ActSchema>;

export const ActsSchema = Type.Array(ActSchema);

export type Acts = Static<typeof ActsSchema>;

export const ActTitleSchema = Type.Object({
  title: Type.String(),
});

export type ActTitle = Static<typeof ActTitleSchema>;
