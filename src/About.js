import Nav from "./components/Nav";
import InfoBlock from "./components/InfoBlock";
import Footer from "./components/Footer";

const About = ()=>{
    return(
        <div className="aboutCont">
            <Nav/>
            <div className="aboutSec">
                <InfoBlock title="About Us" 
                text="We are a new  company from Puerto Rico that is focusing in developing the best handheld piano device." 
                    imgOne="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgTwo="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgThree="https://images.unsplash.com/photo-1593697821178-c4c24e92d4ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                />
                <InfoBlock title="Mision" text="Introduce a new generation to music through a compact and eye-catching device."
                    imgOne = "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgTwo ="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgThree="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
                />
                <InfoBlock title="Vision" text="To have a product that can please and give the customer a new experience of a portable music product and to be able to raise the customer's creativity to the maximum."
                    imgOne="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgTwo="https://images.unsplash.com/photo-1581090466619-e945d2e2980e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    imgThree="https://images.unsplash.com/photo-1642801454278-c064dd4bfdd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                />
            </div>
            <Footer/>
        </div>
    )
}

export default About