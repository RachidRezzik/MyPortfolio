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
                <p>RR Finance is a web application that tracks publicly traded stocks and the news surrounding them. Each stock, whether in the "Featured Stocks" section or searched by the user, contains the options to view its quote details or be added to the user's current positions.
                </p>
                <p>
                The stock's quote details will allow the user to view its current price, market cap, 52-week high and low, dividend info, and news. Adding a position in the stock will require the number of shares the user owns and the average price those shares were purchased for.
                </p>
                <p>The inputted positions will be added to the "Your Positions" section where the user can then edit or remove positions while also being able to view the current gain/return on each investment. Axios is utilized to fetch data from IEX Cloud's stock market API.</p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/StocksTracker/" target="_blank">Visit RR Finance</a>
                    <a href="https://github.com/RachidRezzik/StocksTracker" target="_blank">RR Finance Code</a>
                </div>
            </div>
        </div>
    )
}
