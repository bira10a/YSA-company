import type { RouteProps } from "react-router"

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
  
}