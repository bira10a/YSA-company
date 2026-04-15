import type { RouteProps } from "react-router";

import { VacancyPage } from "../../../pages/VacancyPage";
import { AboutPage } from "../../../pages/AboutPage";
import { HomePage } from "../../../pages/HomePage";
import { NotFoundPage } from "../../../pages/NotFoundPage";


export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  VACANCY = 'vacancy',
  NOTFOUND = 'notfound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'HomePage',
  [AppRoutes.VACANCY]: 'VacancyPage',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.VACANCY]: {
    path: RoutePath.vacancy,
    element: <VacancyPage />
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notfound,
    element: <NotFoundPage />
  },
}