import type {Metadata} from 'next';

import '~/styles/globals.scss';
import Navigation from '~components/molecules/Navigation';
import Providers from '~components/providers';
import {clashGrotesk} from '~fonts/clashGrotesk';

export const metadata: Metadata = {
    title: 'Olaf Nieliwodzki - Creative Fullstack Developer',
    description:
        'Creative Fullstack developer open to working as a freelancer. My main stack is Next.js and I specialise in web development, but can also create amazing mobile apps.',
    icons: {
        icon: '/icon.svg',
    },
    openGraph: {
        title: 'Olaf Nieliwodzki - Creative Fullstack Developer',
        description:
            'Creative Fullstack developer open to working as a freelancer. My main stack is Next.js and I specialise in web development, but can also create amazing mobile apps.',
        url: `https://olafdev.com/`,
        images: [
            {
                url: `https://olafdev.com/opg.jpg`,
                width: 800,
                height: 600,
                alt: 'Olaf Nieliwodzki - Creative Fullstack Developer',
            },
            {
                url: `https://olafdev.com/opg.jpg`,
                width: 1800,
                height: 1600,
                alt: 'Olaf Nieliwodzki - Creative Fullstack Developer',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        title: 'Olaf Nieliwodzki - Creative Fullstack Developer',
        description:
            'Creative Fullstack developer open to working as a freelancer. My main stack is Next.js and Webflow and I specialise in web development, but can also create amazing mobile apps.',
        images: [
            {
                url: `https://olafdev.com/opg.jpg`,
                width: 800,
                height: 600,
                alt: 'Olaf Nieliwodzki - Creative Fullstack Developer',
            },
            {
                url: `https://olafdev.com/opg.jpg`,
                width: 1800,
                height: 1600,
                alt: 'Olaf Nieliwodzki - Creative Fullstack Developer',
            },
        ],
    },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={clashGrotesk.className}>
                <Providers>
                    <Navigation />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
