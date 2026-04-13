import { Header } from "../widgets/header";
import { Outlet } from "react-router";

import { useTheme } from "./providers/ThemeProvider";

import { Suspense } from "react";
import { PageLoader } from "../shared/ui/PageLoader/PageLoader";

const Layout = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>  
      <Header />
      <button onClick={toggleTheme}>X Theme</button>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      <footer></footer>
    </div>
  ) 
} 
export {Layout};