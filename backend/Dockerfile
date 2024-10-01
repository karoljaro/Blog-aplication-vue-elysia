FROM oven/bun:latest

COPY . /api/

WORKDIR /api

RUN bun i

CMD [ "bun", "run", "dev" ]