const SignUp = () => {
    return(
        <>
        <div className="signUpContainer">
            <h4 className="SignUpH4">DON’T FORGET TO SIGN UP</h4>
            <div className="line"></div>
            <p className="SignUpP">Find out early about all upcoming 
               promotions and new product releases with 
               our newsletter.
            </p>
            <div className="inputBlock">
                <input type="text" placeholder="Enter your email address....." />
                <button className="inputBlockButton">SUBSCRIBE</button>
            </div>
        </div>
        </>
    );
}

export default SignUp;