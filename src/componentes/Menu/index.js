import './Menu.modules.css';
import MenuLink from '../MenuLink';

export default function Menu() {
    
    return (
        <nav className='navegacao'>
            <MenuLink to="/">
                Inicio
            </MenuLink>
            <MenuLink to="/aboutMe">
                Sobre Mim
            </MenuLink>
        </nav>
    );
}
