import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';

// import MiddlePhone from '../../components/App/md/MiddlePhone'


// importing of all assets
import phone from '../../assets/phone.png'

const App = () => {

    return (
        <div className="AppMain">
            <div className="AppTitle">
                <p>Your dream</p>
                <p>Meet the new iPhone 14 pro</p>
            </div>
            <div className="AppMid_1">
                <div className="AppMgo"></div>
                <div className="AppMgo"></div>
                <div className='AppMgo boy'><img src={phone} alt="" /></div>
                <div className="AppMgo"></div>
                <div className="AppMgo"></div>
            </div>
            <div className="">
                
            </div>
        </div>
    )
}
export default App;