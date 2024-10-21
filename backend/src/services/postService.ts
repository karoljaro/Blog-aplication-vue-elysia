import consola from "consola";
import { prisma } from "..";
import { Post, Prisma, User } from "@prisma/client";

export async function getPosts() {
    try {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: "asc",
            },
            include: {
                _count: {
                    select: {
                        postLikes: true,
                        comments: true,
                    }
                }
            },
        });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.name);
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
            consola.error(err.name);
        }
    }
}


export async function getPostCreatedByUser(authorId: User['id']) {
    try {
        return prisma.post.findMany({
            where: {
                authorId: authorId
            }
        })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(err.name);
        }
    }
}