import Logo from './icons_assets/Logo.svg';

function Nav() {
    return (
        <nav>
            <img src={Logo} alt="Logo of restaurant" />
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">menu</a></li>
                <li><a href="/">reservations</a></li>
                <li><a href="/">order online</a></li>
                <li><a href="/">login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;