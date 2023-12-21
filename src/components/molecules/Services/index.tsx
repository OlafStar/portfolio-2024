'use client';
import {Fragment} from 'react';

import {data} from '~config/services';

import styles from './styles.module.scss';
import Title from './title';

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titles}>
                {data.map((project, index) => {
                    return (
                        <Fragment key={index}>
                            {index === 0 && <div className={styles.line} />}
                            <Title {...project} index={index} />
                            <div className={styles.line} />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
