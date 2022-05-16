import React from "react";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";
const Home = ()=>{
    return(
        <div className="homeCont">
            <div className="landingPage">
                <Nav/>
                
                <div className="title">
                    <div className="titleInfo">
                        <h1>Sounding Keys</h1>
                        <p className="slogan">Making your love for music portable</p>
                        <Link to="/about"><button className="learnButton">Learn More</button></Link>        
                    </div>
                    <img src="../images/compose.svg"/>
                </div>
            </div>
            <div className="productInfo">
                <InfoBlock
                title="Bringing portability and music together"
                imgONe=""
                />
            </div>
            <Footer/>
        </div>
    )
}
// Bringing portabality and music together

export default Home;