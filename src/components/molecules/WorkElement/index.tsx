import {WorksElementType} from '~config/works';
import styles from './styles.module.scss';
import Image from 'next/image';

const WorkElement = ({title, image, position, link}: WorksElementType) => {
    return (
        <div className={styles.workElementContainer}>
            <div className={styles.workTopBar}>
                <div>{title}</div>
                <div style={{textTransform: 'uppercase'}}>{position}</div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={700}
                    className={styles.image}
                />
            </div>
            <div className={styles.workBottomBar}>
                <div>{'Explore'}</div>
            </div>
        </div>
    );
};

export default WorkElement;
