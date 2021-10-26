import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Link from 'next/link'

import Image from 'next/image'
import imagePath from '../../public/img/Mon-Cv-img(Fr).png'

import Bloc_title from '../Bloc_title/Bloc_title'

import Particles from 'react-particles-js';

import { FaDownload } from 'react-icons/fa'

export default function Cv() {
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
        <section id="cv" className="container-Perso">
            <main ref={ref}>
                <motion.div animate={animation_main}>

                    <Bloc_title type={"Cv"} />

                    <div className="bloc_particles-Cv">
                        <div>
                            <Particles params={{
                                particles: {
                                    number: {
                                        "value": 20,
                                    },
                                    size: {
                                        "value": 4,
                                    },
                                    color: {
                                        "value": "#556BCE",
                                    },
                                    line_linked: {
                                        "color": "#ffff",
                                        "width": 1
                                    }

                                },
                                interactivity: {
                                    events: {
                                        onhover: {
                                            "enable": true,
                                            "mode": "repulse",
                                        }
                                    }

                                },

                            }}
                                className="particles"
                                width="90vw"
                                height="80vh"
                            />
                        </div>

                        <div>
                            <div className="img-wrapper">
                                <Image src={imagePath} alt="" className="hover-zoom" width={400} height={600} />
                            </div>

                            <Link href="/download/Cemil-Yilmaz-CV.pdf" download>
                                <a target="_blank" rel="noopener noreferrer">
                                    <button className="btnEffect" data-hover="cliquez !" >
                                        <span className="textBtn"><FaDownload className="iconReact" size={"1rem"} />Telecharger</span>
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>

                </motion.div>
            </main>

        </section >
    )
}
