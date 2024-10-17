import { Prisma } from "@prisma/client";
import { prisma, PrismaTx } from "../..";
import consola from "consola";

const exampleOfUsers = [
    {
        id: "2b0c8ee2-3bb7-4171-8416-f65ce2d9fd43",
        username: "Helena Norman",
        email: "tijebbu@fiaf.jo",
    },
    {
        id: "89461820-64a4-438f-ad9f-22e2d9d933cc",
        username: "Bill Garrett",
        email: "kactak@ku.sv",
    },
    {
        id: "075d2b76-f005-44c6-bc0e-523194147751",
        username: "Loretta Washington",
        email: "hitmas@wirlangeb.tj",
    },
    {
        id: "d10fe713-339b-48ea-ad8f-dcf2fc6b638d",
        username: "Eva Sandoval",
        email: "gucfa@turpehcoh.aw",
    },
] satisfies Prisma.UserCreateManyInput[];

export default async function createUsers(tx: PrismaTx) {
    const client = tx ?? prisma;

    try {
        await client.user.createMany({
            data: exampleOfUsers,
        });
    } catch (err) {
        if (err instanceof Error) {
            consola.error(err.message)
        }
    }
}
