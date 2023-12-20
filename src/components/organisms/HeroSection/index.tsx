import styles from './styles.module.scss';

const HeroSection = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <div className={styles.heroSectionContent}>
                <div className={styles.heroText}>
                    <span className={styles.heroMainText}>{'WEB'}</span>
                    <span className={styles.heroMainText}>{'DEVELOPER'}</span>
                </div>
                <div className={styles.heroDescriptionContainer}>
                    <span className={styles.heroDescriptionText}>
                        {
                            'As a passionate Creative Developer, I blend art and technology to create digital experiences that are not just functional, but also visually captivating and emotionally engaging.'
                        }
                    </span>
                </div>
            </div>
            <div className={styles.bottomLineContainer}>
                <span className={styles.bottomLineText}>{'AVAILABLE FOR FREELANCE WORK'}</span>
            </div>
        </section>
    );
};

export default HeroSection;
