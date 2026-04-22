import { getProducts, deleteProduct } from "../lib/actions";
import Link from "next/link";
import ProductActions from "./components/ProductActions";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Inventario de Productos</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gestiona los armazones disponibles en la tienda</p>
        </div>
        <Link
          href="/admin/add"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/30"
        >
          Nuevo Producto
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {products.map((product: any) => (
                <tr key={product.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{product.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-semibold">
                      {product.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ProductActions product={product} />
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                    No hay productos registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
