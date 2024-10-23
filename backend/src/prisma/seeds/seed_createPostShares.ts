import { Prisma } from "@prisma/client";
import consola from "consola";
import { seedPrisma } from ".";
import { PrismaTx } from "../..";

const exampleOfPostShares = [
    {
        "id": "f9b0aaf0-8c71-4e7f-a7d7-0e2b5d0b2ac0",
        "postId": "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
    },
    {
        "id": "b1950c99-4cbb-42f3-9653-1cd58f9e373a",
        "postId": "8d87beba-68d9-4087-a782-558bc58d32b8",
    },
    {
        "id": "c7c1c3a1-63d1-4b9e-8baf-348a3f6f8533",
        "postId": "4cfc91ff-75a3-46b1-a556-90cab707a97c",
    },
    {
        "id": "c6e8b1d5-f3e2-4755-9f32-10a1b5c12499",
        "postId": "59464808-d634-4e19-8ccf-4f85202647e0",
    },
    {
        "id": "27d5b112-8a29-4348-946e-d3b9df0e5c0b",
        "postId": "bb3b680c-8142-479a-b116-4b923b4475a2",
    },
    {
        "id": "5b9e0f6c-7c6c-4429-bd47-f78b6d06396e",
        "postId": "745ddfca-c8bc-464e-9de5-175433730e87",
    }

] satisfies Prisma.SharedPostCreateManyInput[];

export default async function seedCreatePostShares(tx: PrismaTx) {
    const client = tx ?? seedPrisma;

    try {
    } catch (err) {
        await client.sharedPost.createManyAndReturn({
            data: exampleOfPostShares
        })
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            consola.error(err.message);
        }
    }
}