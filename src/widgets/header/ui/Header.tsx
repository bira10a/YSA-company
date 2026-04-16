import Logo from './img/logo.svg';

import { NavLink } from 'react-router';
import { useState } from 'react';

const Header = () => {
    const [burger, setBurger] = useState(false);

    const BurgerActive = () => {
        setBurger(burger => !burger);
        
    }

     return (
         <header className="header">
            <div className="header__container">
                <NavLink className="header__logo header__link" to="/">
                    <img src={Logo} width="150" height="100" alt="логотип" />
                </NavLink>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <NavLink className="header__link" to="/">О компании</NavLink>
                        </li>

                        <li>
                            <NavLink className="header__link" to="/HomePage">HomePage</NavLink>
                        </li>

                        <li>
                            <NavLink className="header__link" to="/VacancyPage">VacancyPage</NavLink>
                        </li>

                        <li>
                            <NavLink className="header__link" to="/heroSection213123213">NotFoundPage</NavLink>
                        </li>
                    </ul>
                </nav>

                 <button className={`header__burger burger ${burger ? "burger--active" : ""}`} type="button" onClick={BurgerActive}>
                     <span className="burger__line"></span>
                     <span className="sr-only">Открыть меню</span>
                 </button>
            </div>
         </header>
     )
}
export {Header};