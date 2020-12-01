import React, {useState} from 'react'
//Component
import useWindowSize from './useWindowSize'
//Images
import hamburger from '../images/hamburger.png'
import x_mark from '../images/x_mark.png'
import rachid_logo from '../images/rachid_logo.jpg'


export default function Nav(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(useWindowSize() <= 650 ? true : false)
    
    const handleResize = (width, isMobile) =>{
        if (width > 750 && isMobile == true){
            setIsMobile(false)
            setMenuOpen(false)
        } else if (width <=750 && isMobile == false){
            setIsMobile(true)
            setMenuOpen(false)
        }
    }

    handleResize(useWindowSize(), isMobile)





    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        setContactOpen(false)
    }

    const handleContactOpen = () => {
        setContactOpen(!contactOpen)
        setMenuOpen(false)
    }


    const handleLinkClick = (element_id) => {
        props.handleScroll(element_id)
        setMenuOpen(false)
        setContactOpen(false)
    }

    return (
        <div>
            <div className="navbar">
                <div className="logo_div">
                    <a onClick={() => handleLinkClick("#Home")}>
                        <img src={rachid_logo} alt="" />
                    </a>
                </div>
                <div className={menuOpen? "menu_div active" : "menu_div"}>
                    <a onClick={() => handleLinkClick("#Home")}>INTRO</a>
                    <a onClick={() => handleLinkClick("#About")}>ABOUT</a>
                    <a onClick={() => handleLinkClick("#Work")}>MY WORK</a>
                </div>
                <div className="hamburger_div">
                    <img src={menuOpen ? x_mark : hamburger} alt="" onClick={handleMenuOpen}/>
                </div>
                <div className="contact_div">
                    <button onClick={handleContactOpen}>{contactOpen? "Close Info" : "Contact Info"}</button>
                </div>
            </div>
            <div className={contactOpen ? "contact_info active" : "contact_info"}>
                <div>
                    <h2>Please Feel Free to Contact Me Through Any of the Following Channels</h2>
                    <h4 style={{marginTop: "30px"}}>Email:</h4>
                    <h4>Rachid.Rezzik@hotmail.com</h4>
                    <h4 style={{marginTop: "30px"}}>Phone:</h4>
                    <h4>832-368-0908</h4>
                    <h4 style={{marginTop: "30px", marginBottom:"10px"}}>Linkedin:</h4>
                    <a href="https://www.linkedin.com/in/rachid-rezzik-62629858/" >My Profile</a>   
                </div>
            </div>
        </div>
    )
}
