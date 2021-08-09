import ScrollAnimation from "react-animate-on-scroll";
export default function Skill({skills}) {
    return (
        <div className="skill row justify-content-center">
            <div className="col-sm-3 col-12 d-flex justify-content-center header">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={.5}>
                        <h3>SKILLS</h3>
                </ScrollAnimation>
            </div>
            <div className="col-sm-5 col-10 skill-box">
                <ScrollAnimation animateIn='animate__fadeIn'
                animateOut='animate__fadeOut' duration={.5}>
                    {
                        Object.keys(skills).map((skill,i) => {
                            return (
                                <div key={skill}>
                                    <p>{skill}</p>
                                    <div className={'bar ' + skills[skill]}></div>
                                </div>
                            )
                        })
                    }
                </ScrollAnimation>
            </div>
        </div>
    )
}