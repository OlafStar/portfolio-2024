import InfiniteTitle from '~components/molecules/InfiniteTitle';
import styles from './styles.module.scss';
import {works} from '~config/works';
import WorkElement from '~components/molecules/WorkElement';

const WorksSection = () => {
    return (
        <div>
            <div className={styles.titleWrapper}>
                <InfiniteTitle enableOutline>
                    <span className={styles.sectionTitle}>{'WORKS'}</span>
                </InfiniteTitle>
            </div>
            <div className={styles.worksContainer}>
                {works.map((item, index) => (
                    <WorkElement key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default WorksSection;
