import {PropsWithChildren} from 'react';

import LocomotiveScrollProvider from './LocomotiveScrollProvider';

const Providers = ({children}: PropsWithChildren) => {
    return <LocomotiveScrollProvider>{children}</LocomotiveScrollProvider>;
};

export default Providers;
