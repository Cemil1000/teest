import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Bloc_title({ type }) {

    const categoryH1 = (typeTemp) => {
        if (typeTemp === "AboutMe") {
            return <h1>À PROPOS DE MOI</h1>
        }
        else if (typeTemp === "Cv") {
            return <h1>CV</h1>
        }
        else if (typeTemp === "Project") {
            return <h1>PROJETS</h1>
        }
    }

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
        <>
            <span ref={ref} className="bloc_title">
                {categoryH1(type)}
                <motion.div animate={animation_h4After}>
                    <h4></h4>
                </motion.div>
            </span>
        </>
    )
}
