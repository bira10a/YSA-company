import { Routes, Route } from "react-router";
import { Suspense } from "react";

import { Layout } from "./Layout";

import { HeroSectionAsync } from "../pages/heroSection/HeroSection.async";
import { AboutPageAsync } from "../pages/aboutPage/AboutPage.async";
import { HomePageAsync } from "../pages/homePage/HomePage.async";
import { NotFoundPageAsync } from "../pages/notFoundPage/NotFoundPage.async";


const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutPageAsync />} />
            <Route path="homePage" element={<HomePageAsync/>} />
            <Route path="heroSection" element={<HeroSectionAsync />} />
            <Route path="*" element={<NotFoundPageAsync />} />
          </Route>
      </Routes>
    </Suspense>
  )
} 
export {RoutesApp};