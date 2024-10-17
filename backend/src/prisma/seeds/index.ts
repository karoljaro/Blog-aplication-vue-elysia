import consola from "consola";
import { prisma } from "../..";
import createPosts from "./createPosts_seed";
import createUsers from "./createUsers_seed";
import createComments from "./createComments_seed";
import createCategories from "./createCategories_seed";
import createPostlikes from "./createPostLikes_seed";
import createCategoriesOnPosts from "./createCategoryOnPosts_seed";

async () => {
    try {
        await prisma.$transaction(async (tx) => {
            await createUsers(tx);
            await createCategories(tx);
            await createPosts(tx);
            await createCategoriesOnPosts(tx);
            await createComments(tx);
            await createPostlikes(tx);
        });
    } catch (error) {
        consola.error(error);
    }
};
