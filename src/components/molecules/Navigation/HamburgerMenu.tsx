'use client';
import React from 'react';
import {motion} from 'framer-motion';

import styles from './styles.module.scss';
import {menuSlide, slide} from './anim';

const navItems = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Work',
        href: '/work',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
];

export default function index() {
    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>{'Navigation'}</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={slide}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                {data.title}
                            </motion.div>
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <a>{'Twitter'}</a>
                    <a>{'olafnieliwodzki@wp.pl'}</a>
                    <a>{'LinkedIn'}</a>
                </div>
            </div>
        </motion.div>
    );
}
