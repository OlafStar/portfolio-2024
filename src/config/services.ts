export const services = [
    {text: {desktop: 'WEB DEVELOPMENT', mobile: 'WEB'}},
    {text: {desktop: 'MOBILE DEVELOPMENT', mobile: 'MOBILE'}},
    {text: {desktop: 'UI/UX DESIGN', mobile: 'UI/UX DESIGN'}},
    {text: {desktop: 'SAAS DEVELOPMENT', mobile: 'SAAS'}},
    {text: {desktop: 'BLOCKCHAIN DEVELOPMENT', mobile: 'BLOCKCHAIN'}},
];

export const data: ServicesType[] = [
    {
        titleDesktop: 'WEB DEVELOPMENT',
        titleMobile: 'WEB',
        speed: 0.5,
    },
    {
        titleDesktop: 'MOBILE DEVELOPMENT',
        titleMobile: 'MOBILE',
        speed: 0.5,
    },
    {
        titleDesktop: 'ECOMMERCE SHOP',
        titleMobile: 'ECOMMERCE',
        speed: 0.58,
    },
    {
        titleDesktop: 'UI/UX DESIGN',
        titleMobile: 'UI/UX DESIGN',
        speed: 0.67,
    },
    {
        titleDesktop: 'SAAS DEVELOPMENT',
        titleMobile: 'SAAS',
        speed: 0.8,
    },
    {
        titleDesktop: 'BLOCKCHAIN DEVELOPMENT',
        titleMobile: 'BLOCKCHAIN',
        speed: 0.9,
    },
];

export type ServicesType = {
    titleDesktop: string;
    titleMobile: string;
    speed: number;
};
