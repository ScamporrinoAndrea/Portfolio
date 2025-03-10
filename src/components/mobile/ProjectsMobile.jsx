import React, { useEffect, useState, useRef } from "react"
import CardProjectMobile from './CardProjectMobile';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Bounce } from 'react-awesome-reveal';



const ProjectsMobile = ({ projects }) => {

    const divRefs = useRef([]);
    divRefs.current = projects.map((_, i) => divRefs.current[i] || React.createRef());
    const [isLeaving, setIsLeaving] = useState(Array(projects.length - 1).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const index = divRefs.current.findIndex(ref => ref.current === entry.target);
                if (index > 0) {
                    setIsLeaving(prev => {
                        const next = [...prev];
                        next[index - 1] = entry.isIntersecting;
                        return next;
                    });
                }
            },
            {
                threshold: 0.1,
            }
        );

        divRefs.current.forEach((divRef) => {
            if (divRef.current) {
                observer.observe(divRef.current);
            }
        })
        return () => {
            divRefs.current.forEach((divRef) => {
                if (divRef.current) {
                    observer.unobserve(divRef.current);
                }
            })
        };
    }, []);

    return (
        <div id="projectsMobile">
            <div style={{ fontSize: 40, paddingLeft: 20, marginTop: 60, color: 'white', fontFamily: 'VT323', position: 'sticky', top: '50px' }}>Projects</div>

            <div className="group relative" style={{ color: 'white', fontFamily: 'VT323' }}>
                {
                    projects.map((project, index) => (
                        <div
                            ref={divRefs.current[index]}
                            key={index}
                            style={{
                                height: '95vh',
                                position: 'sticky',
                                top: '100px',
                                backgroundColor: 'rgba(38,38,38)',
                                borderRadius: 20,
                                padding: 20,
                                filter: isLeaving[index] ? 'blur(5px)' : 'blur(0px)',
                                transform: isLeaving[index] ? 'scale(0.8)' : 'scale(1)',
                                transition: 'filter 0.7s, transform 0.7s',
                            }}
                        >
                            <CardProjectMobile
                                index={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                icon={project.icon}
                                github={project.github}
                            />
                        </div>
                    ))
                }
            </div >
            <div style={{ overflow: 'hidden' }}>
                <Bounce style={{ marginBottom: 50, fontFamily: 'VT323' }}>
                    <Container>
                        <Row style={{ fontSize: 18, textAlign: 'center' }}>
                            <Col xs={6}>
                                <a href="https://github.com/ScamporrinoAndrea" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'white' }}>
                                    <Button variant='outline-light' className='github-icon clickable' style={{ padding: 10, borderRadius: 10, fontSize: 20 }}>
                                        <Row>
                                            <Col lg={4} className="d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{ marginRight: 10 }} >
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                </svg>
                                            </Col>
                                            <Col lg={8} className="d-flex align-items-center justify-content-center">
                                                More projects
                                            </Col>
                                        </Row>
                                    </Button>
                                </a>
                            </Col>
                            <Col xs={6}>
                                <a href="mailto:scamporrino.andrea@gmail.com" className="text-decoration-none" style={{ color: 'white' }}>
                                    <Button variant='outline-light' className='github-icon clickable' style={{ padding: 10, borderRadius: 10, fontSize: 20 }}>
                                        <Row>
                                            <Col lg={4} className="d-flex align-items-center justify-content-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                                                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                                                </svg>
                                            </Col>
                                            <Col lg={8} md={12} className="d-flex align-items-center justify-content-center">
                                                Contact me
                                            </Col>
                                        </Row>
                                    </Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Bounce>
            </div>
        </div>
    )
}

export default ProjectsMobile