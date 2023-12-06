/*
  Warnings:

  - Made the column `isNew` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "isNew" SET NOT NULL;
