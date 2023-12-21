import MaskText from '~components/atoms/MaskText';
import styles from './styles.module.scss';
import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';

const HeroSection = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.heroSectionContentContainer}>
                    <div className={styles.heroSectionContent}>
                        <div className={styles.heroText}>
                            <MaskText
                                className={styles.heroMainText}
                                text={'WEB'}
                                delay={0}
                            />
                            <MaskText
                                text="DEVELOPER"
                                className={styles.heroMainText}
                                delay={0.15}
                            />
                        </div>
                        <div className={styles.heroDescriptionContainer}>
                            <MaskText
                                className={styles.heroDescriptionText}
                                text={`As a passionate Creative Developer, I blend art and technology to create digital experiences that are not just functional, but also visually captivating and emotionally engaging.`}
                                delay={0.5}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomLineContainer}>
                        <MaskText
                            className={styles.bottomLineText}
                            text={'AVAILABLE FOR FREELANCE WORK'}
                            delay={0.9}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default HeroSection;
