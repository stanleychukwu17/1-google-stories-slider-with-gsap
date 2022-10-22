import { Variant } from "framer-motion"

type iFirst = {
    initial: Variant
    animate:Variant
}

const tVariant: iFirst = {
    initial: {
        scale: 2, opacity: 0
    },
    animate: {
        scale: 1, opacity: 1,
        transition: {
            ease: "easeInOut",
            duration: .8
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
            duration:.8
        }
    }
}

export {
    tVariant, cardsVariant
}