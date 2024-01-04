'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';

import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';

import styles from './styles.module.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const lineVariants = {
    //     closed: {width: 32, opacity: 1},
    //     open: {width: 0, opacity: 0},
    // };

    // const topLineVariants = {
    //     closed: {rotate: 0, translateY: 0},
    //     open: {rotate: 45, translateY: 13},
    // };

    // const bottomLineVariants = {
    //     closed: {rotate: 0, translateY: 0},
    //     open: {rotate: -45, translateY: -13},
    // };

    return (
        <>
            <motion.nav
                className={styles.navigation}
                initial={{y: 0}}
                transition={{type: 'tween'}}
            >
                <MaxWidthWrapper>
                    <div className={styles.navigationContent}>
                        <div>
                            <span className={styles.logo}>{'OLAF NIELIWODZKI'}</span>
                        </div>
                        <div className={styles.button} onClick={toggleMenu}>
                            {/* <motion.div
                                className={styles.line}
                                variants={topLineVariants}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                            <motion.div
                                className={styles.line}
                                variants={lineVariants}
                                animate={isOpen ? 'open' : 'closed'}
                            />
                            <motion.div
                                className={styles.line}
                                variants={bottomLineVariants}
                                animate={isOpen ? 'open' : 'closed'}
                            /> */}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </motion.nav>
            {/* <AnimatePresence mode="wait">
                {isOpen && <HamburgerMenu />}
            </AnimatePresence> */}
        </>
    );
};

export default Navigation;
