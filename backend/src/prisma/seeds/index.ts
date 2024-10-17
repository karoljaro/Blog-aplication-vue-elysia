import consola from "consola";
import { prisma } from "../..";

async () => {
    try {
        await prisma.$transaction(async (tx) => {
            await 
        })
    } catch (error) {
        consola.error(error)
    }
}

