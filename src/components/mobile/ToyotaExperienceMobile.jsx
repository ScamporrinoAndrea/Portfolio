import toyotaVideo from "../../assets/toyotaVideo.mp4";
import { SiToyota } from "react-icons/si";
import { Bounce } from "react-awesome-reveal";


const ToyotaExperienceMobile = () => {

    return (
        <div>
            <div id='ExperienceMobile'>
                <div style={{ color: 'transparent' }}>invisible</div>
            </div>
            <div style={{ marginTop: 10 }}>
                <div style={{ color: 'transparent' }}>invisible</div>
            </div>
            <div style={{ fontFamily: 'VT323', color: 'white', overflow: 'hidden', position: 'sticky', top: '50px' }}>
                <div style={{ textAlign: "left", fontSize: 40, marginLeft: 20, display: 'flex', alignItems: 'center', gap: '10px' }}><span>Toyota Internship</span><SiToyota /></div>
                <Bounce style={{ padding: 20 }}>
                    <div className="text-center">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{

                                borderRadius: 20,
                            }}
                        >
                            <source src={toyotaVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        I completed a <span style={{ color: 'rgb(0, 255,10)' }}>six-month internship</span> at Toyota Motor Europe as a Software Engineer in Belgium. <br />
                        I developed a custom internal<span style={{ color: 'rgb(0, 255,10)' }}> application</span> from scratch using Microsoft Power Platform.<br />
                        The application was designed to manage vehicle testing, optimizing workflows and improving data management efficiency across teams.
                    </div>
                    <div>
                        I designed the system architecture and UI/UX in Figma, implementing both the <span style={{ color: 'rgb(0, 255,10)' }}>frontend and backend</span> while integrating SharePoint, PowerApps, and Power Automate. <br />
                        Through iterative development and <span style={{ color: 'rgb(0, 255,10)' }}>collaboration with stakeholders</span>, I deployed a fully operational solution that reduces processing time by an estimated 199 hours per year, delivering a business value of €22,000 annually.
                    </div>
                </Bounce>
            </div>
        </div>
    );
};

export default ToyotaExperienceMobile;