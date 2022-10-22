import { Variant } from "framer-motion"

type iFirst = {
    initial: Variant
    animate:Variant
}

const t1Variant: iFirst = {
    initial: {
        scale: 1.5, opacity: 0.3
    },
    animate: {
        scale: 1, opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: .6
        }
    }
}

const t2Variant: iFirst = {
    initial: {
        opacity: 0.3, x: -60
    },
    animate: {
        opacity: 1, x: 0,
        transition: {
            ease: "easeInOut",
            duration: .6
        }
    }
}

const cardsVariant: iFirst = {
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

export {
    t1Variant, t2Variant, cardsVariant
}