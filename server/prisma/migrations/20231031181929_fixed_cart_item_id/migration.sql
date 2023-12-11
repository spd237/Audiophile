/*
  Warnings:

  - The primary key for the `CartItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_CartItemToUser" DROP CONSTRAINT "_CartItemToUser_A_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_CartItemToUser" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_CartItemToUser" ADD CONSTRAINT "_CartItemToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
