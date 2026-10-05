FROM oven/bun:1
WORKDIR /usr/src/app

COPY package.json app.js ./

USER bun
EXPOSE 4000/tcp
ENTRYPOINT ["bun", "run", "app.js"]
