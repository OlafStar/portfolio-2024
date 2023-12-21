'use client';
import {PropsWithChildren, useEffect} from 'react';

const LocomotiveScrollProvider = ({children}: PropsWithChildren) => {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return <>{children}</>;
};

export default LocomotiveScrollProvider;
