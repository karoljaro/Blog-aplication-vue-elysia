import consola from "consola";
import { prisma } from "..";
import { Prisma, User } from "@prisma/client";

export async function createdPostsByUser(userId: User['id']) {
    try {
        return await prisma.user.findMany({
            where: {
                id: userId,
            },
            include: {
                createdPost: true
            }
        })
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.name);
        }
    }
}