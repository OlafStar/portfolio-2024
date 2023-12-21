import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import styles from './styles.module.scss';
import TextReveal from '~components/atoms/TextReveal';

const aboutPhrases = [
    `Hi im Olaf. Front-end and animation enthusiast`,
    `and full-stack programmer. Creates dynamic,`,
    `engaging websites from concept to completion.`,
    `Let's bring your ideas to life!`,
];

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.aboutContentContainer}>
                    <div className={styles.aboutFirstImage}></div>
                    <div className={styles.aboutTextContainer}>
                        <TextReveal
                            className={styles.aboutText}
                            text={`Hi im Olaf. Front-end and animation enthusiast and full-stack programmer. Creates dynamic, engaging websites from concept to completion. Let's bring your ideas to life!`}
                            options={{once: true}}
                        />
                    </div>
                    <div className={styles.aboutSecondImage}></div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutSection;
