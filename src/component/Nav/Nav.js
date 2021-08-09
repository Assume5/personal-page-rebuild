import React from "react";
export default class ScrollTop extends React.Component {
    constructor() {
        super()
        this.state = {
            isPosition:false
        } 
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        let about = document.getElementById("about").getBoundingClientRect();
        if(about.top <= 0) {
            this.setState({isPosition:true})
        }
        else {
            this.setState({isPosition:false})
        }
    }

    render () {
        return (
            <div className={this.state.isPosition ? 'nav animate__animated animate__fadeInDown visible' : 'nav animate__animated animate__fadeOutUp hidden'}>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#project">Project</a>
            </div>
        )
    }
}