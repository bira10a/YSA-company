import { useContext, useState } from "react";
import { Header } from "../widgets/header/Header";
import { Outlet } from "react-router";

import { useTheme } from "./theme/useTheme";

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