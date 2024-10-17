import { Prisma } from "@prisma/client";
import { prisma, PrismaTx } from "../..";
import consola from "consola";

const exampleOfPostLikes = [
    {
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        userId: "2b0c8ee2-3bb7-4171-8416-f65ce2d9fd43",
    },
    {
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        userId: "89461820-64a4-438f-ad9f-22e2d9d933cc",
    },
    {
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        userId: "075d2b76-f005-44c6-bc0e-523194147751",
    },
    {
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        userId: "d10fe713-339b-48ea-ad8f-dcf2fc6b638d",
    },
    {
        postId: "4cfc91ff-75a3-46b1-a556-90cab707a97c",
        userId: "075d2b76-f005-44c6-bc0e-523194147751",
    },
    {
        postId: "89461820-64a4-438f-ad9f-22e2d9d933cc",
        userId: "075d2b76-f005-44c6-bc0e-523194147751",
    },
    {
        postId: "4cfc91ff-75a3-46b1-a556-90cab707a97c",
        userId: "2b0c8ee2-3bb7-4171-8416-f65ce2d9fd43",
    },
    {
        postId: "745ddfca-c8bc-464e-9de5-175433730e87",
        userId: "d10fe713-339b-48ea-ad8f-dcf2fc6b638d",
    },
] satisfies Prisma.PostLikeCreateManyInput[];

export default async function createPostlikes(tx: PrismaTx) {
    const client = tx ?? prisma;

    try {
        await client.postLike.createMany({
            data: exampleOfPostLikes,
        });
    } catch (err) {
        if (err instanceof Error) {
            consola.error(err.message);
        }
    }
}
