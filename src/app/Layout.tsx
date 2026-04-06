import { useContext, useState } from "react";
import { Header } from "../widgets/header/Header";
import { Outlet } from "react-router";
import { ThemeContext } from "./theme/ThemeContext";

import { Theme } from "./theme/ThemeContext";

const Layout = () => {
  const {theme, setTheme} = useContext(ThemeContext);


  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }
  
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