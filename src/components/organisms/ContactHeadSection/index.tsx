import InfiniteTitle from '~components/molecules/InfiniteTitle';
import styles from './styles.module.scss';

const ContactHeadSection = () => {
    return (
        <div className={styles.stripeContainer}>
            <div className={`${styles.stripe} ${styles.stripeBlack} ${styles.upperStripe}`}>
                <InfiniteTitle>
                    <span className={styles.stripeText}>{'WORK TOGETHER'}</span>
                </InfiniteTitle>
            </div>
            <div className={`${styles.stripe} ${styles.stripeWhite} ${styles.bottomStripe}`}>
                <InfiniteTitle marqueeOptions={{direction: 'right'}}>
                    <span className={styles.stripeText}>{'CONTACT'}</span>
                </InfiniteTitle>
            </div>
        </div>
    );
};

export default ContactHeadSection;
