const port = process.env.PORT ? Number(process.env.PORT) : 4000;
const message = process.env.MESSAGE;

const server = Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    const body = message
      ? { message }
      : {
          message: "Pong from orbitproxy!",
          user_agent: req.headers.get("user-agent") ?? undefined,
          method: req.method,
          url: `${url.pathname}${url.search}`,
          time: new Date().toISOString(),
          status: 200,
        };

    return Response.json(body);
  },
});

console.log(`Example app listening at ${server.port}`);
