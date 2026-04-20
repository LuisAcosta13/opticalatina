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

        <section className="w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
          {/* Acetate Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Elegancia en Acetato de Alta Calidad
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Nuestros armazones están fabricados con **acetato de celulosa premium**, un material hipoalergénico derivado de fuentes naturales. 
                A diferencia del plástico común, el acetato ofrece una profundidad de color única, una flexibilidad superior y una durabilidad que resiste el paso del tiempo. 
                Cada pieza es pulida a mano para lograr un brillo sedoso que se siente tan bien como se ve.
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                  Hecho para durar
                </span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/banner-2.png" 
                  alt="Armazón de acetato premium" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Blue-Cut Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-fade-in-up [animation-delay:200ms]">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                Protección Blue-Cut de Precisión
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                En un mundo dominado por las pantallas, tus ojos merecen la mejor defensa. 
                Nuestros cristales con tecnología **Blue-Cut** actúan como un filtro selectivo que bloquea la luz azul nociva emitida por smartphones y computadoras. 
                Reduce la fatiga visual, previene dolores de cabeza y mejora significativamente tu ciclo de sueño, todo sin alterar la percepción de los colores naturales.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-900">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Menos fatiga visual
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Mejor calidad de sueño
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Claridad HD
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Filtro UV400 integrado
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/blue_cut_demo.png" 
                  alt="Demostración de cristales Blue-Cut" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <Products />
        <Delivery />
      </main>
      <Footer />
    </div>
  );
}
