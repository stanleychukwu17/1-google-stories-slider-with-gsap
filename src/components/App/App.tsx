import './app.scss';
import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// import MiddlePhone from '../../components/App/md/MiddlePhone'

// importing of variants for our animation
import { t1Variant, cardsVariant } from './appVariants';

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
                <motion.p>Meet the new iPhone 14 pro</motion.p>
            </div>
            <motion.div className="AppMid_1" variants={cardsVariant} initial="initial" animate="animate">
                <div className="AppMgo">
                    <div className="AppMOimg"><img src={p1} alt="" /></div>
                </div>
                <div className="AppMgo">
                    <div className="AppMOimg"><img src={p2} alt="" /></div>
                </div>
                <div className='AppMgo boy'><img src={phone} alt="" /></div>
                <div className="AppMgo">
                    <div className="AppMOimg"><img src={p3} alt="" /></div>
                </div>
                <div className="AppMgo">
                    <div className="AppMOimg"><img src={p4} alt="" /></div>
                </div>
            </motion.div>
            <div className="">
                
            </div>
        </div>
    )
}
export default App;