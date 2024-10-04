import { NotFoundError } from "elysia";
import { prisma } from "..";
import { Post } from "@prisma/client";
import consola from "consola";

export async function getPosts() {
    try {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: "asc",
            },
        });
    } catch (e: unknown) {
        consola.error(`Error getting posts: ${e}`);
    }
}

export async function getPostById(id: Post["id"]) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id,
            },
        });

        if (!post) {
            throw new NotFoundError("Post not found");
        }

        return post;
    } catch (e: unknown) {
        consola.error(`Error getting post: ${e}`);
    }
}

export async function updatePost(
    id: Post["id"],
    options: { title?: Post["title"]; content?: Post["content"] },
) {
    try {
        const { title, content } = options;

        return await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                ...(title ? { title } : {}),
                ...(content ? { content } : {}),
            },
        });
    } catch (e: unknown) {
        consola.error(`Error updating post: ${e}`);
    }
}

export async function createPost(options: { title: Post["title"]; content: Post["content"] }) {
    try {
        const { title, content } = options;

        return await prisma.post.create({
            data: {
                title,
                content,
            },
        });
    } catch (e: unknown) {
        consola.error(`Error creating post: ${e}`);
    }
}

export async function deletePost(options: { id: Post["id"] }) {
    try {
        const { id } = options;

        return await prisma.post.delete({
            where: {
                id: id,
            },
        });
    } catch (e: unknown) {
        consola.error(`Error deleting post: ${e}`);
    }
}
