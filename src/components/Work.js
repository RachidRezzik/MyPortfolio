import React from 'react'
import Slider from './Slider'
//Project Images
import soccerRecap from '../images/Soccer_Recap.JPG'
import RiseCoffee from '../images/Rise_Coffee.JPG'
import LETSTRAVEL from '../images/LETSTRAVEL.JPG'
import HIIT from '../images/workout.JPG'
import AbsoluteGooners from '../images/absolute_gooners.JPG'
import Snake from '../images/snake.JPG'
import FightClub from '../images/fight_club.JPG'
import GodJam from '../images/god_jam.JPG'

export default function Work() {
    return (
        <div className="work_section">
            <h1>My Work</h1>
            <h4><i>React JS Projects (Latest Work)</i></h4>
            <Slider projectImages={[{title:"Rise Coffee", src: RiseCoffee}, {title: "LETSTRAVEL", src: LETSTRAVEL}, {title: "Soccer Recap", src: soccerRecap}, {title: "HIIT Workout", src: HIIT}]}/>
            <h4><i>Vanilla JavaScript Projects (First Work)</i></h4>
            <Slider projectImages={[{title:"AbsoluteGooners", src: AbsoluteGooners}, {title: "Snake Game", src: Snake}, {title: "THEFIGHTCLUB", src: FightClub}, {title: "GodJam", src: GodJam}]}/>
        </div>
    )
}
