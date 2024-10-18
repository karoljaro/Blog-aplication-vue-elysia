import consola from "consola";
import { prisma } from "..";
import { Post, Prisma } from "@prisma/client";

export async function getPosts() {
    try {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: "asc",
            },
        });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(err.name);
        }
    }
}

export async function getPostById(postId: Post["id"]) {
    try {
        return await prisma.post.findUnique({
            where: {
                id: postId,
            },
        });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(err.name);
        }
    }
}
