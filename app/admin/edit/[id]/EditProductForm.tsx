"use client";

import { useState } from "react";
import { updateProduct } from "../../../lib/actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditProductForm({ product }: { product: any }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await updateProduct(product.id, formData);

    if (result.success) {
      router.push("/admin");
      router.refresh();
    } else {
      setError(result.error || "Ocurrió un error al actualizar el producto");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex items-center gap-4">
        <Link
          href="/admin"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Editar Producto</h2>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre del Producto
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={product.name}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                defaultValue={product.description}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Precio
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  defaultValue={product.price}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL de Imagen
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  defaultValue={product.image}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? "Guardando..." : "Actualizar Producto"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
