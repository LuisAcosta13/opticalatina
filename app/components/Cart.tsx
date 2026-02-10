"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    // REPLACE THIS WITH THE ACTUAL WHATSAPP NUMBER
    // Format: CountryCode + AreaCode + Number (e.g., 5491112345678)
    const WHATSAPP_NUMBER = "5491100000000";

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckout = () => {
        const message = cartItems
            .map(
                (item) =>
                    `- [x${item.quantity}] ${item.name} - ${item.price}`
            )
            .join("\n");

        const total = getCartTotal();
        // Assuming price is formatted like "$100.000", we might want to format the total similarly
        // For now, displaying the raw number or basic formatting
        const formattedTotal = total.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 });

        const fullMessage = `Hola, quiero realizar el siguiente pedido:\n\n${message}\n\nTotal estimado: ${formattedTotal}`;

        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            {/* Floating Cart Button */}
            <button
                onClick={toggleCart}
                className="fixed bottom-4 right-4 z-50 bg-secondary text-secondary-foreground p-4 rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center"
                aria-label="Ver carrito"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Cart Sidebar/Overlay */}
            <div
                className={`fixed inset-0 z-50 flex justify-end transition-all duration-700 ease-out ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{
                    clipPath: isOpen
                        ? "circle(150% at calc(100% - 3rem) calc(100% - 3rem))"
                        : "circle(0px at calc(100% - 3rem) calc(100% - 3rem))",
                }}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={toggleCart}
                />

                {/* Sidebar */}
                <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col">
                    <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                        <h2 className="text-xl font-bold text-gray-800">Tu Pedido</h2>
                        <button
                            onClick={toggleCart}
                            className="text-gray-500 hover:text-gray-700 p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-16 h-16 opacity-50"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                <p className="text-lg">Tu carrito está vacío</p>
                                <button
                                    onClick={toggleCart}
                                    className="text-blue-500 hover:underline"
                                >
                                    Volver a comprar
                                </button>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100"
                                >
                                    {/* Image placeholder or simplified view if image url is available */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.price}</p>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2 bg-white rounded-md border border-gray-200">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="w-4 text-center text-sm font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-500 hover:text-red-700 underline"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="p-4 border-t bg-gray-50 space-y-4">
                            <div className="flex justify-between items-center text-lg font-bold">
                                <span>Total estimado:</span>
                                <span>
                                    {getCartTotal().toLocaleString("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 0,
                                    })}
                                </span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                            >
                                <span className="font-bold text-lg">Completar pedido por WhatsApp</span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
