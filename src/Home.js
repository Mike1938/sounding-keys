import React from "react";
import Nav from "./components/Nav";

const Home = ()=>{
    return(
        <div className="homeCont">
            <div className="landingPage">
                <Nav/>
                
                <div className="title">
                    <div className="titleInfo">
                        <h1>Sounding Keys</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione ab aperiam unde ipsum sapiente? Iusto repudiandae temporibus distinctio sapiente ullam !</p>
                    </div>
                    <img src="../images/compose.svg"/>
                </div>
            </div>
            <div className="productInfo">
                <h1>Hello this is product info</h1>
            </div>
        </div>
    )
}

export default Home;