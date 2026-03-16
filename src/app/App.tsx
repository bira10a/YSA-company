import { Header } from "../widgets/header/Header";

import { Route, Routes } from "react-router";

import { HeroSection } from "../pages/heroSection/HeroSection";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";

import { Layout } from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage/>} />
          <Route path="homePage" element={<HomePage/>} />
          <Route path="heroSection" element={<HeroSection/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </>
  )
}
export default App;