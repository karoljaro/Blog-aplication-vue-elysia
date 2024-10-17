import { Elysia } from "elysia";
import postRoutes from "./controllers/postController";
import { type Prisma, PrismaClient } from "@prisma/client";
import consola from "consola";
import swagger from "@elysiajs/swagger";

export const prisma = new PrismaClient();
const app = new Elysia().use(swagger());

export type PrismaTx = Prisma.TransactionClient;

initialize();

async function initialize() {
    await validateDatabaseConnection();
}

async function validateDatabaseConnection() {
    try {
        await prisma.$connect();
        consola.success("Connected to database");
        consola.info("Ready to handle requests 🌐");
    } catch (error) {
        consola.error("Failed to connect to the database:", error);
    } finally {
        await prisma.$disconnect();
    }
}


app.group("/api", (app) => {
    return app.use(postRoutes);
}).listen(3049);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
