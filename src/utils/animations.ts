export const slideUp = {
    initial: {
        y: '100%',
    },
    open: ({i, delay = 0}: {i: number; delay?: number}) => ({
        y: '0%',
        transition: {duration: 0.5, delay: 0.015 * i + delay},
    }),
    closed: {
        y: '100%',
        transition: {duration: 0.5},
    },
};

export const slideOutXRight = {
    initial: {
        x: '0%',
    },
    out: (delay: number) => ({
        x: '110%',
        transition: {delay: delay},
    }),
};

export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5},
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5},
    },
};
