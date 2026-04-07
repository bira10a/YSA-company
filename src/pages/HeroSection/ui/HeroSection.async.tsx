import { lazy } from 'react';

export const HeroSectionAsync = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('./HeroSection')), 2500)
}));