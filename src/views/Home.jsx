import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import scroll from "../icon/scroll.json";
import About from "./About";
import Projects from "./Projects";


const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <div>
            <section ref={targetRef} className="h-[300vh] bg-neutral-800">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4 h-screen">
                        <div className="group relative w-[100vw] overflow-hidden text-center flex flex-col items-center justify-center gap-y-20">
                            <div>
                                <h1>Andrea Scamporrino</h1>
                            </div>
                            <div>
                                <h2>Software Engineer</h2>
                            </div>
                            <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
                                <Lottie animationData={scroll} style={{ height: 150, color: 'white' }} />
                            </div>
                        </div>


                        <About />


                    </motion.div>
                </div >
            </section >
            <div id="about"></div>
            <div className="h-[300vh]">
                <div id="projects">
                    <Projects />
                </div>
            </div>
        </div>
    );
};


export default Home;