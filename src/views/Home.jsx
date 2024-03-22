import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import scroll from "../icon/scroll.json";
import About from "./About";
import Projects from "./Projects";
import { TypeAnimation } from 'react-type-animation';

const Home = ({ scrollable, setScrollable }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-67%"]);

    return (
        <div>
            <section ref={targetRef} className="h-[300vh] bg-neutral-800">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4 h-screen">
                        <div className="group relative w-[100vw] overflow-hidden text-center flex flex-col items-center justify-center gap-y-20 margin-navbar">
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
                            <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }} className="margin-navbar">
                                <Lottie animationData={scroll} style={{ height: 150, color: 'white' }} />
                            </div>
                        </div>


                        <About />

                        <Projects
                            scrollable={scrollable}
                            setScrollable={setScrollable} />


                    </motion.div>
                </div >
            </section >
        </div>
    );
};


export default Home;