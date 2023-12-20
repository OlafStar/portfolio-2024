import localFont from 'next/font/local';

export const clashGrotesk = localFont({
    src: [
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/font/ClashGrotesk/ClashGrotesk-Extralight.ttf',
            weight: '200',
            style: 'normal',
        },
    ],
});
