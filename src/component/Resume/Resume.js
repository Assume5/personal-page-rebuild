import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import Tools_and_Framework from "./Tools_and_Framework/Tools_and_Freamwork";
import ScrollAnimation from "react-animate-on-scroll";
export default function Resume() {
    let education = {
        "University At Buffalo" : {
            "major" : "Computer Science and Math Minor",
            "timeline" : "06/2017 - 12/2021",
            "course" : {
                1: "Algorithms and Complexity",
                2: "Introduction to Computer Security",
                3: "Blockchain Application Development",
                4: "Systems Programming",
                5: "Data Structure",
                6: "Computer Organization",
                7: "Algorithms for Modern Computing Systems",
            }
        }
    }
    //Level: 
    // beginner
    // basic
    // intermediate 
    // advanced 
    let skills = {
        "Javascript": 'intermediate',
        "Scala": 'basic',
        "C/C++": 'beginner',
        "Python": 'basic',
        "Solidity": 'beginner',
        "ReactJS": 'intermediate',
        "HTML": 'intermediate',
        "CSS/SASS": 'intermediate',
        "Bootstrap": 'intermediate',
        "Jquery": 'intermediate',
        "MySql": 'intermediate',
        "Bottle": 'intermediate',
        "Django": 'beginner',
        "SocketIO": 'beginner'
    }
    return (
        <div className="resume" id="resume">
            <Education education={education}/>
            <div className="split-line">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={1}>
                    <hr/>
                </ScrollAnimation>
            </div>
            <Skill skills={skills}/>
            <div className="split-line">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={1}>
                    <hr/>
                </ScrollAnimation>
            </div>
            <Tools_and_Framework/>
        </div>
    )
}