import { Prisma } from "@prisma/client";
import { prisma, PrismaTx } from "../..";
import consola from "consola";

const exampleOfComments = [
    {
        id: "b0e65f0e-51d1-43bb-b67c-1881a65460a2",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "7d475ac3-d308-4bd9-9048-e39e9eddd788",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "999cc84f-d0cf-4676-a825-53370475fa98",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "38d322bb-3ae8-4751-935e-8beae1ad5b2f",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "18843ab1-e09b-4929-a313-0cbc8b7b8efa",
        postId: "505d3423-98fe-42dd-a4f4-5acb6b1fa966",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "c677ac41-2e23-4779-80ea-53f4946791a5",
        postId: "8d87beba-68d9-4087-a782-558bc58d32b8",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "22670b32-1d24-4947-a06d-f838984348b3",
        postId: "8d87beba-68d9-4087-a782-558bc58d32b8",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "c5f2ad46-0e03-48df-81f1-e9d2e9198287",
        postId: "59464808-d634-4e19-8ccf-4f85202647e0",
        content: "Can you provide more details on the methodology used in your research?",
    },
    {
        id: "fdcfd9b8-25ac-4c5a-89f3-08043ac35b9f",
        postId: "745ddfca-c8bc-464e-9de5-175433730e87",
        content: "Can you provide more details on the methodology used in your research?",
    },
    
] satisfies Prisma.CommentCreateManyInput[];

export default async function createComments(tx: PrismaTx) {
    const client = tx ?? prisma;

    try {
        client.comment.createMany({
            data: exampleOfComments,
        });
    } catch (err) {
        if (err instanceof Error) {
            consola.error(err.message);
        }
    }
}
