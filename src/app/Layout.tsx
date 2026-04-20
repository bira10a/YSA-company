import { Header } from "../widgets/header";
import { Outlet } from "react-router";

import { useTheme } from "./providers/ThemeProvider";

import { Suspense, useState, useEffect } from "react";
import { PageLoader } from "../shared/ui/PageLoader/PageLoader";
import { Preloader } from "../shared/ui/Preloader/Preloader";

const Layout = () => {
    // Theme
    const {theme, toggleTheme} = useTheme();
    // Preloader
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, 2000);
    return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
    return <Preloader fadeOut={fadeOut} />
    }

    return (
    <div className={`app ${theme}`}>  
        <Header />
        {/* <button onClick={toggleTheme}>X Theme</button> */}
        <Suspense fallback={<PageLoader />}>
            <Outlet />
        </Suspense>
        <footer></footer>
    </div>
    ) 
} 
export {Layout};