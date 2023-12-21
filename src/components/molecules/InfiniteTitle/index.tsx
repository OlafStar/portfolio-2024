import React, {PropsWithChildren} from 'react';
import Marquee from 'react-fast-marquee';
import styles from './styles.module.scss';

type MarqueeProps = React.ComponentProps<typeof Marquee>;

const InfiniteTitle = ({
    children,
    enableOutline,
    marqueeOptions
}: PropsWithChildren & {enableOutline?: boolean, marqueeOptions?: MarqueeProps}) => {
    const cloneCount = 6;

    const clonedChildren = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                const clones = [];
                for (let i = 0; i < cloneCount; i++) {
                    clones.push(
                        React.cloneElement(child, {
                            key: i,
                            className: `${child.props.className || ''} ${
                                i % 2 === 0 && enableOutline && styles.outline
                            }`,
                        }),
                    );
                }
                return clones;
            }
            return child;
        });
    };

    return (
        <Marquee {...marqueeOptions}>
            {clonedChildren()}
            {clonedChildren()}
            {clonedChildren()}
        </Marquee>
    );
};

export default InfiniteTitle;
