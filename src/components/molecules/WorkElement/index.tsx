'use client';

import {WorksElementType} from '~config/works';
import styles from './styles.module.scss';
import Image from 'next/image';
import CoverReveal from '~components/atoms/CoverReveal';
import {useEffect, useRef} from 'react';
import {useInView} from 'framer-motion';

const WorkElement = ({title, image, position, link}: WorksElementType) => {
    const container = useRef<HTMLDivElement>(null);
    const isInView = useInView(container, {once: true, margin: '-50%'});

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    return (
        <div ref={container} className={styles.workElementContainer}>
            <div className={styles.workTopBar}>
                <CoverReveal customInView={isInView} delay={0}>
                    <div>{title}</div>
                </CoverReveal>
                <CoverReveal customInView={isInView} delay={0}>
                    <div style={{textTransform: 'uppercase'}}>{position}</div>
                </CoverReveal>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={700}
                    className={styles.image}
                />
            </div>
            <div className={styles.workBottomBar}>
                <CoverReveal customInView={isInView} delay={0.3}>
                    <div>{'Explore'}</div>
                </CoverReveal>
            </div>
        </div>
    );
};

export default WorkElement;
