import { Elysia } from "elysia";
import postRoutes from "./routes/posts";

const app = new Elysia();

app.group("/api", (app) => {
    return app.use(postRoutes);
}).listen(Bun.env.PORT || 3049);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
