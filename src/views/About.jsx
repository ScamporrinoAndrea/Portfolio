import { Col, Row, Image } from "react-bootstrap";
import profile from "../assets/Me.jpeg";
import Tilt from "react-parallax-tilt";
import { Bounce, Flip, JackInTheBox } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="group relative w-[100vw] overflow-hidden flex flex-col items-center justify-center gap-y-20">
            <div className="about">
                <div style={{ fontFamily: 'VT323', textAlign: "left", fontSize: 50, marginLeft: 20 }}>About me</div>
                <Bounce>
                    <Tilt style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, borderRadius: 20 }}>
                        <Row>
                            <Col lg={4}>
                                <div className="text-center">
                                    <Image src={profile} style={{ width: 500, borderRadius: 20 }} />
                                </div>
                            </Col>
                            <Col lg={8} className="d-flex align-items-center justify-content-center">
                                I'm a Software Engineer with a passion for web and mobile development.<br />
                                I have experience in both frontend and backend development, and I'm always looking for new challenges.<br />
                                I'm currently pursuing my MSc in Software Engineering at Polytechnic University of Turin, Italy.
                            </Col>

                        </Row>
                    </Tilt>
                </Bounce>

                <Bounce className="d-none d-lg-block">
                    <div className="d-flex justify-content-center">
                        <Tilt style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, borderRadius: 20, marginTop: 50, width: '20vw' }} className="d-flex align-items-center justify-content-center mx-auto resume">
                            <a href="https://scamporrinoandrea.github.io/Resume/Resume_Andrea_Scamporrino.pdf" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'white' }}>
                                <Row>
                                    <Col lg={4}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                                        </svg>
                                    </Col>
                                    <Col lg={8} className="d-flex align-items-center justify-content-center" style={{ textAlign: 'center' }}>
                                        Click here to check my resume
                                    </Col>
                                </Row>
                            </a>
                        </Tilt>
                    </div>
                </Bounce>
                {/* <Bounce>
                    <Row>
                        <Col md={{ span: 3, offset: 2 }}>
                            <Tilt style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, borderRadius: 20, marginTop: 50 }}>
                                <Row>
                                    <Col xs={4}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                                        </svg>
                                    </Col>
                                    <Col xs={8} className="d-flex align-items-center justify-content-center">
                                        Click here to check my resume
                                    </Col>
                                </Row>
                            </Tilt>
                        </Col>
                        <Col md={{ span: 3, offset: 2 }}>
                            <Tilt style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, borderRadius: 20, marginTop: 50 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                                </svg>
                            </Tilt>
                        </Col>
                    </Row>
                </Bounce> */}
            </div>
        </div>
    )
}

export default About