'use client';
import React from 'react';
import {motion} from 'framer-motion';

import CustomLink from '~components/atoms/CustomLink';

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
                    {navItems.map((data, index) => {
                        return (
                            <CustomLink key={index} href={data.href}>
                                <motion.div
                                    custom={index}
                                    variants={slide}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    style={{width: 'fit-content'}}
                                >
                                    {data.title}
                                </motion.div>
                            </CustomLink>
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <CustomLink href={'#'}>
                        <a>{'Twitter'}</a>
                    </CustomLink>
                    <CustomLink href={'#'}>
                        <a>{'olafnieliwodzki@wp.pl'}</a>
                    </CustomLink>
                    <CustomLink href={'#'}>
                        <a>{'LinkedIn'}</a>
                    </CustomLink>
                </div>
            </div>
        </motion.div>
    );
}
