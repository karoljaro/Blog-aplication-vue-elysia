-- CreateTable
CREATE TABLE "SharedPost" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "SharedPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SharedPost" ADD CONSTRAINT "SharedPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
