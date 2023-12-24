import Link from 'next/link';

import TextReveal from '~components/atoms/TextReveal';
import CustomLink from '~components/atoms/CustomLink';

import styles from './styles.module.scss';

const ContactSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.mainTextContainer}>
                <TextReveal text="LET’S CREATE" className={styles.mainText} />
                <TextReveal text="SOMETHING" className={styles.mainText} />
                <TextReveal text="AMAZING TOGETHER" className={styles.mainText} />
            </div>
            <div className={styles.linksDesktop}>
                <CustomLink href="#">
                    <div className={styles.additionalLink}>{'LinkedIn'}</div>
                </CustomLink>
                <Link
                    href={'mailto:olafnieliwodzki@wp.pl'}
                    className={styles.button}
                >
                    <div className={styles.buttonContent}>
                        <div style={{maxWidth: '174px'}}>{'Write a message'}</div>
                        <div style={{fontSize: '16px'}}>
                            {'olafnieliwodzki@wp.pl'}
                        </div>
                    </div>
                    <div className={styles.mask}>
                        <div className={styles.buttonContent}>
                            <div className={styles.buttonText}>
                                {'Write a message'}
                            </div>
                            <div style={{fontSize: '16px'}}>
                                {'olafnieliwodzki@wp.pl'}
                            </div>
                        </div>
                    </div>
                </Link>
                <CustomLink href="#">
                    <div className={styles.additionalLink}>{'Twitter'}</div>
                </CustomLink>
            </div>

            <div className={styles.linksMobile}>
                <Link
                    href={'mailto:olafnieliwodzki@wp.pl'}
                    className={styles.button}
                >
                    <div className={styles.buttonContent}>
                        <div className={styles.buttonText}>{'Write a message'}</div>
                        <div style={{fontSize: '16px'}}>
                            {'olafnieliwodzki@wp.pl'}
                        </div>
                    </div>
                </Link>
                <div className={styles.linksMobileBottom}>
                    <div className={styles.additionalLink}>{'LinkedIn'}</div>
                    <div className={styles.additionalLink}>{'Twitter'}</div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
