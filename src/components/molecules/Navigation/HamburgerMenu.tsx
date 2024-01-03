'use client';
import React from 'react';
import {motion} from 'framer-motion';

import CustomLink from '~components/atoms/CustomLink';

import styles from './styles.module.scss';
import {menuSlide, slide} from './anim';

const navItems = [
    {
        title: 'Home',
        href: '#hero',
    },
    {
        title: 'Work',
        href: '#work',
    },
    {
        title: 'About',
        href: '#about',
    },
    {
        title: 'Contact',
        href: '#contact',
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
                            <a data-scroll-to data-scroll-to-duration={5} key={index} href={data.href}>
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
                            </a>
                        );
                    })}
                </div>
                <div className={styles.spacer} />
                <div className={styles.footer}>
                    <CustomLink href={'https://twitter.com/olaf_star'}>
                        <a>{'Twitter'}</a>
                    </CustomLink>
                    <CustomLink href={'mailto:nieliwodzkiolaf@gmail.com'}>
                        <a>{'nieliwodzkiolaf@gmail.com'}</a>
                    </CustomLink>
                    <CustomLink href={'https://www.linkedin.com/in/olaf-nieliwodzki/'}>
                        <a>{'LinkedIn'}</a>
                    </CustomLink>
                </div>
            </div>
        </motion.div>
    );
}
