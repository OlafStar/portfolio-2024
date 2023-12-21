'use client';
import React, {useState} from 'react';
import styles from './styles.module.scss';
import {motion} from 'framer-motion';
import {usePathname} from 'next/navigation';
import {menuSlide} from './anim';

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
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <div
                                key={index}
                                // data={{...data, index}}
                                // isActive={selectedIndicator == data.href}
                                // setSelectedIndicator={setSelectedIndicator}
                            >
                                {data.title}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <a>Awwwards</a>
                    <a>Instagram</a>
                    <a>Dribble</a>
                    <a>LinkedIn</a>
                </div>
            </div>
        </motion.div>
    );
}
