const Navbar = () => {
    return (
        <nav id="navbar" className="w-full flex items-center justify-between px-20 py-4 bg-foreground text-background sticky top-0 backdrop-blur-md 
            shadow-[0_2px_12px_rgba(0,0,0,0.8)] z-50"
        >
            <div className="text-xl font-bold">
                <a href="/">Óptica Latina</a>
            </div>
            <ul className="flex space-x-6">
                <li>
                    <a href="#hero" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Nosotros
                    </a>
                </li>
                <li>
                    <a href="#products" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Productos
                    </a>
                </li>
                <li>
                    <a href="#delivery" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;