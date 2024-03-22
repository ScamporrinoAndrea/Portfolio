import React, { useEffect, useState, useRef } from "react"
import CardProjectMobile from './CardProjectMobile';
import project1Image from '../../assets/project1.jpg';
import RustUtility from '../../assets/rust-utility.jpg';
import Deltaplan from '../../assets/deltaPlan.jpg';
import tamagotchi from '../../assets/tamagotchi.jpg';
import Lottie from 'lottie-react';
import scroll from '../../icon/scroll.json';
import { FaReact, FaBootstrap, FaFigma, FaDocker, FaNode, FaRust } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCoinbase } from "react-icons/tb";



const ProjectsMobile = ({ scrollable, setScrollable }) => {

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
        const onScroll = e => {
            if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
                setScrollable(true);
                document.body.classList.add('no-scroll');
            }
        };
        const onScrollableContentScroll = e => {
            if (scrollableContentMobile.scrollTop === 0) {
                setScrollable(false);
                document.body.classList.remove('no-scroll');
            }
        };
        window.addEventListener("scroll", onScroll);
        scrollableContentMobile.addEventListener('scroll', onScrollableContentScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            scrollableContentMobile.removeEventListener('scroll', onScrollableContentScroll);
        };
    }, []);

    const divRefs = useRef([]);
    divRefs.current = projects.map((_, i) => divRefs.current[i] || React.createRef());

    useEffect(() => {
        const scrollableContentMobile = document.getElementById('scrollableContentMobile');
        const handleScroll = () => {
            divRefs.current.forEach((divRef, i) => {
                const nextDivRef = divRefs.current[i + 1];
                if (!nextDivRef) {
                    divRef.current.style.filter = 'blur(0px)';
                    divRef.current.style.transform = 'scale(1)';
                    return;
                }

                const viewportHeight = scrollableContentMobile.clientHeight;
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

        scrollableContentMobile.addEventListener('scroll', handleScroll);

        return () => {
            scrollableContentMobile.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div style={{ fontSize: 40, paddingLeft: 20, marginTop: 60, color: 'white', fontFamily: 'VT323' }}>Projects</div>

            <div id="scrollableContentMobile" className="group relative h-[100vh]" style={{ overflowY: scrollable ? 'scroll' : 'hidden', color: 'white', fontFamily: 'VT323' }}>
                {
                    projects.map((project, index) => (
                        <div
                            ref={divRefs.current[index]}
                            key={index}
                            style={{
                                height: '100vh',
                                position: 'sticky',
                                top: '10vh',
                                backgroundColor: 'rgba(38,38,38)',
                                borderRadius: 20,
                                padding: 20,
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
        </div>
    )
}

export default ProjectsMobile