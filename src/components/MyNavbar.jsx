import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll';

const MyNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <div className='navbar'>
                <div style={{
                    position: 'absolute',
                    top: 20,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {!showMenu ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" style={{ color: 'white', transition: 'all 1s' }} onClick={() => setShowMenu(true)}>
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" style={{ color: 'white', transition: 'all 1s' }} onClick={() => setShowMenu(false)}>
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    }
                </div>
                <div className='center'>
                    <div style={{ writingMode: 'vertical-lr', color: 'white', fontFamily: 'VT323', fontSize: 25 }} className='nav-title'>
                        Andrea Scamporrino
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Container>
                        <Row>
                            <Col>
                                <a href="https://www.linkedin.com/in/scamporrinoandrea/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width='25' height='25' fill="currentColor" className="bi bi-linkedin social-icon" viewBox="0 0 16 16" color='white' style={{ marginBottom: 20 }}>
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                            </Col>
                            <Col>
                                <a href="https://github.com/ScamporrinoAndrea">
                                    <svg xmlns="http://www.w3.org/2000/svg" width='25' height='25' fill="currentColor" className="bi bi-github social-icon" viewBox="0 0 16 16" color='white' style={{ marginBottom: 20 }}>
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div >
            <div className='menu' style={{
                transform: showMenu ? 'translateX(0)' : 'translateX(-110%)',
                left: 100
            }}>
                <div className="flex flex-col items-center justify-center text-8xl h-[100vh] space-y-10" style={{ fontFamily: 'VT323', paddingRight: 50 }}>
                    <Link
                        to='home'
                        smooth={true}
                        duration={500}
                        className='nav-item'
                        style={{ textDecoration: 'none', color: 'white' }}
                        onClick={() => { setShowMenu(false); scroll.scrollToTop() }}
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                        className='nav-item'
                        style={{ textDecoration: 'none', color: 'white' }}
                        offset={-document.documentElement.clientHeight}
                        onClick={() => { setShowMenu(false) }}
                    >
                        About
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className='nav-item'
                        style={{ textDecoration: 'none', color: 'white' }}
                        onClick={() => { setShowMenu(false) }}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MyNavbar