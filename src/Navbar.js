import './Navbar.css';
const Navbar = () => {
    return ( <nav className="Navbar">
       
        <ul className="nav-menu">
            <li> <img src='/catLogo.png' /></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/cats">CATS</a></li>
        </ul>
    </nav> );
}
 
export default Navbar;