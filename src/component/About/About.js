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
                <ScrollAnimation animateIn='animate__fadeInDown img-avatar'
                animateOut='animate__fadeOutUp' duration={1.5}>
                    <img src = {avatar} alt=""/>
                </ScrollAnimation>
                <div className="social d-flex justify-content-center col-12">
                    <ScrollAnimation animateIn='animate__animated animate__fadeIn email'
                    animateOut='animate__fadeOut' duration={1.5}>
                        <a href="mailto:zchenyi1@gmail.com" title="Send me an email"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='animate__animated animate__fadeIn github'
                    animateOut='animate__fadeOut' duration={1.5}>
                        <a href="https://github.com/Assume5" title="Github"><FontAwesomeIcon icon={faGithub}/></a>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='animate__animated animate__fadeIn linkedin'
                    animateOut='animate__fadeOut' duration={1.5}>
                        <a href="https://www.linkedin.com/in/chenyi-zou-7b9574197/" title="Linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="desc col-sm-5 col-12">
                <ScrollAnimation animateIn='animate__animated animate__fadeInDown name'
                animateOut='animate__fadeOutUp' duration={1}>
                    <h3>Hi, I am Chenyi Zou</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__fadeInDown position'
                animateOut='animate__fadeOutUp' duration={1}>
                    <h4>I am a Web Developer</h4>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__fadeInDown text'
                animateOut='animate__fadeOutUp' duration={1}>
                    <p>
                        I am a student attending University at Buffalo, majoring in Computer Science, and Math as minor. My passion for programming started at a very young age. I've developed multiple websites and applications during my free time. I am a huge fan of web development! And dogs!
                    </p>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation animateIn='animate__animated animate__fadeInDown button'
                animateOut='animate__fadeOutUp' duration={1}>
                    <div className="cv-button">
                        <a className="cv-download" href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileDownload}/> DOWNLOAD CV</a>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}