'use client';

import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import TextReveal from '~components/atoms/TextReveal';

import styles from './styles.module.scss';

const DescriptionSection = () => {
    return (
        <section id={'description'} className={styles.descriptionSectionContainer}>
            <MaxWidthWrapper>
                <div
                    className={styles.sectionContent}
                    data-scroll
                    data-scroll-speed="0.15"
                >
                    <TextReveal
                        className={styles.textContent}
                        text={`Explore my work and witness how creativity is coded into every project. Let's transform your vision into a digital masterpiece!`}
                        boldPattern={
                            new RegExp(
                                /\bcreativity\b|\bis\b|\bcoded\b|\bmasterpiece\b|\bdigital\b/i,
                            )
                        }
                        options={{margin: '-25%', once: true}}
                    />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default DescriptionSection;
