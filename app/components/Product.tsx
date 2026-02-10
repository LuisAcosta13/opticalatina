"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

type ProductProps = {
    name: string;
    description: string;
    image: string;
    price: string;
    className?: string;
    style?: React.CSSProperties;
};

const Product = ({ name, description, image, price, className, style }: ProductProps) => {
    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();

    // Use name as ID for now, assuming names are unique per product type
    const productInCart = cartItems.find((item) => item.id === name);
    const quantity = productInCart ? productInCart.quantity : 0;

    const handleAddToCart = () => {
        addToCart({ id: name, name, price });
    };

    const handleIncrease = () => {
        updateQuantity(name, quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            updateQuantity(name, quantity - 1);
        } else {
            removeFromCart(name);
        }
    };

    return (
        <li
            className={`bg-white rounded-lg shadow-md flex flex-col justify-between items-center w-full max-w-[300px] h-full overflow-hidden ${className || ""}`}
            style={style}
        >
            <Image src={image} alt={name} width={300} height={200} className="h-48 w-full object-cover" />
            <div className="flex flex-col justify-between gap-5 px-6 py-4 w-full h-full">
                <div>
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
                </div>
                <div className="flex flex-col gap-3 mt-auto">
                    <span className="text-lg font-bold text-gray-800">{price}</span>

                    {quantity === 0 ? (
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:brightness-110 transition-all font-medium shadow-md"
                        >
                            Agregar al carrito
                        </button>
                    ) : (
                        <div className="flex items-center justify-between bg-secondary/10 rounded-md p-1">
                            <button
                                onClick={handleDecrease}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-foreground hover:bg-white/80 active:bg-white/60"
                            >
                                -
                            </button>
                            <span className="font-semibold text-gray-800">{quantity}</span>
                            <button
                                onClick={handleIncrease}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-primary hover:bg-gray-50 active:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default Product;