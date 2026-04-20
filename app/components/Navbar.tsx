"use client";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: "Nosotros", href: "#hero" },
        { label: "Productos", href: "#products" },
        { label: "Contacto", href: "#delivery" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav id="navbar" className="w-full flex items-center justify-between px-6 md:px-20 py-2 bg-background/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
            <div className="text-2xl font-bold tracking-tight text-primary">
                <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
                    <Image 
                        src="/logo.png" 
                        alt="ClearVision Logo" 
                        width={180} 
                        height={45} 
                        priority
                        className="h-20 w-auto object-contain"
                    />
                </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 items-center">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-foreground focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Dropdown */}
            <div className={`absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col p-4 space-y-4">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="block text-lg font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;