import { PrismaClient } from '@prisma/client';
import productsData from '../src/data.json';

const prisma = new PrismaClient();

async function main() {
  for (const productData of productsData) {
    await prisma.product.create({
      data: productData,
    });
  }
}
main().catch((e) => {
  console.log(e);
  process.exit(1);
});
