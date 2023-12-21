import {PropsWithChildren} from 'react';
import styles from './styles.module.scss';

const MaxWidthWrapper = ({children}: PropsWithChildren) => {
    return <div className={styles.maxWidthWrapper}>{children}</div>;
};

export default MaxWidthWrapper;
