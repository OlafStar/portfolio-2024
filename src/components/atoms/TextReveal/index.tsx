'use client';

import {useInView, motion} from 'framer-motion';
import {useRef} from 'react';

import {PropsWithClassName, PropsWithScrollInViewOptions} from '~/types/general';

import {slideUp} from '../../../utils/animations';

import styles from './styles.module.scss';

const TextReveal = ({
    text,
    className,
    options,
    boldPattern, // Prop to accept a RegExp pattern
}: PropsWithClassName &
    PropsWithScrollInViewOptions & {
        text: string;
        wordsGap?: number;
        boldPattern?: RegExp; // Define the prop as a RegExp
    }) => {
    const description = useRef<HTMLDivElement>(null);
    const isInView = useInView(description, {...options});

    return (
        <div ref={description} className={styles.container}>
            <div className={`${styles.textContainer} ${className}`}>
                <p>
                    {text.split(' ').map((word, index) => {
                        // Check if the word matches the RegExp pattern
                        const isBold = boldPattern && boldPattern.test(word);

                        return (
                            <span key={index} className={styles.spanText}>
                                <motion.span
                                    variants={slideUp}
                                    custom={{i: index, delay: 0}}
                                    animate={isInView ? 'open' : 'closed'}
                                    key={index}
                                    className={isBold ? styles.boldText : ''}
                                >
                                    {isBold ? (
                                        <span className={styles.bold}>{word}</span>
                                    ) : (
                                        word
                                    )}
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
