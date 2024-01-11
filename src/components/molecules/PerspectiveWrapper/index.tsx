import React, {useState, useEffect, HTMLProps, PropsWithChildren} from 'react';
import {motion, MotionProps} from 'framer-motion';
import {useWindowSize} from 'react-use';

import {PropsWithClassName} from '~types/general';

type PerspectiveWrapperProps = MotionProps & {
    maxXRotation?: number;
    maxYRotation?: number;
} & PropsWithClassName &
    PropsWithChildren &
    Omit<HTMLProps<HTMLDivElement>, 'ref'>;

const PerspectiveWrapper: React.FC<PerspectiveWrapperProps> = ({
    maxXRotation = 10,
    maxYRotation = 10,
    children,
    ...props
}) => {
    const {width, height} = useWindowSize();
    const [rotation, setRotation] = useState({rotateX: 0, rotateY: 0});

    const handleMouseMove = (e: MouseEvent) => {
        const xRotation = (-(height / 2 - e.clientY) / height) * maxYRotation;
        const yRotation = ((width / 2 - e.clientX) / width) * maxXRotation;

        setRotation({rotateX: xRotation, rotateY: yRotation});
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [height, width, maxXRotation, maxYRotation]);

    return (
        <motion.div
            {...props}
            animate={rotation}
            style={{
                transformPerspective: 1000,
                ...props.style,
            }}
        >
            {children}
        </motion.div>
    );
};

export default PerspectiveWrapper;
