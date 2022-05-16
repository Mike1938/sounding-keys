import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {FaInstagram} from "react-icons/fa"

const Contact = ()=>{
    return(
        <div className="contactCont">
            <Nav/>
            <div className="formCont">
                <form className="contactForm">
                    <h2 className="formTitle">Contact Form</h2>
                    <label for="name">Name</label>
                    <input id="name" type="text"/>
                    <label for="email">Email</label>
                    <input id="email" type="email"/>
                    <label for="subject">Subject</label>
                    <input id="subject" type="text"/>
                    <label id="text">Message</label>
                    <textarea id="text" rows="5"></textarea>
                    <button>Send</button>
                </form>
                
            </div>
            <div className="contactInfo">
                <h2 className="formTitle">Contact Info</h2>
                <p className="labelStyles">Phone Number</p>
                <p className="infoText">1-800-3849</p>
                <p className="labelStyles">Email</p>
                <p className="infoText">soundingKeys@gmail.com</p>
                <h2 className="formTitle">Socials</h2>
                <p className="labelStyles">instagram</p>
                <a className="social" href="https://www.instagram.com/sounding_keys/"><FaInstagram size="50"/></a>
            </div>
            <Footer/>
        </div>
    )   
}

export default Contact;

