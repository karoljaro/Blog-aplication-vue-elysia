import { Prisma } from "@prisma/client";
import { prisma, PrismaTx } from "../..";
import consola from "consola";

const exampleOfCategoryOnPost = [
    {
        categoryId: "5396f903-e2b2-4abe-a8e7-873600ef54b0",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966"
    },
    {
        categoryId: "6ec1aa8a-2391-4b28-a376-3dc8b37d9785",
        postId: "8d87beba-68d9-4087-a782-558bc58d32b8"
    },
    {
        categoryId: "3d9fe582-61f9-4fd9-95ed-548f16abe83d",
        postId: "4cfc91ff-75a3-46b1-a556-90cab707a97c"
    },
    {
        categoryId: "6ec1aa8a-2391-4b28-a376-3dc8b37d9785",
        postId: "bb3b680c-8142-479a-b116-4b923b4475a2"
    },
    {
        categoryId: "cf3e0aa3-7fd2-4ba2-8250-f41512e5e18b",
        postId: "59464808-d634-4e19-8ccf-4f85202647e0"
    },
    {
        categoryId: "152bb126-e57d-4f7d-b46a-deca5be2eafe",
        postId: "745ddfca-c8bc-464e-9de5-175433730e87"
    },
] satisfies Prisma.CategoriesOnPostsCreateManyInput[];

export default async function createCategoriesOnPosts(tx: PrismaTx) {
    const client = tx ?? prisma;

    try {
        await client.categoriesOnPosts.createMany({
            data: exampleOfCategoryOnPost,
        });
    } catch (err) {
        if (err instanceof Error) {
            consola.error(err.message);
        }
    }
}
