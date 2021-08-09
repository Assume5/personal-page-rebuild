import ScrollAnimation from "react-animate-on-scroll"
export default function Education({education}) {
    return (
        <div className="education row justify-content-center">

            <div className="col-sm-3 col-12 d-flex justify-content-center header">
                <ScrollAnimation animateIn='animate__fadeIn '
                animateOut='animate__fadeOut' duration={.5}>
                        <h3 id="education-header">Education</h3>
                </ScrollAnimation>
            </div>
            <div className="col-sm-5 col-12 desc">
                <ScrollAnimation animateIn='animate__fadeIn'
                animateOut='animate__fadeOut' duration={.5}>
                {
                    Object.keys(education).map((school,i) => {
                        return(
                            <div key={school}>
                                <h4>{school}</h4>
                                <p className="major">{education[school]['major']}</p>
                                <p className="time-line">{education[school]['timeline']}</p>
                                <div className="course">
                                    {
                                        Object.keys(education[school]['course']).map((course,i) => {
                                            let parent = education[school]['course'];
                                            return (
                                                <p className="d-flex col-lg-6 col-12 course-name" key={course}>{parent[course]}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                </ScrollAnimation>
            </div>
        </div>
    )
}