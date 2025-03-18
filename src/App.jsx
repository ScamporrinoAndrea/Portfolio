import AnimatedCursor from "react-animated-cursor"
import Home from './views/Home';
import { useEffect, useState } from "react";
import Mobile from "./views/Mobile";
import project1Image from './assets/project1.jpg';
import RustUtility from './assets/rust-utility.jpg';
import Deltaplan from './assets/deltaPlan.jpg';
import tamagotchi from './assets/tamagotchi.jpg';
import teamworkApp from './assets/teamworkApp.png';
import jobPlacement from './assets/jobPlacement.png';
import ginoPanino from './assets/ginoPanino.png';
import { FaReact, FaBootstrap, FaFigma, FaDocker, FaNode, FaRust, FaAndroid, FaVuejs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCoinbase, TbBrandTypescript, TbBrandKotlin } from "react-icons/tb";
import { SiSpringboot, SiPostgresql } from "react-icons/si";



function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 991) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [])

  const projects = [
    {
      title: 'Teamwork Management App',
      image: teamworkApp,
      description: "Android Application designed to create teams and organize any type of activity: study groups, trips, or work projects. Users can create both individual and shared tasks and communicate in real-time among team members to coordinate effectively.",
      icon: (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <FaAndroid />
          <TbBrandKotlin />
        </div>

      ),
      github: 'https://github.com/ScamporrinoAndrea/TeamworkApp'
    },
    {
      title: 'Gino Panino Website',
      image: ginoPanino,
      description: 'Website created for a sandwich restaurant in Turin, Italy. Built with Vue.js and Bootstrap, it offers a sleek, responsive design to highlight the menu and the location.',
      icon: (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <FaVuejs />
          <RiJavascriptFill />
          <FaBootstrap />
        </div>

      ),
      github: 'https://ginopanino.it'
    },
    {
      title: 'DeltaPlan',
      image: Deltaplan,
      description: 'Progressive web application in React that allows you to plan meals and activities and automatically synchronise a shopping list and inventory.',
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
      title: 'Job Placement ',
      image: jobPlacement,
      description: "A full-stack microservices-based system for temporary job placement services, developed using Spring Boot, Kotlin, PostgreSQL, Docker and React.",
      icon: (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <FaReact />
          <TbBrandTypescript />
          <FaFigma />
          <FaDocker />
          <TbBrandKotlin />
          <SiSpringboot />
          <SiPostgresql />
        </div>

      ),
      github: 'https://github.com/ScamporrinoAndrea/JobPlacementSystem'
    },
    {
      title: 'ThesisManagement',
      image: project1Image,
      description: "Full-stack Web Application to upgrade and simplify the Polytechnic of Turin's thesis management process. Developed in a team of 7 students winning first place out of 18 teams the course competition with the possibility of replacing the current version of the thesis management system.",
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
      title: 'Tamagotchi',
      image: tamagotchi,
      description: 'Tamagotchi game developed using Keil μVision for LPC1768 and LANDTIGER Board. Features include a customizable virtual pet with animations, joystick navigation, touchscreen interaction, sound effects, and volume control.',
      icon: (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <TbBrandCoinbase />
        </div>

      ),
      github: 'https://github.com/ScamporrinoAndrea/tamagotchi'
    },
    {
      title: 'Rust Screenshot Utility',
      image: RustUtility,
      description: 'Screenshot utility for Windows and MacOS provides a seamless cross-platform experience for capturing screenshots with features such as hotkey support, annotation tools, various output formats and allows capturing screens from multiple monitors.',
      icon: (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
          <FaRust />
        </div>

      ),
      github: 'https://github.com/ScamporrinoAndrea/rust-grab-utility'
    },

  ]

  const isTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches;
  };

  console.log(isTouchDevice()); // true se è un dispositivo touch

  return (
    <>
      {isTouchDevice &&
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color='0, 255, 10'
          outerAlpha={0.2}
          innerScale={0}
          outerScale={3}
          outerStyle={{ border: '1px solid rgba(0, 255, 10, 1)' }}
          clickables={[
            '.nav-item',
            '.nav-title',
            '.clickable'
          ]}
          showSystemCursor={!isTouchDevice}
        />
      }
      <Home projects={projects} />
      <div className="d-lg-none">
        <Mobile projects={projects} />
      </div>
    </>
  )
}

export default App
