'use client';

import {PropsWithChildren, useRef} from 'react';
import styles from './styles.module.scss';
import {motion, useInView} from 'framer-motion';
import {PropsWithScrollInViewOptions} from '~types/general';
import {slideOutXRight} from '~utils/animations';

const CoverReveal = ({
    children,
    options = {once: true},
    customInView,
    delay,
}: PropsWithChildren &
    PropsWithScrollInViewOptions & {customInView?: boolean; delay: number}) => {
    const container = useRef<HTMLDivElement>(null);
    const isInView = useInView(container, {...options});

    return (
        <div ref={container} className={styles.coverRevealContainer}>
            {children}
            <motion.div
                variants={slideOutXRight}
                custom={delay}
                initial={'initial'}
                animate={
                    customInView !== undefined
                        ? customInView
                            ? 'out'
                            : 'initial'
                        : isInView
                        ? 'out'
                        : 'initial'
                }
                className={styles.coverElement}
            />
        </div>
    );
};

export default CoverReveal;
