import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import { Bounce } from 'react-awesome-reveal';

const CardProject = (props) => {
    return (
        <div style={{ height: '100%', fontFamily: 'VT323' }} className='d-flex flex-column'>
            <Tilt>
                <Image src={props.image} fluid style={{ borderRadius: 10, maxHeight: '50vh', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            </Tilt>
            <div style={{ padding: 10, height: '100%' }} className='d-flex flex-column'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'VT323', fontSize: 40 }}>
                    <div>
                        {props.title}
                    </div>
                    <div>
                        {props.icon}
                    </div>
                </div>
                <div style={{ fontFamily: 'VT323', fontSize: 20 }} >
                    {props.description}
                </div>
                <div style={{ width: '100%', textAlign: 'center', marginTop: 30 }}>
                    <Tilt>
                        <a href={props.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'white' }}>
                            <Button variant='outline-light' className='github-icon clickable'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='25' height='25' fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: 10 }} >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                    View on GitHub
                                </div>
                            </Button>
                        </a>
                    </Tilt>
                </div>
                {
                    props.index != 3 ? null :
                        <Bounce className="d-none d-lg-block">
                            <Row style={{ fontSize: 18, textAlign: 'center' }}>
                                <Col md={{ span: 5, offset: 0 }}>
                                    <Tilt style={{ marginTop: 70 }}>
                                        <a href="https://github.com/ScamporrinoAndrea" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'white' }}>
                                            <Button variant='outline-light' className='github-icon clickable' style={{ padding: 20, borderRadius: 10, fontSize: 20, minWidth: 250 }}>
                                                <Row>
                                                    <Col lg={4}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width='60' height='60' fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: 10 }} >
                                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                        </svg>
                                                    </Col>
                                                    <Col lg={8} className="d-flex align-items-center justify-content-center">
                                                        More projects
                                                    </Col>
                                                </Row>
                                            </Button>
                                        </a>
                                    </Tilt>
                                </Col>
                                <Col md={{ span: 5, offset: 2 }}>
                                    <a href="mailto:scamporrino.andrea@gmail.com" className="text-decoration-none" style={{ color: 'white' }}>
                                        <Tilt style={{ marginTop: 70 }}>
                                            <Button variant='outline-light' className='github-icon clickable' style={{ padding: 20, borderRadius: 10, fontSize: 20, minWidth: 250 }}>
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
                                            </Button>
                                        </Tilt>
                                    </a>
                                </Col>
                            </Row>
                        </Bounce>

                }
            </div>
        </div>
    )
}

export default CardProject