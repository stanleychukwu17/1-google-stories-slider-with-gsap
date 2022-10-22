import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
    const phoneY = useTransform(scrollY, (latestY) => {
        let giveBack = 0

        if (latestY > oTop && latestY <= end) {
            giveBack = latestY - oTop
        } else if (latestY > end) {
            giveBack = end - oTop
        }

        // console.log(giveBack)
        return giveBack
    })

    useEffect(() => {
        const phoneParent = phoneRef.current.closest('div.AppMid_1') as HTMLDivElement
        const phoneOffsetTop = phoneParent.offsetTop
        
        return scrollY.onChange(latest => {
            // console.log(latest, phoneOffsetTop)
            if (latest >= phoneOffsetTop) {
                console.log('e don pass')
            }
        })
    })

    return (
        <motion.div className='AppMgo boy' variants={smallCardsVariant} custom={0} ref={phoneRef} style={{y:phoneY}}>
            <img src={phone} alt="" />
        </motion.div>
    )
}