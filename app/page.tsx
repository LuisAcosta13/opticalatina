import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Delivery from "./components/Delivery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background font-sans dark:bg-background">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-10">
        <Hero />

        <section className="max-w-6xl flex flex-col sm:flex-row justify-center items-center w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center border-b-1 sm:border-r-1 sm:border-b-0 border-gray-300 sm:py-10 pb-6 mb-6 sm:pr-6 sm:mr-6 w-1/2">
            <h2 className="text-3xl font-bold">Óptica Latina</h2>
          </div>
          <div className="flex justify-center items-center sm:pl-6">
            <p className="text-lg text-center sm:text-left text-gray-600">
              Nos apasiona ofrecer a nuestros clientes los mejores armazones de alta calidad a precios accesibles. Nuestro compromiso es brindar un servicio excepcional y una experiencia de compra única.
            </p>
          </div>
        </section>

        <Products />
        <Delivery />
      </main>
      <Footer />
    </div>
  );
}
