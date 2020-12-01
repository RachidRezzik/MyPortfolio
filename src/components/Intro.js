import React from 'react'
//IMAGES
import rachid from '../images/profile_pic.jpg'
import laptop from '../images/laptop.png'
//DATA
import resume from '../data/Rachid_Rezzik.pdf'

export default function Intro(props) {
    const handleLinkClick = (element_id) => {
        props.handleScroll(element_id)
    }

    return (
        <div className="home_section">
            <div className="rachid_intro">
                <div className="description">
                    <h1>Rachid Rezzik</h1>
                    <p>I'm a Jr. Frontend Developer Who's Open to New Opportunities Across Texas.</p>
                    <div className="description_buttons">
                        <span onClick={() => handleLinkClick("#About")}>My Story</span>
                        <span onClick={() => handleLinkClick("#Work")}>My Work</span>
                    </div>
    
                </div>
                <div className="profile_pic">
                    <img src={rachid} alt="" />
                </div>
            </div>
            <h2 id="current_skills">Current Skills</h2>
            <div className="rachid_skills">
                    <img className="laptop_man" src={laptop} alt="" />
                <div className="skills_description">
                    <p>HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT JS</p>
                    <a id="download" href={resume} download>Download Resume</a>
                </div>
            </div>
        </div>
    )
}
