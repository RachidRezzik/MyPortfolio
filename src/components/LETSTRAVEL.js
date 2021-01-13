import React from 'react'

//images
import project_pic1 from '../images/LETSTRAVEL.JPG'

export default function LETSTRAVEL() {
    return (
        <div className="project_div">
            <div className="project_image_container">
                <img src={project_pic1} alt="" />
            </div>
            <div className="project_description">
                <h3>LETSTRAVEL</h3>
                <p>Website intended to inspire people to travel through providing some ideas/popular destinations across the globe. In this project, I gained more experience with React Router and managing a responsive navbar design with React. </p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/LETSTRAVEL/" target="_blank">Visit LETSTRAVEL</a>
                    <a href="https://github.com/RachidRezzik/LETSTRAVEL" target="_blank">LETSTRAVEL Code</a>
                </div>
            </div>
        </div>
    )
}