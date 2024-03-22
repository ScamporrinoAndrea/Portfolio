import Lottie from "lottie-react";
import { TypeAnimation } from 'react-type-animation';
import scroll from "../../icon/scroll.json";



const HomeMobile = () => {
    return (
        <div>
            <section className="h-[100vh]">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div>
                        <TypeAnimation
                            sequence={[
                                'Andrea Scamporrino',
                                2000,
                            ]}
                            cursor={true}
                            repeat={Infinity}
                            className="type-animation-green-mobile"
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
                            className="type-animation-white-mobile" />
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}>
                    <Lottie animationData={scroll} style={{ height: 80, color: 'white' }} />
                </div>
            </section >
        </div >
    );
};


export default HomeMobile;