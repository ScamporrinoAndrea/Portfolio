import React, { useEffect, useState, useRef } from "react"
import CardProject from "../components/CardProject";
import project1Image from '../assets/project1.jpg';
import RustUtility from '../assets/rust-utility.jpg';
import Deltaplan from '../assets/deltaPlan.jpg';
import tamagotchi from '../assets/tamagotchi.jpg';
import Lottie from 'lottie-react';
import scroll from '../icon/scroll.json';
import { FaReact, FaBootstrap, FaFigma, FaDocker, FaNode, FaRust } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCoinbase } from "react-icons/tb";



const Projects = ({ scrollable, setScrollable }) => {

    const projects = [
        {
            title: 'ThesisManagement',
            image: project1Image,
            description: "Project to upgrade and simplify the Polytechnic of Turin's thesis management process. Developed in a team of 7 students winning first place out of 18 teams the course competition with the possibility of replacing the current version of the thesis management system.",
            icon: (
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                    <FaReact />
                    <RiJavascriptFill />
                    <FaFigma />
                    <FaDocker />
                    <FaNode />
                    <FaBootstrap />
                </div>

            ),
            github: 'https://github.com/ScamporrinoAndrea/ThesisManagement'
        },
        {
            title: 'DeltaPlan',
            image: Deltaplan,
            description: 'Progressive web application in react that allows you to plan meals and activities and automatically synchronise a shopping list and inventory.',
            icon: (
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                    <FaReact />
                    <RiJavascriptFill />
                    <FaFigma />
                    <FaNode />
                    <FaBootstrap />
                </div>

            ),
            github: 'https://github.com/ScamporrinoAndrea/DeltaPlan'
        },
        {
            title: 'Tamagotchi',
            image: tamagotchi,
            description: 'Tamagotchi developed using Keil μVision for LPC1768 and LANDTIGER Board. Features include a customizable virtual pet with animations, joystick navigation, touchscreen interaction, sound effects, and volume control.',
            icon: (
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                    <TbBrandCoinbase />
                </div>

            ),
            github: 'https://github.com/ScamporrinoAndrea/tamagotchi/tree/main'
        },
        {
            title: 'Rust Grab Utility',
            image: RustUtility,
            description: 'Application compatible with both Windows and MacOS which enables users to capture screenshots. It supports multiple monitors and allows for image editing after capture.',
            icon: (
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                    <FaRust />
                </div>

            ),
            github: 'https://github.com/ScamporrinoAndrea/rust-grab-utility'
        },

    ]

    useEffect(() => {
        const scrollableContent = document.getElementById("scrollableContent");
        const onScroll = e => {
            if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                if (window.innerWidth > 991) {
                    setScrollable(true);
                    document.body.classList.add('no-scroll');
                }
            }
        };
        const onScrollableContentScroll = e => {
            if (scrollableContent.scrollTop === 0) {
                if (window.innerWidth > 991) {
                    setScrollable(false);
                    document.body.classList.remove('no-scroll');
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        scrollableContent.addEventListener('scroll', onScrollableContentScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            scrollableContent.removeEventListener('scroll', onScrollableContentScroll);
        };
    }, []);

    const divRefs = useRef([]);
    divRefs.current = projects.map((_, i) => divRefs.current[i] || React.createRef());

    useEffect(() => {
        const handleScroll = () => {
            divRefs.current.forEach((divRef, i) => {
                const nextDivRef = divRefs.current[i + 1];
                if (!nextDivRef) {
                    divRef.current.style.filter = 'blur(0px)';
                    divRef.current.style.transform = 'scale(1)';
                    return;
                }

                const viewportHeight = scrollableContent.clientHeight;
                const nextDivTop = nextDivRef.current.getBoundingClientRect().top;
                const distanceToViewportBottom = Math.max(0, viewportHeight - nextDivTop);

                if (nextDivTop <= viewportHeight) {
                    const blur = Math.min(100, distanceToViewportBottom / 100) + 'px';
                    const scale = Math.max(0.8, 1 - distanceToViewportBottom / 5000);
                    divRef.current.style.filter = `blur(${blur})`;
                    divRef.current.style.transform = `scale(${scale})`;
                    divRef.current.style.transformOrigin = 'center';
                } else {
                    divRef.current.style.filter = 'blur(0px)';
                    divRef.current.style.transform = 'scale(1)';
                }
            });
        };

        scrollableContent.addEventListener('scroll', handleScroll);

        return () => {
            scrollableContent.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='scrollableContent' className="group relative w-[100vw]" style={{ overflowY: scrollable ? 'scroll' : 'hidden', marginLeft: 100 }}>
            <div style={{ color: 'white', zIndex: 10 }}>
                <div style={{ position: 'sticky', top: '40%', color: 'white', zIndex: 2, fontFamily: 'VT323', display: 'flex', flexDirection: 'column', alignItems: 'center', float: "left", paddingLeft: '10vw' }}>
                    <div style={{ textAlign: "center", fontSize: 50 }}>Projects</div>
                    <div style={{ textAlign: "center" }}>
                        Scroll again to see more projects
                        <Lottie animationData={scroll} style={{ height: 150, color: 'white' }} />
                    </div>
                </div>
                {projects.map((project, index) => (
                    <div
                        ref={divRefs.current[index]}
                        key={index}
                        style={{
                            height: '100vh',
                            position: 'sticky',
                            top: '10vh',
                            backgroundColor: 'rgba(38,38,38)',
                            borderRadius: 20,
                            width: '60vw',
                            marginLeft: '30vw'
                        }}
                    >
                        <CardProject
                            index={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            icon={project.icon}
                            github={project.github}
                        />
                    </div>
                ))}
                {/* <div style={{ height: '10vh', position: 'sticky', top: '90vh', backgroundColor: 'blue', padding: 20, borderRadius: 20, width: '50vw', marginLeft: '40vw' }}>
                </div> */}
            </div>
        </div >
    )
}

export default Projects