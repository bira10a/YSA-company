import type { RouteProps } from "react-router";

import { HeroSection } from "../../../pages/HeroSection";
import { AboutPage } from "../../../pages/AboutPage";
import { HomePage } from "../../../pages/HomePage";
import { NotFoundPage } from "../../../pages/NotFoundPage";


export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  HERO = 'hero',
  NOTFOUND = 'notfound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'homePage',
  [AppRoutes.HERO]: 'heroSection',
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
  [AppRoutes.HERO]: {
    path: RoutePath.hero,
    element: <HeroSection />
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notfound,
    element: <NotFoundPage />
  },
}