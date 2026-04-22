"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../lib/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Optica Latina</h1>
          <p className="text-xs text-gray-500 mt-1">Panel de Administración</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link
            href="/admin"
            className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
              pathname === "/admin"
                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            }`}
          >
            <span className="font-medium">Productos</span>
          </Link>
          <Link
            href="/admin/add"
            className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
              pathname === "/admin/add"
                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            }`}
          >
            <span className="font-medium">Agregar Producto</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => logout()}
            className="w-full flex items-center px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
          >
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 md:hidden">
           <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Optica Latina</h1>
           <button onClick={() => logout()} className="text-red-500 font-medium">Salir</button>
        </header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
