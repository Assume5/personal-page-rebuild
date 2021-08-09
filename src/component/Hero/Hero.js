import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
            <div className="hero" id="hero">
                <div className="d-flex justify-content-center hero-nav">
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#project">Project</a>
                </div>
                <div className="scroll">
                    <a href="#about"><h3><FontAwesomeIcon icon={faArrowCircleDown}/>Scroll Down</h3></a>
                </div>
            </div>
    )
}