import './Header.css'
function Header() {
    return (
        <header>
            <div className="header__container">
                <div className="header__nav">
                    <nav className="header__nav__navbar">
                        <div className="header__nav__main">
                            <a href="/" id="pageload">ljh1901</a>
                        </div>
                        <div className="header__nav__option">
                            <a href="#">Home</a>
                            <a href="#about-me">About Me</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#">Contact</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;