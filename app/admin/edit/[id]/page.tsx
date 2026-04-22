import { getProducts } from "../../../lib/actions";
import EditProductForm from "./EditProductForm";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find((p: any) => p.id === id);

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
