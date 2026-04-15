import Logo from './img/logo.svg';
import './_header.scss';

import { NavLink } from 'react-router';

const Header = () => {
     return (
         <header className="header">
            <div className="header__container">
                <a className='header__logo' href="#">
                    <img src={Logo} width="150" height="100" alt="логотип" />
                </a>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <NavLink to="/">О компании</NavLink>
                        </li>

                        <li>
                            <NavLink to="/HomePage">HomePage</NavLink>
                        </li>

                        <li>
                            <NavLink to="/VacancyPage">VacancyPage</NavLink>
                        </li>

                        <li>
                            <NavLink to="/heroSection213123213">NotFoundPage</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
         </header>
     )
}
export {Header};