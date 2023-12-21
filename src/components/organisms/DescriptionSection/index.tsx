'use client';

import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';
import styles from './styles.module.scss';
import TextReveal from '~components/atoms/TextReveal';

const DescriptionSection = () => {
    return (
        <section className={styles.descriptionSectionContainer}>
            <MaxWidthWrapper>
                <div className={styles.sectionContent}>
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
