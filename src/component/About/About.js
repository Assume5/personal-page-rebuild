import ScrollAnimation from "react-animate-on-scroll"
import avatar from './img/Chenyi.png'
import resume from './Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function About() {
    return (
        <div className="about" id="about">
                <div className="avatar col-sm-3 col-12">
                    <ScrollAnimation animateIn='animate__fadeInLeft'
                    animateOut='animate__fadeOutLeft' duration={1.5}>
                        <img src = {avatar} alt=""/>
                        <div className="social d-flex justify-content-center col-12">
                            <a href="mailto:zchenyi1@gmail.com" title="Send me an email"><FontAwesomeIcon icon={faEnvelope}/></a>
                            <a href="https://github.com/Assume5" title="Github"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://www.linkedin.com/in/chenyi-zou-7b9574197/" title="Linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>
                    </ScrollAnimation>
                </div>

            <div className="desc col-sm-5 col-12">
                <ScrollAnimation animateIn='animate__fadeInRight'
                animateOut='animate__fadeOutRight' duration={1.5}>
                    <h3>About Me</h3>
                    <p>
                        Hello! My name is Chenyi Zou. I am a student attending University at Buffalo, majoring in Computer Science, and Math as minor. My passion for programming started at a very young age. I've developed multiple websites and applications during my free time. I am a huge fan of web development! And dogs!
                    </p>
                    <br/>
                    <div className="cv-button">
                        <a className="cv-download" href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileDownload}/> DOWNLOAD CV</a>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}