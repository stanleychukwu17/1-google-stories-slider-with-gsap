import { useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion';
// import { gsap } from 'gsap';

// importing of style sheets
import './app.scss';

// importation of supporting components
import Phone from './Phone';
import MidBallComp from './MidBallComp';


// importing of framer motion variants for our animation
import { t1Variant, t2Variant, mainCardsVariant, smallCardsVariant } from './appVariants';

// importing of all assets
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

const App = () => {
    const {scrollY} = useScroll()
    const titleY = useTransform(scrollY, [0, 1000], [0, 2450])
    const titleScale = useTransform(scrollY, [0, 1000], [1, 1.6])
    const card1Y = useTransform(scrollY, [375, 1375], [0, 1000])
    const card1X = useTransform(scrollY, [375, 1000, 1375], [0, 0, 250])
    const card1Xb = useTransform(scrollY, [375, 1000, 1375], [0, 0, -250])
    const background = useTransform(scrollY, [900, 1275], ['#000', '#f5f6fa']) // changes the page background color

    // for hero section card animations
    const cardControls = useAnimationControls()

    useEffect(() => {
        cardControls.set({opacity:0, y:70});
        cardControls.start( custom => ({
            opacity: 1, y: 0,
            transition: {
                opacity: {duration:1, ease:'easeIn', delay: .3 * custom},
                duration:1, ease: 'easeOut', delay: .3 * custom
            }
        }))

        // stop the cardControl animations once the scrolling has passed the section where the iPhone is pinned to the user interface
        const unSubscribe = scrollY.onChange(latest => {
            if (latest > 375) {
                console.log({latest})
                console.log('kill the animation')
                unSubscribe()
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <motion.div className="AppMain" style={{background}}>
            <div className="AppTitle">
                <motion.p variants={t1Variant} initial="initial" animate="animate" style={{y: titleY, scale: titleScale}}>
                    Your dream
                </motion.p>
                <motion.p variants={t2Variant} initial="initial" animate="animate">Meet the new iPhone 14 pro</motion.p>
            </div>
            <motion.div className="AppMid_1" variants={mainCardsVariant} initial="initial" animate="animate">
                <motion.div className="AppMgo" animate={cardControls} custom={4} style={{y:card1Y, x:card1X}}>
                    <div className="AppMOimg"><img src={p1} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo Mg2" animate={cardControls} custom={4}>
                    <div className="AppMOimg"><img src={p2} alt="" /></div>
                </motion.div>
                <Phone />
                <motion.div className="AppMgo Mg2" animate={cardControls} custom={3}>
                    <div className="AppMOimg"><img src={p3} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo" animate={cardControls} custom={5} style={{y:card1Y, x:card1Xb}}>
                    <div className="AppMOimg"><img src={p4} alt="" /></div>
                </motion.div>
            </motion.div>
            <MidBallComp />
        </motion.div>
    )
}
export default App;