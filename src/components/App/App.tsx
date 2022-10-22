import './app.scss';
import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// import MiddlePhone from '../../components/App/md/MiddlePhone'

// importing of variants for our animation
import { t1Variant, t2Variant, mainCardsVariant, smallCardsVariant } from './appVariants';

// importing of all assets
import phone from '../../assets/phone.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

const App = () => {

    return (
        <div className="AppMain">
            <div className="AppTitle">
                <motion.p variants={t1Variant} initial="initial" animate="animate">Your dream</motion.p>
                <motion.p variants={t2Variant} initial="initial" animate="animate">Meet the new iPhone 14 pro</motion.p>
            </div>
            <motion.div className="AppMid_1" variants={mainCardsVariant} initial="initial" animate="animate">
                <motion.div className="AppMgo" variants={smallCardsVariant} custom={1}>
                    <div className="AppMOimg"><img src={p1} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo Mg2" variants={smallCardsVariant} custom={3}>
                    <div className="AppMOimg"><img src={p2} alt="" /></div>
                </motion.div>
                <motion.div className='AppMgo boy'>
                    <img src={phone} alt="" />
                </motion.div>
                <motion.div className="AppMgo Mg2" variants={smallCardsVariant} custom={2}>
                    <div className="AppMOimg"><img src={p3} alt="" /></div>
                </motion.div>
                <motion.div className="AppMgo" variants={smallCardsVariant} custom={0}>
                    <div className="AppMOimg"><img src={p4} alt="" /></div>
                </motion.div>
            </motion.div>
            <div className="">
                
            </div>
        </div>
    )
}
export default App;