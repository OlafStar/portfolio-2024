import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://olafdev.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ];
}
