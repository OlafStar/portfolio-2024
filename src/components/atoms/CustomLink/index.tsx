'use client';
import {PropsWithChildren, useState} from 'react';
import Link, {LinkProps} from 'next/link';
import {AnimatePresence, motion} from 'framer-motion';

import styles from './styles.module.scss';

const CustomLink = ({...props}: PropsWithChildren & LinkProps) => {
    const {children} = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{position: 'relative'}}
        >
            {children}
            <div className={styles.link}>
                <AnimatePresence mode="wait">
                    {isHovered && (
                        <motion.div
                            initial={{x: '-100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{
                                duration: 0.4,
                                type: 'tween',
                                ease: [0.61, 0.11, 0.47, 0.92],
                            }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '2px',
                                backgroundColor: 'black',
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </Link>
    );
};

export default CustomLink;
