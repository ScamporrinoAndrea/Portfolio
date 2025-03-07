import React, { useState, useEffect } from 'react'
import { useScroll } from "framer-motion";



const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0)
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        const onScroll = () => {
            if (window.innerWidth > 991) {
                setPercentage(scrollYProgress.get() * 100);
            }
        }
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 100,
            height: '100vh',
            width: 5,
            backgroundColor: 'transparent',
            zIndex: 100
        }}>
            <div style={{
                height: `${percentage}%`,
                width: 5,
                backgroundColor: 'rgb(0, 255, 10)',
            }}>

            </div>
        </div>
    )
}

export default ProgressBar