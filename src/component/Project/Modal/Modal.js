import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showModal = () => {
        this.setState({ show: true });
    };

    render() {
        let { modalDetail, show, img, closeModal, current_project } =
            this.props;
        if (typeof modalDetail.desc === "string") {
            console.log(modalDetail["desc"].split(", "));
        }

        let modal = document.querySelector(".modal");
        return (
            <div
                className={`modal ${show ? "visible" : "hidden"}`}
                onClick={(e) => {
                    if (e.target === modal) {
                        modal.classList = "modal hidden";
                        closeModal();
                    }
                }}
            >
                {
                    <div
                        className={
                            show
                                ? "modal-container animate__animated animate__zoomIn visible animate__faster"
                                : undefined
                        }
                    >
                        <div className="close-button">
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={closeModal}
                            />
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div className={show ? "split-line" : undefined}>
                            <hr />
                        </div>
                        <div className="text-container">
                            <h3>{current_project}</h3>
                            <p className="type">{modalDetail.type_text}</p>
                            <p className="desc mb-2">Using:</p>
                            <p className="desc mb-4">
                                {typeof modalDetail.desc === "string" &&
                                    modalDetail.desc.split(", ").map((item) => {
                                        return <span>{item}</span>;
                                    })}
                            </p>
                            <p className="detail">{modalDetail.detail}</p>
                        </div>
                        {(modalDetail.link !== "" ||
                            modalDetail.demo !== "") && (
                            <div className="link-button">
                                {modalDetail.link !== "" && (
                                    <a
                                        className="button"
                                        href={modalDetail.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} /> Repo
                                        Link
                                    </a>
                                )}
                                {modalDetail.demo !== "" && (
                                    <a
                                        className="button"
                                        href={modalDetail.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faYoutube} />{" "}
                                        Demo
                                    </a>
                                )}
                            </div>
                        )}
                        {modalDetail.videoID && (
                            <iframe
                                className="d-block mx-auto"
                                width="80%"
                                height="315px"
                                src={`https://www.youtube.com/embed/${modalDetail.videoID}`}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        )}
                    </div>
                }
            </div>
        );
    }
}
