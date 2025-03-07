import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import toyotaVideo from "../assets/toyotaVideo.mp4";
import { SiToyota } from "react-icons/si";

const ToyotaExperience = () => {
    const { scrollYProgress } = useScroll();
    const [maxOffset, setMaxOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            const container = document.getElementById("toyota-exp");
            const secondText = document.getElementById("second-text");

            if (container && secondText) {
                const containerRect = container.getBoundingClientRect();
                const textRect = secondText.getBoundingClientRect();
                const newOffset = containerRect.width - textRect.width;

                setMaxOffset(newOffset);
            }
        };

        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);


    const offsetX = useTransform(
        scrollYProgress,
        [0.154, 0.2265],
        [0, maxOffset]
    );

    return (
        <>
            <div className="flex flex-col" style={{ fontFamily: "VT323", color: "white", }}>
                <motion.div
                    style={{
                        fontSize: '50px',
                        x: offsetX,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginTop: 10
                    }}
                >
                    <span>Internship at Toyota</span>
                    <SiToyota />
                </motion.div>
                <div className="flex flex-row">
                    <div id="target" style={{ width: '100vw', fontSize: '25px', marginRight: '25vw' }}>
                        I completed a <span style={{ color: 'rgb(0, 255,10)' }}>six-month internship</span> at Toyota Motor Europe as a Software Engineer in Belgium. <br />
                        I developed a custom internal<span style={{ color: 'rgb(0, 255,10)' }}> application</span> from scratch using Microsoft Power Platform.<br />
                        The application was designed to manage vehicle testing, optimizing workflows and improving data management efficiency across teams.
                    </div>
                    <div id="second-text" style={{ width: '100vw', fontSize: '25px' }}>
                        I designed the system architecture and UI/UX in Figma, implementing both the <span style={{ color: 'rgb(0, 255,10)' }}>frontend and backend</span> while integrating SharePoint, PowerApps, and Power Automate. <br />
                        Through iterative development and <span style={{ color: 'rgb(0, 255,10)' }}>collaboration with stakeholders</span>, I deployed a fully operational solution that reduces processing time by an estimated 199 hours per year, delivering a business value of €22,000 annually.
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: 40, marginTop: 15 }} >
                <motion.video
                    autoPlay
                    loop
                    muted
                    style={{
                        maxWidth: '62vw',
                        height: 'auto',
                        maxHeight: '50vh',
                        borderRadius: 20,
                        objectFit: 'contain',
                        x: offsetX,
                    }}
                >
                    <source src={toyotaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </div>
        </>
    );
};

export default ToyotaExperience;