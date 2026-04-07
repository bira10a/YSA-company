import { Routes, Route } from "react-router";
import { Suspense } from "react";

import { Layout } from "../../../Layout";

import { HeroSection } from "../../../../pages/HeroSection";
import { AboutPage } from "../../../../pages/AboutPage";
import { HomePage } from "../../../../pages/HomePage";
import { NotFoundPage } from "../../../../pages/NotFoundPage";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

const RoutesApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<HomePage />} />
            <Route path="homePage" element={<AboutPage/>} />
            <Route path="heroSection" element={<HeroSection />} />
            <Route path="*" element={<NotFoundPage />} /> */}

            {Object.values(routeConfig).map(({element, path}) => (
              <Route 
                key={path}
                path={path}
                element={element}
              />
            ))}
            
          </Route>
      </Routes>
    </Suspense>
  )
} 
export {RoutesApp};