'use client';

import {motion} from 'framer-motion';

import MaskText from '~components/atoms/MaskText';
import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import InfiniteTitle from '~components/molecules/InfiniteTitle';

import styles from './styles.module.scss';

const HeroSection = () => {
    return (
        <section id={'hero'} className={styles.heroSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.heroSectionContentContainer}>
                    <div className={styles.heroSectionContent}>
                        <div
                            className={styles.heroText}
                            data-scroll
                            data-scroll-speed="0.1"
                        >
                            <MaskText
                                className={styles.heroMainText}
                                text={'CREATIVE'}
                                delay={0}
                            />
                            <MaskText
                                text="DEVELOPER"
                                className={styles.heroMainText}
                                delay={0.15}
                            />
                        </div>
                        <div
                            className={styles.heroDescriptionContainer}
                            data-scroll
                            data-scroll-speed="0.1"
                        >
                            <MaskText
                                className={styles.heroDescriptionText}
                                text={`As a passionate Creative Developer, I blend art and technology to create digital experiences that are not just functional, but also visually captivating and emotionally engaging.`}
                                delay={0.5}
                            />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>

            <motion.div
                className={styles.bottomLineContainer}
                initial={{width: 0}}
                animate={{width: '100%'}}
                transition={{duration: 0.8, delay: 0.1}}
            >
                <InfiniteTitle>
                    <MaskText
                        className={styles.bottomLineText}
                        text={'AVAILABLE FOR FREELANCE WORK'}
                        delay={0.9}
                    />
                </InfiniteTitle>
            </motion.div>
        </section>
    );
};

export default HeroSection;
