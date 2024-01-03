import Image from 'next/image';

import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import TextReveal from '~components/atoms/TextReveal';

import styles from './styles.module.scss';

const AboutSection = () => {
    return (
        <section id={'about'} className={styles.aboutSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.aboutContentContainer}>
                    <div
                        className={`${styles.mobileNone} ${styles.aboutFirstImage}`}
                        data-scroll
                        data-scroll-speed="0.15"
                    >
                        <Image
                            src={'/olaf-nieliwodzki-1.jpg'}
                            alt={'Olaf Nieliwodzki Freelance Developer'}
                            width={237}
                            height={300}
                        />
                    </div>
                    <div
                        className={`${styles.desktopNone} ${styles.aboutFirstImage}`}
                    >
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
                            options={{once: true, margin: '-18%'}}
                        />
                    </div>
                    <div
                        className={`${styles.mobileNone} ${styles.aboutSecondImage}`}
                        data-scroll
                        data-scroll-speed="0.1"
                    >
                        <Image
                            src={'/olaf-nieliwodzki-2.jpg'}
                            alt={'Olaf Nieliwodzki Freelance Developer'}
                            width={509}
                            height={719}
                        />
                    </div>
                    <div
                        className={`${styles.desktopNone} ${styles.aboutSecondImage}`}
                    >
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
