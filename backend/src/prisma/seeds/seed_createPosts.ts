import { Prisma, PrismaClient } from "@prisma/client";
import consola from "consola";
import { PrismaTx } from "../..";
import { seedPrisma } from ".";

const exampleOfPosts = [
    {
        id: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        title: "First Post",
        content: "This is the content of the first post.",
    },
    {
        id: "8d87beba-68d9-4087-a782-558bc58d32b8",
        title: "Second Post",
        content: "This is the content of the next post.",
    },
    {
        id: "4cfc91ff-75a3-46b1-a556-90cab707a97c",
        title: "Third Post",
        content: "This is the content of the next post.",
    },
    {
        id: "59464808-d634-4e19-8ccf-4f85202647e0",
        title: "Fourth Post",
        content: "This is the content of the next post.",
    },
    {
        id: "bb3b680c-8142-479a-b116-4b923b4475a2",
        title: "Fifth Post",
        content: "This is the content of the next post.",
    },
    {
        id: "745ddfca-c8bc-464e-9de5-175433730e87",
        title: "Sixth Post",
        content: "This is the content of the next post.",
    },
] satisfies Prisma.PostCreateManyInput[]

export default async function seedCreatePost(tx: PrismaTx) {
    const client = tx ?? seedPrisma;

    try {
        await client.post.createManyAndReturn({
            data: exampleOfPosts,
        })
    } catch(err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            console.error(err.message);
        }
    }
}