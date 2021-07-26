// import './Header.scss'; 
import logo from '../../static/memo_logo.png';
import { MenuUl, MenuItem, Menu, MenuLogo } from './Header.styles';

const Header = ({ setReset, setIntentos, reset, setNewGame }) => {


    const resetGame = function () {
        setReset(!reset);
        setIntentos(0);
    }

    return (
        <header>
            <Menu>
                <MenuLogo src={logo}></MenuLogo>
                <MenuUl>
                    <MenuItem onClick={resetGame}>Reset Positions</MenuItem>
                    <MenuItem onClick={() => setNewGame(true)}>New Game</MenuItem>
                    <MenuItem>Change Player</MenuItem>
                </MenuUl>
            </Menu>
        </header >
    )
}
export default Header;

