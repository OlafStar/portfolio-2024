import {MaskText} from '~components/atoms/MaskText';
import styles from './styles.module.scss';

const des = [
    'As a passionate Creative Developer, I blend art',
    'and technology to create digital experiences that',
    'are not just functional, but also visually captivating',
    'and emotionally engaging.',
];

const HeroSection = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <div className={styles.heroSectionContent}>
                <div className={styles.heroText}>
                    <MaskText
                        className={styles.heroMainText}
                        phrases={['WEB']}
                        delay={0}
                    />
                    <MaskText
                        className={styles.heroMainText}
                        phrases={['DEVELOPER']}
                        delay={0.15}
                    />
                </div>
                <div className={styles.heroDescriptionContainer}>
                    <MaskText
                        className={styles.heroDescriptionText}
                        phrases={des}
                        delay={0.45}
                    />
                </div>
            </div>
            <div className={styles.bottomLineContainer}>
                <MaskText
                    className={styles.bottomLineText}
                    phrases={['AVAILABLE FOR FREELANCE WORK']}
                    delay={0.9}
                />
            </div>
        </section>
    );
};

export default HeroSection;
