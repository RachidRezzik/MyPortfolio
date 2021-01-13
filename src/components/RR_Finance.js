import React from 'react'

//images
import project_pic1 from '../images/RR_Finance.JPG'

export default function RR_Finance() {
    return (
        <div className="project_div">
            <div className="project_image_container">
                <img src={project_pic1} alt="" />
            </div>
            <div className="project_description">
                <h3>RR Finance</h3>
                <p>RR Finance is a web application that tracks publicly traded stocks and the news surrounding them. Users can search for a particular stock and get current data such as price, market cap, 52-week high and low, dividend info, and recent news.</p>
                <p>The application also allows users to add/edit/remove their current positions in certain stocks and view the respective gain/return on their investment.</p>
                <p>Axios was utilized to fetch data from IEX Cloud's stock market API. </p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/StocksTracker/" target="_blank">Visit RR Finance</a>
                    <a href="https://github.com/RachidRezzik/StocksTracker" target="_blank">RR Finance Code</a>
                </div>
            </div>
        </div>
    )
}
