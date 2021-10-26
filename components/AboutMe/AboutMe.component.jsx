
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Bloc_title from '../Bloc_title/Bloc_title'

import Slider from 'react-slick'

import IconSlider from './components/IconSlider'
import IconWebSkills from './components/IconWebSkills'
import { iconSlider, iconWebSkills } from './Array_aboutMe'

export default function AboutMe() {
    const _iconSlider = iconSlider.map((elem, index) => {
        return <IconSlider data={elem} key={index} />
    })
    const _iconWebSkills = iconWebSkills.map((elem, index) => {
        return <IconWebSkills data={elem} key={index} />
    })

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

    const settings = {
        //todoo initialSlide: 0,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <section id="aboutMe" className="container-Perso">

            <main ref={ref}>
                <motion.div animate={animation_main}>

                    <Bloc_title type={"AboutMe"} />

                    <div className="bloc_languageWeb">
                        <div className="languageWeb">
                            <span className="textHidden">Mes {"hard skills"}</span>
                            <Slider {...settings}>
                                {_iconSlider}
                            </Slider>
                        </div>

                    </div>

                    <div className="bloc_imgDescription">
                        <div>
                            {/*//todoo: <Image className='test' src={imgMoi} alt="picture of my face" width={100} height={200} /> */}
                            <img src="./img/moi.png" alt="picture of my face" />
                            {/*//?--( h3_OnlyResponsive => Only-For-Responsive )--*/}
                            <h3 className='h3_OnlyResponsive'>QUI SUIS-JE ? </h3>
                        </div>

                        <div>
                            <h3>QUI SUIS-JE ? </h3>
                            <p className="text">
                                Je suis un jeune développeur web de 22 ans venant de Belgique.
                                Je viens récemment de finir une formation nommée <strong>BeCode</strong> ainsi {"qu'un"} stage chez
                                <strong> Wazo</strong>.
                                Je suis donc en ce moment à la
                                recherche {"d'une"} entreprise située de
                                préférence à Bruxelles
                                pour travailler en tant que développeur web <strong>{" 'Front-end'"}</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="bloc_skillsWeb">
                        {_iconWebSkills}
                    </div>
                </motion.div>
            </main>
        </section>
    )
}
