import Logo from './img/logo.svg';
import './_header.scss';

const Header = () => {
     return (
         <header className="header">
            <div className="header__container">
                <h2>Heloooo WWWwwwwworrlld</h2>
                <a href="#">
                    <img src={Logo} width="150" height="100" alt="логотип" />
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