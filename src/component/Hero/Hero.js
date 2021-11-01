import Particles from 'react-particles-js';
import Typical from 'react-typical'

export default function Hero() {
    const particles={"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
    return (
            <div className="hero" id="hero">
                <Particles params={particles} className="particles" />
                <div className="d-flex justify-content-center hero-nav">
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#project">Project</a>
                </div>
                <div className="text">
                    <h1>Hi, I'm Chenyi</h1><br/>
                    <Typical
                    steps={['I am a', 1000, 'I am a Developer', 1000, 'I am a Software Engineer', 1000, 'I am a Web Developer', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                    />
                </div>
                <div className="scroll">
                    <a href="#about">
                        <h3>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="mouse-alt" className="svg-inline--fa fa-mouse-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M224 0h-64A160 160 0 0 0 0 160v192a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V160A160 160 0 0 0 224 0zm112 352a112.12 112.12 0 0 1-112 112h-64A112.12 112.12 0 0 1 48 352V160A112.12 112.12 0 0 1 160 48h64a112.12 112.12 0 0 1 112 112zM192 96a32 32 0 0 0-32 32v32a32 32 0 0 0 64 0v-32a32 32 0 0 0-32-32z"></path>
                            </svg>
                            Scroll Down
                        </h3>
                    </a>
                </div>
            </div>
    )
}