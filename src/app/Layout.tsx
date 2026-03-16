import { Header } from "../widgets/header/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>2026</footer>
    </>
  ) 
} 
export {Layout};