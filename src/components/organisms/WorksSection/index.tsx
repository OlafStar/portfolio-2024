import InfiniteTitle from '~components/molecules/InfiniteTitle';
import {works} from '~config/works';
import WorkElement from '~components/molecules/WorkElement';
import MaxWidthWrapper from '~components/atoms/MaxWidthWrapper';

import styles from './styles.module.scss';

const WorksSection = () => {
    return (
        <section id={'work'}>
            <div className={styles.titleWrapper}>
                <InfiniteTitle enableOutline>
                    <span className={styles.sectionTitle}>{'WORKS'}</span>
                </InfiniteTitle>
            </div>
            <MaxWidthWrapper>
                <div className={styles.worksContainer}>
                    {works.map((item, index) => (
                        <WorkElement key={index} {...item} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default WorksSection;
