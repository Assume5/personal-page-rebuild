import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
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
            <div className={this.state.isPosition ? 'scroll-top-button animate__animated animate__fadeInUp visible' : 'scroll-top-button animate__animated animate__fadeOutDown hidden'}>
                <a href="#hero"><FontAwesomeIcon icon={faArrowUp}/></a>
            </div>
        )
    }
}