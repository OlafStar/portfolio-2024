import type {Metadata} from 'next';

import '~/styles/globals.scss';
import Navigation from '~components/molecules/Navigation';
import Providers from '~components/providers';
import {clashGrotesk} from '~fonts/clashGrotesk';

export const metadata: Metadata = {
    title: 'Olaf Nieliwodzki',
    description: 'Olaf Nieliwodzki',
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
