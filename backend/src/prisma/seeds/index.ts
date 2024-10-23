import { PrismaClient } from "@prisma/client"
import seedCreatePost from "./seed_createPosts";
import consola from "consola";
import seedCreateUsers from "./seed_createUser";
import seedCreateCategories from "./seed_createCategories";
import seedCreateCategoriesOnPost from "./seed_createCategoryOnPost";
import seedCreateLikes from "./seed_createLikes";
import seedCreateComments from "./seed_createComments";

export const seedPrisma = new PrismaClient();

async function main() {
    await seedPrisma.$transaction(async (tx) => {
        await seedCreateUsers(tx);
        await seedCreatePost(tx);
        await seedCreateCategories(tx);
        await seedCreateCategoriesOnPost(tx);
        await seedCreateLikes(tx);
        await seedCreateComments(tx);
    })   
}

main().catch(async (err) => {
    if (err instanceof Error) {
        consola.error(err.message);
    }
}).finally(async () => {
    await seedPrisma.$disconnect();
})
