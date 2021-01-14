import React from 'react'

export default function Intro(props) {
    const handleLinkClick = (element_id) => {
        props.handleScroll(element_id)
    }

    return (
        <div className="home_section">
            <div className="rachid_intro">
                <h1>Rachid Rezzik</h1>
                <p>I'm a self-taught junior frontend developer who loves creating useful websites and apps. My current skillset utilizes React JS, JS, CSS, and HTML. Start scrolling to learn more about me. </p>
                <div className="intro_links">
                    <a onClick={() => handleLinkClick("#Work")}>Projects</a>
                    <a href="https://github.com/RachidRezzik">Github</a>
                    <a href="https://github.com/RachidRezzik">Linkedin</a>
                </div>

            </div>
        </div>
    )
}
