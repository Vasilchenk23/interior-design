import "../../style.css"

const WhatWeDo = () => {
    return(
        <>
        <p className="whatWeDoP">WHAT WE DO</p>
        <h2 className="whatWeDoH2">Our Service</h2>
        <div className="containerBlockWhatWeDo">
            <div className="interiorBlock">
                <div className="imgInteriorBlock">
                    <img src="./img/interiorDesing.png" alt="" />
                    <h3>Interior Design</h3>
                </div>
                <p className="interiorBlockP">Lorem ipsum dolor amet consectetur adipiscing
                   elit sed eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <div className="ArchitectureBlock">
                <div className="imgArchitectureBlock">
                    <img src="./img/architecture.png" alt="" />
                    <h3>Architecture</h3>
                </div>
                <p>Lorem ipsum dolor amet consectetur 
                   adipiscing elit sed eiusmod tempor 
                   incididunt ut labore.
                </p>
            </div>
            <div className="PlanningBlock">
                <div className="imgPlanningBlock">
                    <img src="./img/planning.png" alt="" />
                    <h3>Planning</h3>
                </div>
                <p className="PlanningBlockP">Lorem ipsum dolor amet consectetur 
                   adipiscing elit sed eiusmod tempor 
                   incididunt ut labore.</p>
            </div>
        </div>
        </>
    );
}

export default WhatWeDo;