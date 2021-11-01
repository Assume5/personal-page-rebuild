import ScrollAnimation from "react-animate-on-scroll";
import Electron from './imgs/electron.png';
import Ethereum from './imgs/Ethereum.png';
import Git from './imgs/Git.png';
import Infura from './imgs/Infura.png';
import Metamask from './imgs/Metamask.png';
import Nodejs from './imgs/nodejs.png';
import PhaserIO from './imgs/PhaserIO.png';
import PlotlyJS from './imgs/PlotlyJS.jpg';
export default function ToolsAndFramework() {
    let Tools_and_Framework = {
        "Electron": Electron, 
        "Ethereum": Ethereum, 
        "Git": Git, 
        "Infura": Infura, 
        "Metamask": Metamask, 
        "Nodejs": Nodejs, 
        "PhaserIO": PhaserIO, 
        "PlotlyJS": PlotlyJS, 
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
                            <div className="d-flex  justify-content-center flex-column align-content-center image" key={framework}>
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