import { Col, Row, Image } from "react-bootstrap";
import profile from "../assets/Me.jpeg";
import Tilt from "react-parallax-tilt";
import { Bounce, Flip, JackInTheBox } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="group relative w-[100vw] overflow-hidden flex flex-col items-center justify-center gap-y-20">
            <div className="about">
                <div style={{ fontFamily: 'VT323', textAlign: "left", fontSize: 50, marginLeft: 20 }}>About me</div>
                <Tilt style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, borderRadius: 20 }}>
                    <Row>
                        <Col lg={4}>
                            <div className="text-center">
                                <JackInTheBox>
                                    <Image src={profile} style={{ width: 500, borderRadius: 20 }} />
                                </JackInTheBox>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Bounce>
                                I'm a Software Engineer with a passion for web and mobile development.
                            </Bounce>
                            <Bounce>
                                I have experience in both frontend and backend development, and I'm always looking for new challenges.
                            </Bounce>
                            <Bounce >
                                I'm currently pursuing my MSc in Software Engineering at Polytechnic University of Turin, Italy.
                            </Bounce>
                        </Col>
                    </Row>
                </Tilt>
            </div>
        </div>
    )
}

export default About