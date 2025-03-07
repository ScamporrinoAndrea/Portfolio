import React, { useEffect, useState, useRef } from "react"
import Lottie from 'lottie-react';
import scroll from '../icon/scroll.json';




const Projects = () => {

    return (
        <>
            <div id="projects" style={{
                color: 'white',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    color: 'white',
                    fontFamily: 'VT323',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'left',
                }}>
                    <div style={{ textAlign: "center", fontSize: 100 }}>Projects</div>
                    <div style={{ textAlign: "center" }}>
                        Still scrolling to see more projects
                        <Lottie animationData={scroll} style={{ height: 150, color: 'white' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects