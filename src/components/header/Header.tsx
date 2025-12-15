import Logo from './img/logo.svg';
import './_header.scss';

const Header = () => {
     return (
         <header className="header">
            <div className="header__container">
                <a href="#">
                    <img src={Logo} width="150" height="100" alt="логотип" />
                </a>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <a href="\">О компании</a>
                        </li>

                        <li>
                            <a href="\">Вакансии</a>
                        </li>

                        <li>
                            <a href="\">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
         </header>
     )
}
export {Header};