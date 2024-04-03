import "../../style.css"

const Header = () => {
    return(
        <>
        <header>
            <div className="logoBlock">
                <img src="./img/logo.png" alt="" />
            </div>
            <div className="headerBlock">
                <p>HOME</p>
                <p>PROJECT</p>
                <p>SERVICES</p>
                <p>ABOUT</p>
                <p>BLOG</p>
                <p>SHOP</p>
                <p>CONTACT</p>
                <button className="headerBlockButton">Sing Up</button>
            </div>
        </header>
        </>
    );
}

export default Header;