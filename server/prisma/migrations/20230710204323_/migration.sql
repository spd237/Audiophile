-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" JSONB NOT NULL,
    "category" TEXT NOT NULL,
    "categoryImage" JSONB NOT NULL,
    "new" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "includes" JSONB NOT NULL,
    "gallery" JSONB NOT NULL,
    "others" JSONB NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
