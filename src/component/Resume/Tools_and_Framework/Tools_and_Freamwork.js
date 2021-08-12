import ScrollAnimation from "react-animate-on-scroll";
import Django from './imgs/Django.png';
import electron from './imgs/electron.png';
import Electron from './imgs/electron.png';
import Ethereum from './imgs/Ethereum.png';
import expressjs from './imgs/expressjs.jpg';
import Expressjs from './imgs/expressjs.jpg';
import Flask from './imgs/Flask.png';
import ganache from './imgs/ganache.png';
import Ganache from './imgs/ganache.png';
import Git from './imgs/Git.png';
import Infura from './imgs/Infura.png';
import Metamask from './imgs/Metamask.png';
import mongo from './imgs/mongo.jpeg';
import Mongo from './imgs/mongo.jpeg';
import nodejs from './imgs/nodejs.png';
import Nodejs from './imgs/nodejs.png';
import PhaserIO from './imgs/PhaserIO.png';
import PlotlyJS from './imgs/PlotlyJS.jpg';
import truffle from './imgs/truffle.jpg';
import Truffle from './imgs/truffle.jpg';
import Wordpress from './imgs/Wordpress.png';
import Sana from './imgs/Sana.png';

export default function Tools_and_Framework() {
    let Tools_and_Framework = {
        "Django": Django,
        "Electron": Electron, 
        "Ethereum": Ethereum, 
        "Expressjs": Expressjs, 
        "Flask": Flask, 
        "Ganache": Ganache, 
        "Git": Git, 
        "Infura": Infura, 
        "Metamask": Metamask, 
        "Mongo": Mongo, 
        "Nodejs": Nodejs, 
        "PhaserIO": PhaserIO, 
        "PlotlyJS": PlotlyJS, 
        "Truffle": Truffle, 
        "Wordpress": Wordpress, 
        "Sana": Sana
    }
    return (
        <div className="other-tools-framework row justify-content-center">
            <div className="col-12 d-flex justify-content-center header">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={.5}>
                        <h3>Other Tools or Framework</h3>
                </ScrollAnimation>
            </div>
            <div className="row image-container justify-content-around col-12">
                {
                    Object.keys(Tools_and_Framework).map((framework, i) => {
                        return (
                            <div className="d-flex  justify-content-center flex-column align-content-center image">
                                <ScrollAnimation animateIn='animate__flipInX '
                                animateOut='animate__flipOutX' duration={.5}>
                                    <img src={Tools_and_Framework[framework]} alt=""/>  
                                </ScrollAnimation>
                                <p>{framework}</p>
                            </div>
                        )
                    })
                }
            </div>
  
        </div>
    )
}