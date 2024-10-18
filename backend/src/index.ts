import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import consola from "consola";
import swagger from "@elysiajs/swagger";

export const prisma = new PrismaClient();
const app = new Elysia().use(swagger());

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
