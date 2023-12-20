'use client';
import {PropsWithClassName} from '~types/general';
import styles from './styles.module.scss';
import {useRef} from 'react';
import {useInView} from 'framer-motion';
import {motion} from 'framer-motion';

type MaskTextProps = {
    phrases: string[];
    delay: number;
};

export function MaskText({phrases, className, delay}: MaskTextProps & PropsWithClassName) {
    const body = useRef(null);

    const isInView = useInView(body, {once: true, margin: '75%'});

    const animation = {
        initial: {y: '100%'},

        enter: (i: number) => ({
            y: '0',
            transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: (0.075 * i) + delay},
        }),
    };

    return (
        <div ref={body}>
            {phrases.map((phrase, index) => {
                return (
                    <div key={index} className={styles.lineMask}>
                        <motion.p
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={isInView ? 'enter' : ''}
                            className={className}
                            style={{transformOrigin: 'left'}}
                        >
                            {phrase}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
}
