import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// import MiddlePhone from '../../components/App/md/MiddlePhone'


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
                <p>Your dream</p>
                <p>Meet the new iPhone 14 pro</p>
            </div>
            <div className="AppMid_1">
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
            </div>
            <div className="">
                
            </div>
        </div>
    )
}
export default App;