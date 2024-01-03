'use client';

import {useEffect, useRef} from 'react';
import {useInView} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';

import CoverReveal from '~components/atoms/CoverReveal';
import {WorksElementType} from '~config/works';
import CustomLink from '~components/atoms/CustomLink';

import styles from './styles.module.scss';

const WorkElement = ({title, position, link}: WorksElementType) => {
    const container = useRef<HTMLDivElement>(null);
    const isInView = useInView(container, {once: true, margin: '-20%'});

    useEffect(() => {
        console.log(isInView);
    }, [isInView]);

    return (
        <div ref={container} className={styles.workElementContainer}>
            <CoverReveal customInView={isInView} delay={0}>
                <div>{title}</div>
            </CoverReveal>
            <CoverReveal customInView={isInView} delay={0.1}>
                <div style={{textTransform: 'uppercase'}}>{position}</div>
            </CoverReveal>
            <CustomLink href={link}>
                <CoverReveal customInView={isInView} delay={0.3}>
                    <div className={styles.explore} style={{display: 'flex', gap: '4px'}}>
                        <div>{'Explore'}</div>
                        <ArrowUpRight />
                    </div>
                </CoverReveal>
            </CustomLink>
        </div>
    );
};

export default WorkElement;
