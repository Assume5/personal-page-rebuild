import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    showModal = () => {
        console.log(1)
        this.setState({show:true})
    }

    render() {
        let {modalDetail, show, img, closeModal, current_project} = this.props
        let modal = document.querySelector('.modal');
        console.log(modalDetail)
        return (
            <div className={show ? 'modal visible' : 'modal hidden'}
            onClick= {(e) => { if(e.target === modal ) {modal.classList = 'modal hidden'; closeModal() }}}
            >
                <div className="close-button">
                    <FontAwesomeIcon  icon={faTimes} onClick={closeModal}/>
                </div>
                {
                    
                    <div className={show && 'modal-container animate__animated animate__zoomIn visible animate__faster'}>
                        <div>
                            <img src={img} alt=""/>
                        </div>
                        <div className={show && "split-line"}>
                            <hr/>
                        </div>
                        <div className="text-container">
                            <h5>{current_project}</h5>
                            <p className="type">{modalDetail.type_text}</p>
                            <p className="desc">{modalDetail.desc}</p>
                            <p className="detail">{modalDetail.detail}</p>
                        </div>
                        {
                            (modalDetail.link!=="" || modalDetail.demo !=="") &&
                                <div className="link-button">
                                    {
                                        modalDetail.link!=="" &&
                                        <a className="button" href={modalDetail.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/> Repo Link</a>
                                    }
                                                                        {
                                        modalDetail.demo!=="" &&
                                        <a className="button" href={modalDetail.demo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/> Demo</a>
                                    }
                                </div>
                        }
                    </div>
                }

            </div>
        )
    }
}