
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
        <section id='hero' className="splide w-full overflow-hidden" aria-labelledby="carousel-heading">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide relative w-full aspect-video md:aspect-[1920/540]">
                        <a href="#products">
                            <Image className="object-cover" src="/images/banner1-desktop.png" alt="Slide 1" fill priority sizes="100vw"/>
                        </a>
                    </li>
                    <li className="splide__slide relative w-full aspect-video md:aspect-[1920/540]">
                        <a href="#products">
                            <Image className="object-cover" src="/images/banner2-desktop.png" alt="Slide 2" fill priority sizes="100vw"/>
                        </a>
                    </li>   
                </ul>
            </div>
        </section>
    );
};

export default Hero;