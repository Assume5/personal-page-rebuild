import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
export default function Skill({skills}) {
    const [updateClass, setUpdateClass] = useState({
            'Programming Language': false,
            'Frontend': false,
            'Backend': false,
            'Databases': false,
            'Mobile': false,
            'Blockchain': false
        })
        
    const toggleClass = (currentClass) => {
        Object.keys(updateClass).forEach(v => {
            if(currentClass === v) {
                let element= document.querySelector(`[skill-name="${currentClass}"]`);
                let item = element.querySelector('.skill-items');

                if (item.style.maxHeight){
                    item.style.maxHeight = null;
                } 
                else {
                    item.style.maxHeight = item.scrollHeight + "px";
                }
            }
        })

        setUpdateClass(prevState => ({
            ...prevState,
            [currentClass]: !prevState[currentClass]
        }))
    };

    return (
        <div className="skill row justify-content-center">
            <div className="col-xl-8  col-md-7 col-lg-10 col-12 skill-box">
                <ScrollAnimation animateIn='animate__fadeIn'
                animateOut='animate__fadeOut' duration={.5}>
                    <div className="col-12 d-flex justify-content-center header">
                        <ScrollAnimation animateIn='animate__fadeIn '
                        animateOut='animate__fadeOut' duration={.5}>
                                <h3 className="text-center">My Technical Skills</h3>
                        </ScrollAnimation>
                    </div>
                    <div className="skill-collapse">
                        {
                            Object.keys(skills).map((skill,i) => {
                                let item = skills[skill];
                                return (
                                    <div className={`skill-container ${updateClass[skill] ? 'collapse-show': "collapse-hide"}`} skill-name={skill} key={skill}>
                                        <div className="title-container" onClick={(() => toggleClass(skill))}>
                                            <div className="title">
                                                <img src={item['img']} alt=""/>
                                                <div className="text">
                                                    <h4>{skill}</h4>
                                                    <h5>Total {Object.keys(item).length} skills</h5>
                                                </div>
                                            </div>
                                            <FontAwesomeIcon icon={faChevronDown}/>
                                        </div>
                                        <div className="skill-items">
                                                {
                                                    Object.keys(item).map((key,i) => {
                                                        if(key!=='img') {
                                                            return (
                                                                <div className="item" key={key}>
                                                                    <p>{key}</p>
                                                                    <div className={`bar ${item[key]}`}></div>
                                                                </div>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <div key={key}>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                        </div>
                                    </div>
                                )
                            })        
                        }
                    </div>

                </ScrollAnimation>
            </div>
        </div>
    )
}