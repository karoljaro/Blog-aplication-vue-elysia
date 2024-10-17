import { Prisma } from "@prisma/client";
import { prisma, PrismaTx } from "../..";
import consola from "consola";

const exampleOfCategories = [
    {
        id: "6ec1aa8a-2391-4b28-a376-3dc8b37d9785",
        name: "Quantum Computing",
    },
    {
        id: "3d9fe582-61f9-4fd9-95ed-548f16abe83d",
        name: "AI Ethics",
    },
    {
        id: "5396f903-e2b2-4abe-a8e7-873600ef54b0",
        name: "Space Exploration",
    },
    {
        id: "cf3e0aa3-7fd2-4ba2-8250-f41512e5e18b",
        name: "Biotechnology",
    },
    {
        id: "152bb126-e57d-4f7d-b46a-deca5be2eafe",
        name: "Renewable Energy",
    },
] satisfies Prisma.CategoryCreateManyInput[];

export default async function createCategories(tx: PrismaTx) {
    const client = tx ?? prisma;

    try {
        await client.category.createMany({
            data: exampleOfCategories,
        });
    } catch (err) {
        if (err instanceof Error) {
            consola.error(err.message);
        }
    }
}
