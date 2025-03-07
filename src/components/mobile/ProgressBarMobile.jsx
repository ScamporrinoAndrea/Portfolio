import React, { useState, useEffect } from 'react'



const ProgressBarMobile = () => {
    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
            setPercentage(scrollPercent);
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    return (
        <div style={{
            position: 'fixed',
            top: 50,
            left: 0,
            height: 5,
            width: '100vw',
            backgroundColor: 'transparent',
            zIndex: 100
        }}>
            <div style={{
                height: 5,
                width: `${percentage}%`,
                backgroundColor: 'rgb(0, 255, 10)',
            }}>

            </div>
        </div>
    )
}

export default ProgressBarMobile