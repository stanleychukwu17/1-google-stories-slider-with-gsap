import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// importing of framer motion variants for animation
import { smallCardsVariant } from './appVariants';

// importing of all assets
import phone from '../../assets/phone.png'

export default function Phone() {
    const phoneRef = useRef<HTMLDivElement>({} as HTMLDivElement)
    const oTop = 385 // the offset of the item from the top
    const end = 1000 + oTop; // the end should be after scrolling 1000px downward
    const {scrollY} = useScroll()
    const phoneY = useTransform(scrollY, (latestY) => { // inCharge of pining the phone down on user scroll
        let giveBack = 0

        if (latestY > oTop && latestY <= end) {
            giveBack = latestY - oTop
        } else if (latestY > end) {
            giveBack = end - oTop
        }

        // console.log(giveBack)
        return giveBack
    })
    const scale = useTransform(scrollY, [oTop, end], [1, 0.85])

    return (
        <motion.div className='AppMgo boy' variants={smallCardsVariant} custom={0} ref={phoneRef} style={{y:phoneY, scale, originY:'top'}}>
            <img src={phone} alt="" />
        </motion.div>
    )
}