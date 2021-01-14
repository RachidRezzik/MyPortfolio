import React, {useState, useEffect, useRef} from 'react'
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

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && event.target.id !== "contact_button" && contactOpen) {
                handleContactOpen()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    },)

    const node = React.useRef()

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
                    <a onClick={() => handleLinkClick("#Work")}>PROJECTS</a>
                </div>
                <div className="hamburger_div">
                    <img src={menuOpen ? x_mark : hamburger} alt="" onClick={handleMenuOpen}/>
                </div>
                <div className="contact_div">
                    <button id="contact_button" onClick={handleContactOpen}>{contactOpen? "Close Info" : "Contact Info"}</button>
                </div>
            </div>
            <div ref={node} className={contactOpen ? "contact_info active" : "contact_info"}>
                <div>
                    <h4>Email: Rachid.Rezzik@hotmail.com</h4>
                    <h4 style={{marginBottom: "20px"}}>Phone: 832-368-0908</h4>
                    <a id="linkedin" href="https://www.linkedin.com/in/rachid-rezzik-62629858/"  target="_blank">Linkedin Profile</a>   
                </div>
            </div>
        </div>
    )
}
