import React from 'react'

//images
import project_pic1 from '../images/ECLIPSE.JPG'

export default function ECLIPSE() {
    return (
        <div className="project_div">
            <div className="project_image_container">
                <img src={project_pic1} alt="" />
            </div>
            <div className="project_description">
                <h3>ECLIPSE</h3>
                <p>Online store offering "ECLIPSE" activewear for men and women. User can search for products, find related products to the one they’re already previewing, add products to their bag, edit their bag, and apply coupon codes to their total.</p>
                <div className="project_buttons">
                    <a href="https://rachidrezzik.github.io/ECLIPSE/" target="_blank">Visit ECLIPSE</a>
                    <a>ECLIPSE Code</a>
                </div>
            </div>
        </div>
    )
}
