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
        <div className="containerModalInterior">
            <div className="infoModalInterior">
                <p className="infoModalInteriorP">MODERN INTERIOR</p>
                <h1 className="infoModalInteriorH1">Create Your Interior Design.</h1>
                <p className="infoModalInteriorP2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation.
                </p>
                <button className="infoModalInteriorButton">CONTACT</button>
            </div>
            <div className="imgModalInterior">
                <img src="./img/interior.png" className="imgModalInterior" alt="" />
            </div>
        </div>
        </>
    );
}

export default Header;