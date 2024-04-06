const About = () => {
    return(
        <>
        <div className="wrapper">
            <div className="imgBlock">
                <img src="./img/sofa.png" className="imgBlock" alt="" />
            </div>
            <div className="infoBlock">
                <p className="infoBlockP">ABOUT US</p>
                <h2 className="infoBlockH2">Interioris The Will 
                    of An Epoch Mextreo
                </h2>
                 <p className="infoBlockP2">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form injected
                    humour, or randomised words which don't look even slightly
                    believable.If you are going to use a passage of Lorem Ipsum,
                    sure there isn't anything embarrassing hidden the middleof text.
                    All the Lorem Ipsum generators on the Internettend to repeat
                    predefined chunks as necessary,making this the first true
                    generator on the Internet.
                </p>
                <button className="infoBlockButton">LEARN MORE</button>
            </div>
            <div className="infoBlock2">
                <h2 className="infoBlock2H2">20</h2>
                <h3 className="infoBlock2H3">
                    Years Of Successful 
                    Working 
                    The Market
                </h3>
                <button className="infoBlock2Button">READ MORE</button>
            </div>
            <div className="imgBlock2">
                <img src="./img/art-desing.png" className="imgBlock2" alt="" />
            </div>
        </div>
        </>
    );
}

export default About;