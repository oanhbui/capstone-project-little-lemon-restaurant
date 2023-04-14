import Logo from './icons_assets/Logo.svg';

function Nav() {
    return (
        <nav>
            <div className='container'>
                <img className='logo' src={Logo} alt="Logo of restaurant" />
                <ul className='navbar'>
                    <li className='home'><a href="/">home</a></li>
                    <li className='about'><a href="/">about</a></li>
                    <li className='menu'><a href="/">menu</a></li>
                    <li className='reservations'><a href="/">reservations</a></li>
                    <li className='order-online'><a href="/">order online</a></li>
                    <li className='login'><a href="/">login</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;