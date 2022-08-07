import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import ToolsAndFramework from "./Tools_and_Framework/ToolsAndFreamwork";
import ScrollAnimation from "react-animate-on-scroll";
import language from './imgs/code.svg'
import frontend from './imgs/arrow.svg'
import backend from './imgs/server.svg'
import db from './imgs/database.svg'
import mobile from './imgs/mobile.svg'
import blockchain from './imgs/bitcoin.svg'

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
        "Programming Language": {
            "TypeScript": 'intermediate',
            "Javascript": 'intermediate',
            "Scala": 'basic',
            "C/C++": 'basic',
            "Python": 'basic',
            "img": language

        },
        "Frontend": {
            "ReactJS": 'intermediate',
            "HTML": 'intermediate',
            "CSS/SASS": 'intermediate',
            "Bootstrap": 'intermediate',
            "Jquery": 'intermediate',
            "Sana Commerce": "intermediate",
            "WordPress": "basic",
            "img": frontend

        },
        "Backend": {
            "Expressjs": 'intermediate',
            "Bottle": 'intermediate',
            "Prisma": "basic",
            "Flask": "basic",
            "Django": 'beginner',
            "SocketIO": 'beginner',            
            "img": backend
        },
        "Databases": {
            "MySql": 'intermediate',
            "Mongo": "beginner",
            "PostgreSQL": "beginner",
            "img": db
        },
        "Mobile": {
            "React Native": 'basic',
            "Android Studio": "beginner",
            "Expo": "beginner",
            "img": mobile
        },
        "Blockchain": {
            "Solidity": 'beginner',
            "Truffle": 'beginner',
            "Ganache": 'beginner',
            "img": blockchain
        }

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
            <Skill skills={skills} />
            <div className="split-line">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={1}>
                    <hr/>
                </ScrollAnimation>
            </div>
            <ToolsAndFramework/>
        </div>
    )
}