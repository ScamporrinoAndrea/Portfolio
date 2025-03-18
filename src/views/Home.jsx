import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import scroll2 from "../icon/scroll2.json";
import About from "./About";
import Projects from "./Projects";
import ToyotaExperience from "./ToyotaExperience";
import { TypeAnimation } from 'react-type-animation';
import ProjectList from "../components/ProjectList";
import ProgressBar from "../components/ProgressBar";
import MyNavbar from "../components/MyNavbar";


const Home = ({ projects }) => {

    const targetRef = useRef(null);
    let { scrollYProgress } = useScroll({
        target: targetRef,
    });

    let x = useTransform(scrollYProgress, [0, 1], ["1%", "-77.9%"], { clamp: false });

    return (
        <div className="d-none d-lg-block">
            <MyNavbar />
            <ProgressBar />
            <div>
                <section ref={targetRef} className="h-[400vh] bg-neutral-800">
                    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                        <motion.div style={{ x }} className="flex h-screen">
                            <div id="home" className="group relative w-[100vw] overflow-hidden text-center flex flex-col items-center justify-center gap-y-20 margin-navbar">
                                <div>
                                    <TypeAnimation
                                        sequence={[
                                            'Andrea Scamporrino',
                                            2000,
                                        ]}
                                        cursor={true}
                                        repeat={Infinity}
                                        className="type-animation-green"
                                    />
                                </div>
                                <div>
                                    <TypeAnimation
                                        sequence={[
                                            1200,
                                            'Portfolio',
                                            2000,
                                            'Software Engineer',
                                            2000,
                                            'Nerd',
                                            800,
                                        ]}
                                        cursor={true}
                                        repeat={Infinity}
                                        className="type-animation-white" />
                                </div>
                                <div className="clickable" onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}>
                                    <Lottie animationData={scroll2} style={{ height: 40, color: 'white' }} />
                                    <div style={{ color: 'white', fontFamily: 'VT323', marginTop: 20 }}>
                                        Scroll down to navigate →
                                    </div>
                                </div>
                            </div>

                            <div id="about" className="group relative w-[100vw] overflow-hidden flex flex-col items-center justify-center gap-y-20">
                                <About />
                            </div>

                            <div id="toyota-exp" className=" relative w-[150vw] overflow-hidden flex flex-col justify-center">
                                <ToyotaExperience />
                            </div>

                            <Projects />


                        </motion.div>
                    </div >
                </section >
                <ProjectList projects={projects} />

            </div>
        </div>
    );
};


export default Home;