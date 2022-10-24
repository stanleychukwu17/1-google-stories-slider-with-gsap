import { Variant } from "framer-motion"

type iFirst = {
    initial: Variant
    animate:Variant
}

const t1Variant: iFirst = {
    initial: {
        scale: 1.5, opacity: 0
    },
    animate: {
        scale: 1, opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
}

const t2Variant: iFirst = {
    initial: {
        opacity: 0, y: -30
    },
    animate: {
        opacity: 1, y: 0,
        transition: {
            ease: "easeOut",
            duration: 1,
            delay: .3
        }
    }
}

const mainCardsVariant: iFirst = {
    initial: {
        opacity: 0, y: 50
    },
    animate: {
        opacity: 1, y: 0,
        transition: {
            duration:.8,
            delay: .1
        }
    }
}

const smallCardsVariant: iFirst = {
    initial: {y: 70, opacity: 0},
    animate: (custom) => ({
        y: 0, opacity: 1,
        transition: {
            duration:2,
            ease: 'easeOut',
            delay: .3 * custom
        }
    })
}

// for animations in the MidBallComp
const moveBallVariant: Omit<iFirst, 'initial'> = {
    animate: (custom: number) => ({
        x: [-100, 100, -100],
        rotate: [-180, 720, -180],
        transition: {
            delay: custom * 0.5,
            ease: 'easeInOut',
            duration: 3,
            repeat: Infinity,
        }
    })
}

const ballUpAndDown: Omit<iFirst, 'initial'> = {
    animate: (custom: number) => ({
        y: [0, 100, 0],
        // rotate: [-180, 720, -180],
        transition: {
            delay: custom * 0.5,
            ease: 'easeInOut',
            duration: 3,
            repeat: Infinity,
        }
    })
}

export {
    t1Variant, t2Variant, mainCardsVariant, smallCardsVariant, moveBallVariant, ballUpAndDown
}