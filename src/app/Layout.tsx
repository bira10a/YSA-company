import { Header } from "../widgets/header/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>2026</footer>
    </div>
  ) 
} 
export {Layout};