import React, {useState} from 'react'
//Component
import ProjectModal from '../components/ProjectModal'

export default function Slider(props) {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const sliderArray = props.projects
    const [slideIndex, setSlideIndex] = useState(0)
    const slideTitle = sliderArray[slideIndex].title

    const [X, setX] = useState(0)
    const goLeft = () =>{
        if (X === 0){
            setX(-(100 * (sliderArray.length - 1)))
        } else{
            setX(X+100)
        }
        if (slideIndex == 0){
            setSlideIndex(sliderArray.length - 1)
        } else{
            setSlideIndex(slideIndex - 1)
        }
    }

    const goRight = () =>{
        if (X === -(100 * (sliderArray.length - 1))){
            setX(0)
        } else{
            setX(X-100)
        }
        if (slideIndex == (sliderArray.length - 1)){
            setSlideIndex(0)
        } else{
            setSlideIndex(slideIndex + 1)
        }
    }

    return (
        <div>
            <h4 className="project_title">{slideTitle} (Project {slideIndex + 1}/{sliderArray.length})</h4>
            <div className="slider">
                <div className="slide_container">
                    {
                        sliderArray.map((item, index) => {
                            return(
                                <div key={index}className="slide" style={{transform:`translateX(${X}%`}}>
                                    <img src={item.src} style={styleSliderImg} alt="slider_image" className="slider_img" />
                                </div>
                            ) 
                        })    
                    }
                </div>
                <button id="goLeft" onClick={goLeft}>➤</button>
                <button id="goRight" onClick={goRight}>➤</button>
            </div>
            <button id="see_more" onClick={handleModal}>See Description/Site/Code</button>
            {/* Modal Project Description */}
            <ProjectModal 
            projects={props.projects}
            slideIndex={slideIndex}
            modalOpen={modalOpen}
            handleModal={handleModal}
            />
        </div>
    )
}



const styleSliderImg = {
    width: "100%",
    height: "100%"
}
