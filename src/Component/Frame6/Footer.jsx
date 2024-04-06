const Footer = () => {
    return(
        <>
        <footer>
            <div className="logoBlock">
                <img src="./img/logo.png" alt="" />
                <p className="LogoBlockP">
                    But i must explain to you all this mistaken
                    idea of dencouncing pleasure.
                </p>
            </div>
            <div className="quickLinks">
                <h4 className="quickLinksH4">Quick Links</h4>
                <p>About Our Company</p>
                <p>Services WE provide</p>
                <p>Career & Opportunity</p>
                <p>Privacy & policy</p>
                <p>Contact US</p>
            </div>
            <div className="company">
                <h4 className="conpanyH4">Company</h4>
                <p>About Company</p>
                <p>Our Testimonials</p>
                <p>Latest News</p>
                <p>Our misson</p>
                <p>Get a free Quot</p>
            </div>
            <div className="contact">
                <h4 className="contactH4">Contact us</h4>
                <p>Sagrada Familia, Herba</p>
                <p>Street Front USA</p>
                <p>brandoxide@gmail.com</p>
                <p>002-568423591</p>
            </div>
            <div className="followUs">
                <h4 className="followUsH4">Follow Us</h4>
                <div className="imgFolllowUs">
                    <img src="./img/brand-facebook.svg" alt="" />
                    <img src="./img/brand-twitter.svg" alt="" />
                    <img src="./img/brand-instagram.svg" alt="" />
                    <img src="./img/brand-linkedin.svg" alt="" />
                </div>
            </div>
        </footer>
        <div className="line2"></div>
            <p className="copyright">Copyright @ 2020 Brandoxide.all right reserved.</p>
        </>
    );
}

export default Footer;