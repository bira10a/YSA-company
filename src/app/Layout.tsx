import { Header } from "../widgets/header";
import { Outlet } from "react-router";

import { useTheme } from "./providers/ThemeProvider";

const Layout = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>  
      <Header />
      <button onClick={toggleTheme}>X Theme</button>
      <main>
        <Outlet />
      </main>
      <footer>2026</footer>
    </div>
  ) 
} 
export {Layout};