import React from 'react'

//images
import project_pic1 from '../images/workout.JPG'

export default function HIIT() {
    return (
        <div className="project_div">
            <div className="project_image_container">
                <img src={project_pic1} alt="" />
            </div>
            <div className="project_description">
                <h3>HIIT</h3>
                <p>High Intensity Interval Timer (“HIIT”) in which the user can set the amount of rounds they’d like along the with the work/rest duration for each round. During the workout, the user can stop the timer, reset the work/rest duration they’re on, move to the previous/next duration, restart the workout, or update the workout preferences for a new workout. </p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/React_HIIT/" target="_blank">Visit HIIT</a>
                    <a href="https://github.com/RachidRezzik/React_HIIT" target="_blank">HIIT Code</a>
                </div>
            </div>
        </div>
    )
}
