import { Elysia } from "elysia";
import { Prisma, PrismaClient } from "@prisma/client";
import consola from "consola";
import swagger from "@elysiajs/swagger";
import { postController } from "./controllers/postController";
import { userController } from "./controllers/userController";

export const prisma = new PrismaClient();
export type PrismaTx = Prisma.TransactionClient;

const app = new Elysia()
    .use(swagger())
    .group("/api", (app) => {
        return app.use(postController).use(userController);
    })
    .listen(3049);

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

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
