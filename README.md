# Astro Prisma Starter

This is a starter project that integrates Prisma with an Astro. It uses the following technologies:

- Astro
- React
- Tailwind CSS
- TypeScript
- ESLint
- Prettier
- Prisma
- lisql
- Turso

It demonstrates how to connect to a Turso database and perform basic operations.

## Development

```bash
yarn dev
```

## Production

```bash
yarn build
yarn preview
```

## Prisma

### Database schema migration flow

Database schema migration flow differs a little bit from the default Prisma flow.

```bash
npx prisma migrate dev --name a_name_for_the_migration --skip-seed
```

This will create a new migration file in the `prisma/migrations` directory.

### Apply the migration to the Turso database

To apply the migration to the Turso database, run:

```bash
turso db shell turso-db-name < ./prisma/migrations/20230922132717_init/migration.sql
```

Replace `turso-db-name` with the name of your Turso database. Replace `20230922132717_init` with the
name of your migration.

### Seed the database

To seed the database, run:

```bash
npx prisma db seed
```

### Using the Prisma Client in your code

To use the Prisma Client in your code, you need to import it from `~/lib/prisma` and use it as
normal.

```ts
import { prisma } from '~/lib/prisma'

const tasks = await prisma.task.findMany()
```

### Prisma Studio

To start Prisma Studio, run:

```bash
npx prisma studio
```

This will start a web server and open a new tab in your browser.
