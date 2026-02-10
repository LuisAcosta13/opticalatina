"use client"
import { useState } from "react";
import Product from "./Product";

const products = [
  { name: "Producto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus magna, efficitur eget consequat consequat, placerat vitae nisi.", image: "/glasses.png", price: "$100.000" },
  { name: "Producto 2", description: "Descripción del producto 2.", image: "/glasses.png", price: "$150.000" },
  { name: "Producto 3", description: "Descripción del producto 3.", image: "/glasses.png", price: "$200.000" },
  { name: "Producto 1", description: "Descripción del producto 1.", image: "/glasses.png", price: "$100.000" },
  { name: "Producto 2", description: "Descripción del producto 2.", image: "/glasses.png", price: "$150.000" },
  { name: "Producto 3", description: "Descripción del producto 3.", image: "/glasses.png", price: "$200.000" },
  { name: "Producto 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus magna, efficitur eget consequat consequat, placerat vitae nisi.", image: "/glasses.png", price: "$100.000" },
  { name: "Producto 2", description: "Descripción del producto 2.", image: "/glasses.png", price: "$150.000" },
  { name: "Producto 3", description: "Descripción del producto 3.", image: "/glasses.png", price: "$200.000" },
  { name: "Producto 1", description: "Descripción del producto 1.", image: "/glasses.png", price: "$100.000" },
  { name: "Producto 2", description: "Descripción del producto 2.", image: "/glasses.png", price: "$150.000" },
  { name: "Producto 3", description: "Descripción del producto 3.", image: "/glasses.png", price: "$200.000" },
];

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="products" className="max-w-6xl flex flex-col items-center sm:items-start justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Nuestros armazones</h1>
      <div className="flex flex-col items-center justify-center">
        <ul className="flex sm:flex-row flex-wrap items-center justify-center w-full">
          {products.slice(0, visibleCount).map((product, index) => (
            <Product key={index} name={product.name} description={product.description} image={product.image} price={product.price} />
          ))}
        </ul>
        {visibleCount < products.length && (
          <button onClick={handleLoadMore} className="cursor-pointer mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Ver más
          </button>
        )}
      </div>
    </section>

  );
};

export default Products;