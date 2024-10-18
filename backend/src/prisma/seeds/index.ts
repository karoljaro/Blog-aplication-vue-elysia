import { PrismaClient } from "@prisma/client"
import seedCreatePost from "./seed_createPosts";
import consola from "consola";
import seedCreateUsers from "./seed_createUser";

export const seedPrisma = new PrismaClient();

async function main() {
    await seedPrisma.$transaction(async (tx) => {
        await seedCreateUsers(tx);
        await seedCreatePost(tx);
    })   
}

main().catch(async (err) => {
    if (err instanceof Error) {
        consola.error(err.message);
    }
}).finally(async () => {
    await seedPrisma.$disconnect();
})
