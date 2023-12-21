'use client';

import {motion} from 'framer-motion';

import {PropsWithClassName} from '~/types/general';
import {slideUp} from '~utils/animations';

import styles from './styles.module.scss';

const MaskText = ({
    text,
    className,
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
