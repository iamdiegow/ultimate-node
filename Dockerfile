FROM node:18

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install --frozen-lockfile

RUN prisma/schema.prisma ./prisma/

RUN pnpx prisma generate

COPY . .

EXPOSE 3000

CMD [ "pnpm", "start" ]
