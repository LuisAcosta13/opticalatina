"use client"
import { useState } from "react";
import Product from "./Product";

interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

const Products = ({ initialProducts }: { initialProducts: ProductType[] }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="products" className="max-w-6xl mx-auto flex flex-col items-center sm:items-start justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Nuestros armazones</h1>
      <div className="flex flex-col items-center justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center items-stretch">
          {initialProducts.slice(0, visibleCount).map((product, index) => (
            <Product
              key={product.id || index}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            />
          ))}
        </ul>
        {visibleCount < initialProducts.length && (
          <button onClick={handleLoadMore} className="cursor-pointer mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Ver más
          </button>
        )}
      </div>
    </section>

  );
};

export default Products;