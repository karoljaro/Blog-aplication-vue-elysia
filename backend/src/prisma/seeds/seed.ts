import { PrismaClient } from "@prisma/client";

type POST = {
    id: number;
    title: string;
    content: string;
};

const prisma = new PrismaClient();

const postsToCreate: POST[] = [
    {
        id: 1,
        title: "First Post",
        content: "The first post made",
    },
    {
        id: 2,
        title: "Second Post",
        content: "The second post made",
    },
    {
        id: 3,
        title: "Third Post",
        content: "The Third post made",
    },
    {
        id: 4,
        title: "Fourth Post",
        content: "The Fourth post made",
    },
];

async function main() {
    for (let post of postsToCreate) {
        await prisma.post.create({
            data: post,
        });
    }
}

main().catch((e: Error) => {
    throw Error(e.message);
}).finally(() => {
    prisma.$disconnect();
})
