"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";

const SESSION_NAME = process.env.SESSION_NAME || "admin_session";
const SESSION_SECRET = process.env.SESSION_SECRET;

async function verifySession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_NAME);
  return session?.value === SESSION_SECRET && SESSION_SECRET !== undefined;
}

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword && adminEmail && adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_NAME, SESSION_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    redirect("/admin");
  } else {
    return { error: "Credenciales inválidas" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_NAME);
  redirect("/admin/login");
}

export async function getProducts() {
  try {
    return await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function addProduct(formData: FormData) {
  if (!await verifySession()) {
    return { error: "No autorizado" };
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as string || "/glasses.png";

  try {
    await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error adding product:", error);
    return { error: "Error al agregar el producto" };
  }
}

export async function updateProduct(id: string, formData: FormData) {
  if (!await verifySession()) {
    return { error: "No autorizado" };
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as string;

  try {
    await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        image: image || undefined,
      },
    });
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error updating product:", error);
    return { error: "Error al actualizar el producto" };
  }
}

export async function deleteProduct(id: string) {
  if (!await verifySession()) {
    return { error: "No autorizado" };
  }

  try {
    await prisma.product.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { error: "Error al eliminar el producto" };
  }
}
