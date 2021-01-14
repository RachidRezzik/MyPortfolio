import React, { useState } from 'react'

//Components
import RRfinance from './RR_Finance'
import RiseCoffee from './RiseCoffee'
import LETSTRAVEL from './LETSTRAVEL'
import ECLIPSE from './ECLIPSE'
import HIIT from './HIIT'

export default function Work() {
    const [project, setProject] = useState("RR_Finance")

    const handleProject = (project_title) => {
        setProject(project_title)
    }
    
    return (        
        <div className="work_section">
            <h1>Projects</h1>
            <div className="projects_container">
                <div className="projects_nav">
                    <button id="RR_Finance" className={project === "RR_Finance" ? "active" : ""} onClick={() => handleProject("RR_Finance")}>RR Finance</button>
                    <button id="ECLIPSE" className={project === "ECLIPSE" ? "active" : ""} onClick={() => handleProject("ECLIPSE")}>ECLIPSE</button>
                    <button id="RiseCoffee" className={project === "RiseCoffee" ? "active" : ""} onClick={() => handleProject("RiseCoffee")}>Rise Coffee</button>
                    <button id="LETSTRAVEL" className={project === "LETSTRAVEL" ? "active" : ""} onClick={() => handleProject("LETSTRAVEL")}>LETSTRAVEL</button>
                    <button id="HIIT" className={project === "HIIT" ? "active" : ""} onClick={() => handleProject("HIIT")}>HIIT</button>
                </div>
                {project === "RR_Finance" ? 
                <RRfinance /> 
                : project === "ECLIPSE" ?
                <ECLIPSE />
                : project === "LETSTRAVEL" ?
                <LETSTRAVEL />
                : project === "RiseCoffee" ?
                <RiseCoffee />
                : 
                <HIIT />
                }    
            </div>
        </div>
    )
}
