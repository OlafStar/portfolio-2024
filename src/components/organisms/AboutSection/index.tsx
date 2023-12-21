import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import styles from './styles.module.scss';
import TextReveal from '~components/atoms/TextReveal';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className={styles.aboutSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.aboutContentContainer}>
                    <div className={styles.aboutFirstImage}>
                        <Image
                            src={'/olaf-nieliwodzki-1.jpg'}
                            alt={'Olaf Nieliwodzki Freelance Developer'}
                            width={237}
                            height={300}
                        />
                    </div>
                    <div className={styles.aboutTextContainer}>
                        <TextReveal
                            className={styles.aboutText}
                            text={`Hi im Olaf. Front-end and animation enthusiast and full-stack programmer. Creates dynamic, engaging websites from concept to completion. Let's bring your ideas to life!`}
                            options={{once: true, margin: '-15%'}}
                        />
                    </div>
                    <div className={styles.aboutSecondImage}>
                        <Image
                            src={'/olaf-nieliwodzki-2.jpg'}
                            alt={'Olaf Nieliwodzki Freelance Developer'}
                            width={509}
                            height={719}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutSection;
