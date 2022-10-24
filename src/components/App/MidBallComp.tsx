import { motion, useInView } from 'framer-motion';
import {useRef, useEffect} from 'react';


// import variant for animation of elements
import { moveBallVariant, ballUpAndDown } from './appVariants';

export default function MidBallComp() {
    const cvrRef = useRef<HTMLDivElement>({} as HTMLDivElement)
    const inView = useInView(cvrRef, {})

    useEffect(() => {
        // console.log(cvrRef.current)
        console.log(inView)
    }, [inView])
    

    return (
        <div className="midCvr">
            <div className="AliMajor">
                <div className="AiiCvr" ref={cvrRef}>
                    <motion.div className="Aii_1" custom={0} variants={moveBallVariant} animate="animate"></motion.div>
                    <div className="Aii_2"></div>
                    <motion.div className="Aii_1" custom={0} variants={ballUpAndDown} animate="animate"></motion.div>
                </div>
            </div>
            <div className="AliMajor">
                <div className="AiiCvr">
                    <motion.div className="Aii_1" custom={2} variants={moveBallVariant} animate="animate"></motion.div>
                    <div className="Aii_2"></div>
                    <motion.div className="Aii_1"></motion.div>
                </div>
            </div>
        </div>
    )
}