import React, {useRef} from 'react';
import {useScroll, motion, useTransform, useMotionTemplate} from 'framer-motion';

import {ServicesType} from '~config/services';

import styles from './styles.module.scss';

const Title = ({
    titleDesktop,
    titleMobile,
    speed,
    index,
}: ServicesType & {index: number}) => {
    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`],
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className={styles.title}>
            <div className={styles.wrapper}>
                <motion.p style={{clipPath: clip}}>
                    <span className={styles.mobileNone}>
                        <span className={styles.counter}>{`0${index + 1}`}</span>
                        <span>{titleDesktop}</span>
                    </span>
                    <span className={styles.desktopNone}>
                        <span>{titleMobile}</span>
                    </span>
                </motion.p>
                <p>
                    <span className={styles.mobileNone}>
                        <span className={styles.counter}>{`0${index + 1}`}</span>
                        <span>{titleDesktop}</span>
                    </span>
                    <span className={styles.desktopNone}>
                        <span>{titleMobile}</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Title;
