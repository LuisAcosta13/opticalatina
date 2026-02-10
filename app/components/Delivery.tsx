const Delivery = () => {
    return (
        <section id="delivery" className="max-w-6xl flex flex-col items-center justify-center gap-12 w-full py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Envío a todo el país</h1>
            <ul className="flex flex-col items-center sm:flex-row sm:items-start justify-center gap-10 sm:gap-50 w-full">
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <img src="/monitor.svg" alt="Monitor PC" className="w-full max-w-[80px] object-cover" />
                    <span className="text-center">Selecciona tu armazon en nuestro catalogo</span>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <img src="/whatsapp.svg" alt="Whatsapp Logo" className="w-full max-w-[80px] object-cover" />
                    <span className="text-center">Ponete en contacto con nosotros a traves de whatsapp</span>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <img src="/truck.svg" alt="Camion" className="w-full max-w-[80px] object-cover" />
                    <span className="text-center">Recibí tu pedido en tu domicilio</span>
                </li>
            </ul>
            <p className="text-lg text-left max-w-6xl">
                En Óptica Latina, nos enorgullece ofrecer envío a todo el país, asegurando que nuestros clientes puedan disfrutar de nuestros productos sin importar su ubicación. Nuestro compromiso es brindar un servicio de calidad y una experiencia de compra sin complicaciones, entregando tus armazones directamente en tu puerta.
            </p>
        </section>
    );
};

export default Delivery;