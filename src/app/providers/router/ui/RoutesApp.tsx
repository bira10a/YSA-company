import { Routes, Route } from "react-router";
import { Suspense } from "react";

import { Layout } from "../../../Layout";

import { HeroSection } from "../../../../pages/HeroSection";
import { AboutPage } from "../../../../pages/AboutPage";
import { HomePage } from "../../../../pages/HomePage";
import { NotFoundPage } from "../../../../pages/NotFoundPage";

const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="homePage" element={<AboutPage/>} />
            <Route path="heroSection" element={<HeroSection />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
    </Suspense>
  )
} 
export {RoutesApp};