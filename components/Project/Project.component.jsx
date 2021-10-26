import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Link from 'next/link'

import Image from 'next/image'
import imgDessert from '../../public/img/projet_dessert.png'
import imgPizza from '../../public/img/projet_pizza.png'
import imgNavigator from '../../public/img/projet_Navigator.png'
import imgRestaurant from '../../public/img/projet_restaurant.png'
import imgMenInNight from '../../public/img/projet_menInNight.png'

import Bloc_title from '../Bloc_title/Bloc_title'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function Projets() {
    const { ref, inView } = useInView();
    const animation_main = useAnimation();
    const animation_h4After = useAnimation();

    useEffect(() => {
        if (inView) {
            animation_main.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 3, bounce: 0
                }
            })
            animation_h4After.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 4, bounce: 0.2
                }
            })
        }
        if (!inView) {
            animation_main.start({ x: ' -100vw', })
            animation_h4After.start({ x: ' -100vw', })
        }
        // console.log('use effect, inView', inView);
    }, [inView])

    return (
        <section id="project" className="container-Perso">
            <main ref={ref}>
                <motion.div animate={animation_main}>

                    <Bloc_title type={"Project"} />

                    <Swiper className="swiper-container"
                        navigation={false}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        //? Not work in NextJs: slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={{
                            clickable: true
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>

                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://cemil1000.github.io/Restaurant/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">Restaurant (JavaScript / php)</p>
                                    <Image src={imgRestaurant} alt="Picture of projet n5" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://cemil1000.github.io/LeavingTheHills/index.html">
                                <a target="_blank" rel="noopener noreferrer" >
                                    <p className="text-Swipe">Mini Projet</p>
                                    <Image src={imgDessert} alt="Picture of projet n1" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://wcprojet-git-main-cemil1000.vercel.app/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">Navigator (NextJs / Sass)</p>
                                    <Image src={imgNavigator} alt="Picture of projet n3" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://cemil1000.github.io/React-ClickerGame/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">BlockClicker (React)</p>
                                    <Image src={imgPizza} alt="Picture of projet n2" />
                                </a>
                            </Link>
                        </SwiperSlide>
                    </Swiper>

                    <Swiper className="swiper-container-responsive"
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        pagination={{
                            clickable: true
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>

                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://jniouen-wassim.github.io/10_Collections/">
                                <a target="_blank" rel="noopener noreferrer" >
                                    <p className="text-Swipe">Collections (JavaScript)</p>
                                    <Image src={imgDessert} alt="Picture of projet n1" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://jniouen-wassim.github.io/React-PizzaClick/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">PizzaClick (React)</p>
                                    <Image src={imgPizza} alt="Picture of projet n2" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://wcprojet-git-main-cemil1000.vercel.app/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">Navigator (NextJs / Sass)</p>
                                    <Image src={imgNavigator} alt="Picture of projet n3" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://jeanfabry.github.io/Showcase-website-fictional-restaurant/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">Restaurant (JavaScript / php)</p>
                                    <Image src={imgRestaurant} alt="Picture of projet n5" />
                                </a>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" >
                            <Link href="https://men-in-night.vercel.app/">
                                <a target="_blank" rel="noopener noreferrer">
                                    <p className="text-Swipe">Men In Night (NextJs / Sass)</p>
                                    <Image src={imgMenInNight} alt="Picture of projet n6" />
                                </a>
                            </Link>
                        </SwiperSlide>
                    </Swiper>

                </motion.div>
            </main>
        </section>
    )
}
