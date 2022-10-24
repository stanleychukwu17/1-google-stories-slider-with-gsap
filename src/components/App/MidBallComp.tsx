import { motion, useInView } from 'framer-motion';
import {useRef, useEffect} from 'react';


// import variant for animation of elements
import { motherBallCvr, moveBallVariant, ballUpAndDown, ballUpAndSide, barSideWays } from './appVariants';

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
                <motion.div className="AiiCvr" ref={cvrRef} custom={0} variants={motherBallCvr} animate="animate">
                    <motion.div className="Aii_1" custom={0} variants={moveBallVariant}></motion.div>
                    <motion.div className="Aii_2" custom={0} variants={barSideWays}></motion.div>
                    <motion.div className="Aii_1" custom={0} variants={ballUpAndDown}></motion.div>
                </motion.div>
            </div>
            <div className="AliMajor">
                <motion.div className="AiiCvr" custom={0} variants={motherBallCvr} animate="animate">
                    <motion.div className="Aii_1" custom={2} variants={moveBallVariant}></motion.div>
                    <motion.div className="Aii_2" custom={2} variants={barSideWays}></motion.div>
                    <motion.div className="Aii_1" custom={0} variants={ballUpAndSide}></motion.div>
                </motion.div>
            </div>
        </div>
    )
}