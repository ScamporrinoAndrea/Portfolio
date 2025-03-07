import { Col, Row, Image, Button } from "react-bootstrap";
import profile from "../assets/Me.jpeg";
import Tilt from "react-parallax-tilt";
import { Bounce } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="about">
            <div style={{ fontFamily: 'VT323', textAlign: "left", fontSize: 50, marginLeft: 20 }}>About me</div>
            <Bounce style={{
                padding: 20, borderRadius: 20
            }}>

                <Row>
                    < Col lg={4}>
                        <div className="text-center">
                            <Tilt >
                                <Image src={profile} style={{ width: 500, borderRadius: 20 }} />
                            </Tilt>
                        </div>
                    </Col>
                    <Col lg={8} className="d-flex align-items-center justify-content-center">
                        <div>
                            I'm a Software Engineer with a passion for <span style={{ color: 'rgb(0, 255,10)' }}>web and mobile development.</span><br />
                            I have experience in both <span style={{ color: 'rgb(0, 255,10)' }}>frontend and backend</span> development, and I'm always looking for new challenges.<br />
                            I'm currently pursuing my MSc in Software Engineering at <span style={{ color: 'rgb(0, 255,10)' }}>Polytechnic University of Turin</span>, Italy.
                        </div>
                    </Col>

                </Row>

            </Bounce>
            <Bounce className="d-none d-lg-block">
                <Row style={{ fontSize: 18, textAlign: 'center', marginTop: 70 }}>
                    <Col md={{ span: 6, offset: 0 }}>
                        <a href="https://scamporrinoandrea.github.io/Resume/Resume_Andrea_Scamporrino.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'white' }}>
                            <Button variant='outline-light' className='github-icon clickable' style={{ padding: 20, borderRadius: 10, minWidth: 250, fontSize: 20 }}>
                                <Tilt>
                                    <Row>
                                        <Col lg={4}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                                            </svg>
                                        </Col>
                                        <Col lg={8} className="d-flex align-items-center justify-content-center">
                                            View my resume
                                        </Col>
                                    </Row>
                                </Tilt>
                            </Button>
                        </a>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <a href="mailto:scamporrino.andrea@gmail.com" className="text-decoration-none" style={{ color: 'white' }}>
                            <Button variant='outline-light' className='github-icon clickable' style={{ padding: 20, borderRadius: 10, minWidth: 250, fontSize: 20 }}>
                                <Tilt>
                                    <Row>
                                        <Col lg={4}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                                            </svg>
                                        </Col>
                                        <Col lg={8} md={12} className="d-flex align-items-center justify-content-center">
                                            Contact me
                                        </Col>
                                    </Row>
                                </Tilt>
                            </Button>
                        </a>
                    </Col>
                </Row>
            </Bounce>
        </div >
    )
}

export default About