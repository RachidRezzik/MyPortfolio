import React, {useEffect, useRef} from 'react'
//Images
import x_mark from '../images/x_mark.png'

export default function ProjectModal(props) {
    const project = props.projects[props.slideIndex]

    const closeModal = () => {
        props.handleModal()
    }

    //If user clicks outside project description container, close modal

    const node = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && props.modalOpen) {
                props.handleModal()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    //Filling in Modal Project info based on which slide user is on

    let project_description_links
    if (project.title == "Rise Coffee"){
        project_description_links = <div>
            <p>
                Website for a fictitious coffee business in which users can learn about the Company’s origin, shop for coffee, or find locations. Users can add/remove/edit their order in their bag. Gained experience in utilizing React Hook Form and local storage for user order data.  
            </p>
            <div className="project_links">
                <a id="project_result" href="https://rachidrezzik.github.io/RISECOFFEE" target="_blank">Shop Rise Coffee</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/RISECOFFEE" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "LETSTRAVEL") {
        project_description_links = <div>
            <p>
                LETSTRAVEL is intended to inspire people to travel through providing some ideas/popular destinations accross the globe. In this project, I gained more experience with React Router and managing a responsive navbar design with React. 
            </p>
            <div className="project_links">
                <a id="project_result" href="https://rachidrezzik.github.io/LETSTRAVEL/" target="_blank">View LETSTRAVEL</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/LETSTRAVEL" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "Soccer Recap") {
        project_description_links = <div>
            <p>
                Utilizing React Router, I developed a 2000 - 2020 Soccer Dashboard to recap major soccer events/statistics over the past twenty years. This project is a Single Page Application (SPA).
            </p>
            <div className="project_links">
                <a id="project_result" href="https://rachidrezzik.github.io/SoccerRecap/" target="_blank">View Soccer Recap</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/SoccerRecap" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "HIIT Workout") {
        project_description_links = <div>
            <p>
                In my first personal project utilizing React, I decided to make something that I am in need of quite often. As an individual who enjoys boxing and calisthenics workouts, a High Intensity Interval Timer ("HIIT") comes in handy.
            </p>
            <p>
                The user can set the amount of rounds they'd like along with the work/rest duration for each round. During the workout, the user can stop the timer, reset the work/rest duration they're on, move to the previous/next duration, restart the workout, or update the workout preferences for a new workout!
            </p>
            <div className="project_links">
                <a id="project_result" href="https://rachidrezzik.github.io/React_HIIT/" target="_blank">Get A Workout In!</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/React_HIIT" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "AbsoluteGooners") {
        project_description_links = <div>
            <p>
                As a lifelong Arsenal supporter, I've come across many Arsenal websites that offer news and a further look into the club. In a project designed to learn/practice Bootstrap, I made my own Arsenal website called Absolute Gooners. 
            </p>
            <p>
                The user can view the latest team news, transfer news, players, coaches, and find links to this season's jerseys. If the user would like to add a comment to a news article, they can create an account or sign in. User can sign in, edit their account information, and logout at will. 
            </p>
            <div className="project_links">
                <a id="project_result" href="https://distracted-payne-9fcddb.netlify.app/html/arsenal_fansite/index.html" target="_blank">Go to AbsoluteGooners</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/FirstJS_Projects/tree/main/AbsoluteGooners" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "Snake Game") {
        project_description_links = <div>
            <p>
                To really practice and get more comfortable with Javascript, I thought I'd challenge myself with creating a game. Creating a game really tests your understanding of programming and was tough, but worthwhile in developing it without looking at a tutorial.  
            </p>
            <p>
                The user can play the game over and over again utilizing just the keyboard. With each play, the user will be presented with the number of Tottenham blocks they ate and the time they lasted. 
            </p>
            <div className="project_links">
                <a id="project_result" href="https://distracted-payne-9fcddb.netlify.app/html/snake/index.html" target="_blank">Play Snake!</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/FirstJS_Projects/tree/main/Snake" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else if (project.title == "THEFIGHTCLUB") {
        project_description_links = <div>
            <p>
                I built a social media site for boxing athletes, coaches, and gym owners. The user will first create one of the three profile types (athlete/coach/gym). Based on the profile type, the user will be asked for more information that can strengthen their profile and form connections to other users. 
            </p>
            <p>
                Once the user has created a profile, they can edit their profile picture, edit their profile information, add a picture post, search for a specific athlete/coach/gym, and browse the all the available profiles on the site.
            </p>
            <div className="project_links">
                <a id="project_result" href="https://distracted-payne-9fcddb.netlify.app/html/fight_club/landing.html" target="_blank">Go to THEFIGHTCLUB</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/FirstJS_Projects/tree/main/THEFIGHTCLUB" target="_blank">View Project Code</a>    
            </div>
        </div>
    } else{
        project_description_links = <div>
            <p>
                God Jam!!! is, of course, a play on words for a fun jam store. Through my first web development project, I got to really practice and get more comfortable with HTML, CSS, and Javascript!  
            </p>
            <p>
                The user is encouraged to shop for jams and/or send a custom jam request! Once the user has added jams to the cart, they can edit/remove their orders in the cart. 
            </p>
            <div className="project_links">
                <a id="project_result" href="https://distracted-payne-9fcddb.netlify.app/html/god_jam/landing.html" target="_blank">Go to God Jam!!!</a>    
                <a id="project_code" href="https://github.com/RachidRezzik/FirstJS_Projects/tree/main/GodJam" target="_blank">View Project Code</a>    
            </div>
        </div>
    }
    return (
        <div className={props.modalOpen ? "project_modal active" : "project_modal"}>
            <div ref={node} className="project_container">
                <h3>{project.title}</h3>  
                {project_description_links}
            </div>
            <img className={props.modalOpen ? "exit_modal active" : "exit_modal"} src={x_mark} onClick={closeModal} alt=""/>
        </div>
    )
}
