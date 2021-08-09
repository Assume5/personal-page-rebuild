import ScrollAnimation from "react-animate-on-scroll";
import Django from './imgs/Django.png';
import electron from './imgs/electron.png';
import Ethereum from './imgs/Ethereum.png';
import expressjs from './imgs/expressjs.jpg';
import Flask from './imgs/Flask.png';
import ganache from './imgs/ganache.png';
import Git from './imgs/Git.png';
import Infura from './imgs/Infura.png';
import Metamask from './imgs/Metamask.png';
import mongo from './imgs/mongo.jpeg';
import nodejs from './imgs/nodejs.png';
import PhaserIO from './imgs/PhaserIO.png';
import PlotlyJS from './imgs/PlotlyJS.jpg';
import truffle from './imgs/truffle.jpg';
import Wordpress from './imgs/Wordpress.png';
import Sana from './imgs/Sana.png';

export default function Tools_and_Framework() {
    return (
        <div className="other-tools-framework row justify-content-center">
            <div className="col-12 d-flex justify-content-center header">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={.5}>
                        <h3>Other Tools or Framework</h3>
                </ScrollAnimation>
            </div>
            <div className="row image-container justify-content-around col-12">
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Django} alt=""/>  
                    </ScrollAnimation>
                    <p>Django</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={electron} alt=""/>  
                    </ScrollAnimation>
                    <p>Electron</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Ethereum} alt=""/>  
                    </ScrollAnimation>
                    <p>Ethereum</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={expressjs} alt=""/>  
                    </ScrollAnimation>
                    <p>Express.js</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Flask} alt=""/>  
                    </ScrollAnimation>
                    <p>Flask</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={ganache} alt=""/>  
                    </ScrollAnimation>
                    <p>Ganache</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Git} alt=""/>  
                    </ScrollAnimation>
                    <p>Git</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Infura} alt=""/>  
                    </ScrollAnimation>
                    <p>Infura</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Metamask} alt=""/>  
                    </ScrollAnimation>
                    <p>Metamask</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={mongo} alt=""/>  
                    </ScrollAnimation>
                    <p>Mongo</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={nodejs} alt=""/>  
                    </ScrollAnimation>
                    <p>Nodejs</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={PhaserIO} alt=""/>  
                    </ScrollAnimation>
                    <p>PhaserIO</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={PlotlyJS} alt=""/>  
                    </ScrollAnimation>
                    <p>PlotlyJS</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={truffle} alt=""/>  
                    </ScrollAnimation>
                    <p>Truffle</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Wordpress} alt=""/>  
                    </ScrollAnimation>
                    <p>Wordpress</p>
                </div>
                <div className="d-flex  justify-content-center flex-column align-content-center image">
                    <ScrollAnimation animateIn='animate__flipInX '
                    animateOut='animate__flipOutX' duration={.5}>
                        <img src={Sana} alt=""/>  
                    </ScrollAnimation>
                    <p>Sana Commerce</p>
                </div>
            </div>
  
        </div>
    )
}