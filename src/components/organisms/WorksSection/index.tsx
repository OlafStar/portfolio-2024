import InfiniteTitle from '~components/molecules/InfiniteTitle';
import {works} from '~config/works';
import WorkElement from '~components/molecules/WorkElement';

import styles from './styles.module.scss';

const WorksSection = () => {
    return (
        <section>
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
        </section>
    );
};

export default WorksSection;
