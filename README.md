## Getting Started

First, Install Dependencies

```bash
pnpm install

```

Before runing the dev server copy the .env.example file and rename it .env.development

If you are creating a new database and you are using Prisma you will have to setup the Docker Environment

1. Change the 'CHANGEME' in the docker-compose file to DB name
2. Next run the below command

```bash

docker compose up

```

If you are connecting to an existing DB using Prisma you will have to change the DATABASE_URL in the .env file

### Prisma Commands

```bash

pnpm prisma migrate dev

```

If you are connecting to an existing DB not using Prisma you will have to configure the NEXT_DATABASE values in the .env.development file

Next, run the development server:

```bash

pnpm dev

```

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)
- [Next Auth](https://next-auth.js.org/)
- [Jest](https://jestjs.io/)
- [Prisma](https://www.prisma.io/)
