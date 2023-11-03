/*
  Warnings:

  - You are about to drop the `_CartItemToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userID` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CartItemToUser" DROP CONSTRAINT "_CartItemToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartItemToUser" DROP CONSTRAINT "_CartItemToUser_B_fkey";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "userID" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CartItemToUser";

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
