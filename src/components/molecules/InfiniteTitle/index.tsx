import React, {PropsWithChildren} from 'react';
import styles from './styles.module.scss';

const InfiniteTitle = ({children}: PropsWithChildren<{}>) => {
    // Determine the number of times each child should be cloned
    // Adjust this number based on your needs and the size of your content
    const cloneCount = 5;

    const clonedChildren = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                // Create an array to hold the clones
                const clones = [];
                for (let i = 0; i < cloneCount; i++) {
                    clones.push(
                        React.cloneElement(child, {
                            key: i, // Ensure each clone has a unique key
                        }),
                    );
                }
                return clones;
            }
            return child;
        });
    };

    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {clonedChildren()}
                {clonedChildren()}
                {clonedChildren()}
            </div>
        </div>
    );
};

export default InfiniteTitle;
