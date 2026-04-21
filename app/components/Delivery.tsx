const Delivery = () => {
    return (
        <section id="delivery" className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 w-full py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Envío a todo el país</h1>
            <ul className="flex flex-col items-center sm:flex-row sm:items-start justify-center gap-10 sm:gap-50 w-full">
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <div className="bg-secondary/10 p-6 rounded-full text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25" />
                        </svg>
                    </div>
                    <span className="text-center font-medium">Selecciona tu armazón en nuestro catálogo</span>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <div className="bg-secondary/10 p-6 rounded-full text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </div>
                    <span className="text-center font-medium">Ponte en contacto con nosotros a través de WhatsApp</span>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 max-w-[250px]">
                    <div className="bg-secondary/10 p-6 rounded-full text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <span className="text-center font-medium">Recibí tu pedido en tu domicilio</span>
                </li>
            </ul>
            <p className="text-lg text-left max-w-6xl">
                En <span className="font-bold">ClearVision</span> nos enorgullece ofrecer envíos a todo el país, asegurando que nuestros clientes puedan disfrutar de nuestros productos sin importar su ubicación. Nuestro compromiso es brindar un servicio de calidad y una experiencia de compra sin complicaciones.
            </p>
        </section>
    );
};

export default Delivery;