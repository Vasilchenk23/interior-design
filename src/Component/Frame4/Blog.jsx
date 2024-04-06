const Blog = () => {
    return(
        <>
        <p className="BlogP">LETEST NEWS</p>
        <h3 className="BlogH3">From Our Blog</h3>
        <div className="containerBlog">
            <div className="block1">
                <img src="./img/blogImg.png" alt="" />
                <h4 className="block1H4">2020 Interior Design Trends</h4>
                <p className="block1P">Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod
                   incididunt ut labore et dolore 
                   magna aliqua.
                </p>
                <button className="block1Button">CONTINUE READING....</button>
            </div>
            <div className="block2">
            <img src="./img/blogImg2.png" alt="" />
                <h4  className="block2H4">28 Notable Product at ARC Interior Design</h4>
                <p className="block2P">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="block2Button">CONTINUE READING....</button>
            </div>
        </div>
        </>
    );
}

export default Blog;