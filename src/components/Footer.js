import React from 'react'
//IMAGES
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

export default function Footer() {
    return (
        <div className="footer_div">
            <div className="footer_contact">
                <h2 id="email">Email: </h2>
                <h2>Rachid.Rezzik@hotmail.com</h2>
                <h2 style={{marginTop: "10px"}}>Phone:</h2>
                <h2>832-368-0908</h2>
            </div>
            <div className="social_media">
                <a href="https://github.com/RachidRezzik">
                    <img className="github" src={github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/rachid-rezzik-62629858/">
                    <img className="linkedin" src={linkedin} alt="" />
                </a>
            </div>
        </div>
    )
}
