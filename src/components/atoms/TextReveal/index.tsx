'use client';

import {useInView, motion} from 'framer-motion';
import {useRef} from 'react';
import {PropsWithClassName} from '~/types/general';
import {slideUp} from '../../../utils/animations';
import {Options} from '~/types/inView';
import styles from './styles.module.scss';

const TextReveal = ({
    text,
    className,
    options,
    wordsGap = 3,
}: PropsWithClassName & {
    text: string;
    options?: Options;
    wordsGap?: number;
}) => {
    const description = useRef<HTMLDivElement>(null);
    const isInView = useInView(description, {...options});
    
    return (
        <div ref={description} className={styles.container}>
            <div className={`${styles.textContainer} ${className}`}>
                <p>
                    {text.split(' ').map((word, index) => {
                        return (
                            <span key={index} className={styles.spanText}>
                                <motion.span
                                    variants={slideUp}
                                    custom={{i: index, delay: 0}}
                                    animate={isInView ? 'open' : 'closed'}
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

export default TextReveal;
