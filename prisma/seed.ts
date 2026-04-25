import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  const productsFilePath = path.join(process.cwd(), "app/data/products.json");
  const productsData = JSON.parse(await fs.readFile(productsFilePath, "utf-8"));

  console.log("Iniciando migración de datos...");

  for (const product of productsData) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
      },
    });
  }

  console.log("Migración completada con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
