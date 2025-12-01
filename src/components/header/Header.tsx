import Logo from './img/logo.svg';
import './_header.scss';

const Header = () => {
     return (
         <header className="header">
            <div className="header__container">
                <a href="#">
                    <img src={Logo} width="200" height="150" alt="логотип" />
                </a>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <a href="\">О нас</a>
                        </li>

                        <li>
                            <a href="\">О Вас</a>
                        </li>

                        <li>
                            <a href="\">За северный кавказ</a>
                        </li>
                    </ul>
                </nav>
            </div>
         </header>
     )
}
export {Header};