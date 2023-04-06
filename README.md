# Typescript Node Backend Example

## Project

REST API local development example using Typescript and Node.js with a Postgres database.

## Dependencies

- Typescript
- Express
- Prisma
- Knex

### Local Development

docker-compose with two services:

- backend
- postgres

Build and start both services
`docker compose up -d`

Initialize database
`docker compose exec backend pnpm db:up`

Seed the database
`docker compose exec backend pnpm db:seed`

Clean the database
`docker compose exec backend pnpm db:down`

### Useful commands

Stop both services
`docker compose down`

Stop both services and delete volumes
`docker compose down -v`

Rebuild backend service after changes
`docker compose build backend`
