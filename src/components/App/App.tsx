import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';

import './app.scss';

// importation of supporting components
import Phone from './Phone';


// importing of framer motion variants for our animation
import { t1Variant, t2Variant, mainCardsVariant, smallCardsVariant } from './appVariants';

// importing of all assets
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

const App = () => {
    const {scrollY} = useScroll()
    const card1Y = useTransform(scrollY, [375, 1375], [0, 1000])
    const card1X = useTransform(scrollY, [375, 1000, 1375], [0, 0, 250])
    const card1Xb = useTransform(scrollY, [375, 1000, 1375], [0, 0, -250])

    // useEffect(() => {
    //     gsap.set('body', {overflow:'hidden'})
    //     setTimeout(() => {
    //         gsap.set('body', {overflow:'auto'})
    //     }, 2500)
    // }, [])

    return (
        <div className="AppMain">
            <div className="AppTitle">
                <motion.p variants={t1Variant} initial="initial" animate="animate">Your dream</motion.p>
                <motion.p variants={t2Variant} initial="initial" animate="animate">Meet the new iPhone 14 pro</motion.p>
            </div>
            <motion.div className="AppMid_1" variants={mainCardsVariant} initial="initial" animate="animate">
                <motion.div className="AppMgo" variants={smallCardsVariant} custom={2} style={{y:card1Y, x:card1X}}>
                    <div className="AppMOimg"><img src={p1} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo Mg2" variants={smallCardsVariant} custom={4}>
                    <div className="AppMOimg"><img src={p2} alt="" /></div>
                </motion.div>
                <Phone />
                <motion.div className="AppMgo Mg2" variants={smallCardsVariant} custom={3}>
                    <div className="AppMOimg"><img src={p3} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo" variants={smallCardsVariant} custom={5} style={{y:card1Y, x:card1Xb}}>
                    <div className="AppMOimg"><img src={p4} alt="" /></div>
                </motion.div>
            </motion.div>
            <div className="midCvr">
                <div className="AliMajor">
                    <div className="AiiCvr">
                        <div className="Aii_1"></div>
                        <div className="Aii_2"></div>
                        <div className="Aii_2"></div>
                        <div className="Aii_1"></div>
                    </div>
                </div>
                <div className="AliMajor">
                    <div className="AiiCvr">
                        <div className="Aii_1"></div>
                        <div className="Aii_2"></div>
                        <div className="Aii_2"></div>
                        <div className="Aii_1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;