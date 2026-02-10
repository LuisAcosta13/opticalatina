
"use client"
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import Image from 'next/image';

const Hero = () => {
    useEffect(() => {

        const splide = new Splide('.splide', {
            type: 'fade',
            rewind: true,
            arrows: false,
            autoplay: true
        });

        splide.mount();

        return () => {
            splide.destroy();
        };
    }, []);

    return (
        <section id='hero' className="splide relative left-1/2 -translate-x-1/2 w-full h-[50vh] overflow-hidden" aria-labelledby="carousel-heading">
            <div className="splide__track h-full">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <Image className="object-cover" src="/banner-1.png" alt="Slide 1" fill priority sizes="100vw"/>
                    </li>
                    <li className="splide__slide">
                        <Image className="object-cover" src="/banner-2.png" alt="Slide 2" fill priority sizes="100vw" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;