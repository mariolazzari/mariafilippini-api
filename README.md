# mariafilippini-api

## Setup

```sh
pmpm init
tsc --init
pnpm add -D typescript tsx @types/node prisma
pnpm add fastify @sinclair/typebox @fastify/type-provider-typebox @prisma/client
pnpx prisma init
pnpx prisma migrate dev --name init
```
