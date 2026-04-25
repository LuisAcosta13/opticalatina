import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.product.count();
    console.log(`Conexión exitosa. Total de productos: ${count}`);
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
