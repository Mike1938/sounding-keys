import { Link } from "react-router-dom"

const Footer = ()=>{
    return(
        <footer className="footerCont">
            <p className="footTitle">Sounding Keys</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr></hr>
            <p className="copy">Malsan Inc. &copy; 2022 </p>
        </footer>
    )
}

export default Footer