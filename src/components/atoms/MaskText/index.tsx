'use client';

import {motion} from 'framer-motion';
import {useRef} from 'react';
import {PropsWithClassName} from '~/types/general';
import styles from './styles.module.scss';
import {slideUp} from '~utils/animations';

const MaskText = ({
    text,
    className,
    wordsGap = 3,
    delay = 0,
}: PropsWithClassName & {
    text: string;
    wordsGap?: number;
    delay?: number;
}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.textContainer} ${className}`}>
                <p>
                    {text.split(' ').map((word, index) => {
                        return (
                            <span key={index} className={styles.spanText}>
                                <motion.span
                                    variants={slideUp}
                                    custom={{i: index, delay}}
                                    initial={'initial'}
                                    animate={'open'}
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default MaskText;
