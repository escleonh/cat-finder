import './Navbar.css';
const Navbar = () => {

    const handleSlidebar = ()=>{
        console.log("CLIKE");
        const slidebar = document.querySelector('.slidebar');
        slidebar.classList.toggle('slidebarShow');
        document.getElementsByTagName('body')[0].classList.toggle('menu-open');
        // slidebar.style.transform = "translateX(-100%)";
    };

    return ( <nav className="Navbar">
       
        <ul className="nav-menu">
            <li><a href="/"><img src='/catLogo.png' /></a></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/cats">CATSS</a></li>
        </ul>
        <div className="menu-Burger" onClick={()=>handleSlidebar()}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="slidebar">
        <ul className="slidebar-menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/cats">CATS</a></li>
        </ul>
        </div>
       
    </nav> );
}
 
export default Navbar;