/*
  Warnings:

  - You are about to drop the column `likeId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `post_likes` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "likeId",
DROP COLUMN "post_likes";
