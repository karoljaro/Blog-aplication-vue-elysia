import { PrismaClient } from "@prisma/client";
import { Post } from "@prisma/client";

type POST = {
    id: Post['id'];
    title: Post['title'];
    content: Post['content'];
};

const prisma = new PrismaClient();

const postsToCreate: POST[] = [
    {
        id: "3ce27cd3-8abb-437f-b778-44365736a426",
        title: "First Post",
        content: "The first post made",
    },
    {
        id: "731c4f60-1532-491e-a0fd-74ede99cbf39",
        title: "Second Post",
        content: "The second post made",
    },
    {
        id: "179e2d75-7018-4086-863d-329dbb5ec649",
        title: "Third Post",
        content: "The Third post made",
    },
    {
        id: "9bd9eeb2-88aa-49cf-aa08-45bfda74b575",
        title: "Fourth Post",
        content: "The Fourth post made",
    },
];

async function main() {
    for (let post of postsToCreate) {
        await prisma.post.create({
            data: post
        });
    }
}

main().catch((e: Error) => {
    throw Error(e.message);
}).finally(() => {
    prisma.$disconnect();
})
