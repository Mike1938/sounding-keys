import React from "react";
import Nav from "./components/Nav";

const Home = ()=>{
    return(
        <div className="landingPage">
            <div className="navCont">
                <Nav/>
            </div>
            <div className="title">
                <img src="../images/compose.svg"/>
                <div className="titleInfo">
                    <h1>Sounding Keys</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ratione ab aperiam unde ipsum sapiente? Iusto repudiandae temporibus distinctio sapiente ullam !</p>
                </div>
                
            </div>
        </div>
    )
}

export default Home;