import React from 'react'

//images
import project_pic1 from '../images/Rise_Coffee.JPG'

export default function RiseCoffee() {
    return (
        <div className="project_div">
            <div className="project_image_container">
                <img src={project_pic1} alt="" />
            </div>
            <div className="project_description">
                <h3>Rise Coffee</h3>
                <p>Website for a fictitious coffee business in which users can learn about the Company’s origin, shop for coffee, or find locations. Users can add/remove/edit their order in their bag. Gained experience in utilizing React Hook Form and local storage for user order data. </p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/RISECOFFEE/" target="_blank">Visit Rise Coffee</a>
                    <a href="https://github.com/RachidRezzik/RISECOFFEE" target="_blank">Rise Coffee Code</a>
                </div>
            </div>
        </div>
    )
}
