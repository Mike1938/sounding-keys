import Footer from "./components/Footer";
import Nav from "./components/Nav";

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
            <div>
                <h2>Contact Info</h2>
            </div>
            <Footer/>
        </div>
    )   
}

export default Contact;

