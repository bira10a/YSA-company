import { lazy } from 'react';

export const VacancyPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('./VacancyPage')), 2500)
}));