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
                imgOne="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                imgTwo="https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
                imgThree="https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                />
            </div>
            <div className="reveal">
                <InfoBlock
                    title="Closer and Closer to the reveal date"
                    imgOne="../images/Post1.png"
                    imgTwo="../images/Post2.png"
                    imgThree="../images/sketchDesign.png"
                />
            </div>
            <div className="newsLetter">
                <form>
                    <p className="formTitle">Signup for newsLetter</p>
                    <label className="labelStyles" for="signEmail">Email</label>
                    <input id="signEmail" type="email"/>
                    <button>Signup</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
// Bringing portabality and music together

export default Home;