import { CategoryOnPost, Post, Prisma } from "@prisma/client";
import { prisma } from "..";
import consola from "consola";

export async function getAllCategories() {
    try {
        return await prisma.category.findMany();
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.name);
        }
    }
}

export async function getPostByCategory(categoryId: CategoryOnPost['categoryId']) {

    try {
        return await prisma.categoryOnPost.findMany({
            where: {
                categoryId: categoryId
            },
            include: {
                post: true
            }
        })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.name);
        }
    }
}

export async function getPostCategory(postId: CategoryOnPost['postId']) {
    try {
        return await prisma.categoryOnPost.findMany({
            where: {
                postId: postId,
            },
            include: {
                category: true
            }
        })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.name);
        }
    }
}
