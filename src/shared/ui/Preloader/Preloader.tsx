import "./Preloader.scss";
import { PageLoader } from "../PageLoader/PageLoader";
import Logo from "./logo.svg";

interface PreloaderProps {
    fadeOut: boolean
}

const Preloader = ({fadeOut}: PreloaderProps) => {
    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader__info">
                <img width="225" height="150" alt="логотип" src={Logo} />
                <div className="preloader__title">ООО «Югспецавтоматика»</div>
                <div>Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса</div>
            </div>

            <div className="preloader__spinner">
                <PageLoader />
            </div>
            <p className="preloader__text">Загрузка...</p>
        </div>
    ) 
} 
export {Preloader};