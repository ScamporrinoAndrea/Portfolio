import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const Home = () => {
    return (
        <div>
            <HorizontalScrollCarousel />
            <div className="h-[300vh]">
                <div>
                    ciao
                </div>
            </div>
        </div>
    );
};


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <section ref={targetRef} className="h-[300vh] bg-neutral-800">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    <div className="group relative w-[100vw] overflow-hidden text-center flex flex-col items-center justify-center gap-y-20">
                        <div>
                            <h1>Andrea Scamporrino</h1>
                        </div>
                        <div>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                    <div className="group relative w-[100vw] overflow-hidden text-center flex flex-col items-center justify-center gap-y-20">
                        <div className="about">
                            Many End-to-End (E2E) testing tools allow developers to create repeatable test scripts that mimic a human user's interaction with the application and evaluate its response. Various paradigms of testing tools have been defined that are differentiated based upon...
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default Home;