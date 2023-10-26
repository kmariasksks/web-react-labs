function Header() {
    return (
        <header>
            <div className="header">
                <nav className="header__nav">
                    <div className="header__nav-logo">
                        <svg width="70" height="70" viewBox="0 0 122 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M61 61.5416H15.25V107.292H61V61.5416Z" fill="#82BBB5" />
                            <path d="M106.75 15.7916H61V61.5416H106.75V15.7916Z" fill="#7A7A7A" />
                        </svg>
                    </div>
                    <div className="header__nav-pages">
                        <h2><button type="button" className="header__page"><a href="#">Home</a></button></h2>
                        <h2><button type="button" className="header__page"><a href="#">Catalog</a></button></h2>
                        <h2><button type="button" className="header__page"><a href="#">Card</a></button></h2>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;