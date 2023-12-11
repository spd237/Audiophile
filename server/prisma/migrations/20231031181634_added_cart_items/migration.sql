/*
  Warnings:

  - You are about to drop the `_ProductToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_B_fkey";

-- DropTable
DROP TABLE "_ProductToUser";

-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartItemToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_name_key" ON "CartItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CartItemToUser_AB_unique" ON "_CartItemToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CartItemToUser_B_index" ON "_CartItemToUser"("B");

-- AddForeignKey
ALTER TABLE "_CartItemToUser" ADD CONSTRAINT "_CartItemToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartItemToUser" ADD CONSTRAINT "_CartItemToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
