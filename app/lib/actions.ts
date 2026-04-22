"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";

const PRODUCTS_FILE = path.join(process.cwd(), "app/data/products.json");

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Credenciales definidas
  if (email === "virtualclearvision@gmail.com" && password === "4dm1n0pt1c4") {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
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
  cookieStore.delete("admin_session");
  redirect("/admin/login");
}

export async function getProducts() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading products:", error);
    return [];
  }
}

export async function addProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as string || "/glasses.png";

  const products = await getProducts();
  const newProduct = {
    id: `prod-${Date.now()}`,
    name,
    description,
    image,
    price,
  };

  products.push(newProduct);
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 4));
  
  return { success: true };
}

export async function updateProduct(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as string;

  const products = await getProducts();
  const index = products.findIndex((p: any) => p.id === id);

  if (index !== -1) {
    products[index] = {
      ...products[index],
      name,
      description,
      price,
      image: image || products[index].image,
    };
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 4));
    return { success: true };
  }
  return { error: "Producto no encontrado" };
}

export async function deleteProduct(id: string) {
  const products = await getProducts();
  const filteredProducts = products.filter((p: any) => p.id !== id);

  if (products.length !== filteredProducts.length) {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(filteredProducts, null, 4));
    return { success: true };
  }
  return { error: "Producto no encontrado" };
}
