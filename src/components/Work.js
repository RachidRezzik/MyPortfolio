import React from 'react'
import Slider from './Slider'
//Project Images
import ECLIPSE from '../images/ECLIPSE.JPG'
import soccerRecap from '../images/Soccer_Recap.JPG'
import RiseCoffee from '../images/Rise_Coffee.JPG'
import LETSTRAVEL from '../images/LETSTRAVEL.JPG'
import HIIT from '../images/workout.JPG'

export default function Work() {
    return (
        <div className="work_section">
            <h1>My Work</h1>
            <div className="projects_slider_container">
                <div>
                    <Slider projects={[{title:"ECLIPSE", src: ECLIPSE}, {title:"Rise Coffee", src: RiseCoffee}, {title: "LETSTRAVEL", src: LETSTRAVEL}, {title: "Soccer Recap", src: soccerRecap}, {title: "HIIT Workout", src: HIIT}]}/>
                </div>
            </div>
        </div>
    )
}
