import Navbar from "./Navbar";

const Header = () =>{
    return(
        <header>
            <div className="nav-area">
                <a href="/#" className="logo">Frontend Paathshala</a>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;