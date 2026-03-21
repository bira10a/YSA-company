import { Routes, Route } from "react-router";
import { Suspense } from "react";

import { Layout } from "./Layout";

import { HeroSectionAsync } from "../pages/heroSection/HeroSection.async";
import { AboutPageAsync } from "../pages/aboutPage/AboutPage.async";
import { HomePageAsync } from "../pages/homePage/HomePage.async";
import { NotFoundPageAsync } from "../pages/notFoundPage/NotFoundPage.async";


const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Layout /></Suspense>}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}><AboutPageAsync /></Suspense>} />
        <Route path="homePage" element={<Suspense fallback={<div>Loading...</div>}><HomePageAsync/></Suspense>} />
        <Route path="heroSection" element={<Suspense fallback={<div>Loading...</div>}><HeroSectionAsync /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFoundPageAsync /></Suspense>} />
      </Route>
    </Routes>
  )
} 
export {RoutesApp};