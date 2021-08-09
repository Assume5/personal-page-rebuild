import ScrollAnimation from "react-animate-on-scroll"
import Modal from './Modal/Modal'
import detection from './imgs/face.svg'
import calculator from './imgs/Calculator.svg'
import delivery_app from './imgs/online_groceries.svg'
import blockchain from './imgs/P2P.svg'
import statistic from './imgs/statistic.svg'
import ecommerce from './imgs/web_shopping.svg'
import game from './imgs/game.svg'
import chatting from './imgs/chat.svg'
import React from "react"

export default class Project extends React.Component{
    constructor() {
        super()
        this.state = {
            projects : {
                "WEAR0": {
                    type: ecommerce,
                    type_text: "Ecommerce App", 
                    desc: "Web-based application, using MySQL as DB and Express.js as server.",
                    detail: "Currently developing front-end. For more details, or how to use please visit the link below.",
                    link: "https://github.com/Assume5/WEAR0",
                    demo: ""
                },
                "P!CK0": {
                    type: delivery_app,
                    type_text: "Food Delivery App", 
                    desc: "Web-based application, using MySQL as DB and Bottle as server, and Electron.JS.",
                    detail: "P!CK0 is an online food ordering/delivering app, allowing customers and drivers to freely choose their orders based on possible order choices. Without very low tipped order being sent to the driver. For more details, or how to use please visit the link below. For demo explanation are located in the caption, make sure you have caption on",
                    link: "https://github.com/Assume5/P1CK0",
                    demo: "https://www.youtube.com/watch?v=1aV7SXdvaf0&feature=youtu.be"
                },
                "CHAT0": {
                    type: chatting,
                    type_text: "Live interaction chatting App", 
                    desc: "Web-based application, using MySQL as DB and Flask as server, Falsk socketio, and Docker Compose",
                    detail: "This is app is similar to Facebook, that friends could send text or image between each other with a notification when received new text or image.",
                    link: "",
                    demo: ""
                },
                "ExpLocker-Dapp": {
                    type: blockchain,
                    type_text: "Blockchain Application", 
                    desc: "Web-based application. Using Metamask, Infura.io, Ganache, truffle,Ethereum and ExpressJS as server, and Solidity.",
                    detail: "The ExpLocker App will allow people to request carrier to deliver the package into the access point when people unable to receive their package when the package is out for delivery. For more details, or how to use please visit the link below. For Demo Most of the time I am waiting for response from infura contract interaction. Please skip it. ",
                    link: "https://github.com/Assume5/ExpLocker-Dapp",
                    demo: "https://www.youtube.com/watch?v=X3DxCCE3IA0"
                },
                "Square-Fighter": {
                    type: game,
                    type_text: "Game application", 
                    desc: "Web-based application. Using, Socket.io, Phaser 3, Electron, ExpressJS and Mocha Testing.",
                    detail: "This project was to used the Socket.io server to build a real-time MMO game. Users will need to collect the square on the ground and will receive scores for their team.            ",
                    link: "https://github.com/Assume5/Square-Fighter/tree/master/Square%20Fighter%20Demo3",
                    demo: "https://www.youtube.com/watch?v=8bhsyZ60ztY&feature=youtu.be"
                },
                "Face-Detection": {
                    type: detection,
                    type_text: "Food Delivery App", 
                    desc: "Web-based application. Using React.js Express.js, PostgreSQL.",
                    detail: "Using react.js as front-end, express.js as backend, and PostgreSQL as database. By using Clarifai API when users input an image link, it will have a bounding box located in the image, the bounding box location will be the person's face.",
                    link: "",
                    demo: ""
                },
                "Covid-19-Outbreak US": {
                    type: statistic,
                    type_text: "Statistics Application", 
                    desc: "Web-based application, using Bottle as server",
                    detail: "Will update real-time statistics about COVID19. It will only show States of US daily increase of positive cases and death cases.",
                    link: "https://github.com/Assume5/Covid-19-United-State",
                    demo: ""
                },
                "COVID-19-Outbreak": {
                    type: statistic,
                    type_text: "Statistics Application", 
                    desc: "Web-based application, using Bottle as server",
                    detail: "This is a project that will update real-time statistics about COVID-19. It will only show countries that have confirmed cases that are greater than 10000",
                    link: "https://github.com/Assume5/COVID-19-Outbreak",
                    demo: ""
                },
                "Grade-Calculator": {
                    type: calculator,
                    type_text: "Calculator Application", 
                    desc: "Web-based application, using bootstrap",
                    detail: "P!CK0 is an online food ordering/delivering app, allowing customers and drivers to freely choose their orders based on possible order choices. Without very low tipped order being sent to the driver. For more details, or how to use please visit the link below. For demo explanation are located in the caption, make sure you have caption on",
                    link: "https://assume5.github.io/Grade-Calculator/",
                    demo: ""
                }
            },
            show: false,
            modalDetail:{},
            current_project: ""
        }
    }

    showModal = (project) => {
        let projectDetail = this.state.projects[project]
        this.setState({modalDetail:projectDetail})
        this.setState({show:true})
        this.setState({current_project:project})

    }

    closeModal = () => {
        this.setState({modalDetail:{}})
        this.setState({show:false})
        this.setState({current_project:""})
    }

    render() {
        return (
            <div className="project row justify-content-center" id="project">
                 <div className="col-12 d-flex justify-content-center header">
                    <ScrollAnimation animateIn='animate__fadeIn '
                    animateOut='animate__fadeOut' duration={.5}>
                            <h3>My Project</h3>
                    </ScrollAnimation>
                </div>
                <div className="container col-12 row">
                    {
                        Object.keys(this.state.projects).map((project,i) => {
                            let dict = this.state.projects[project]
                            return (
                                <div className="d-flex project-desc flex-column justify-content-end align-item-center" key={project} onClick = {() => this.showModal(project)}>
                                    <ScrollAnimation animateIn='animate__flipInX '
                                    animateOut='animate__flipOutX' duration={.5}>
                                        <div className="d-flex col-12 justify-content-center">
                                            <img src={dict['type']} alt=""/> 
                                        </div>
                                                                    
                                        <div>
                                            <p>{project}</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    <Modal 
                    closeModal={this.closeModal} 
                    modalDetail = {this.state.modalDetail} 
                    show={this.state.show} 
                    img = {this.state.modalDetail.type}
                    current_project = {this.state.current_project}
                    />
                }
            </div>
        )
    }
    
}