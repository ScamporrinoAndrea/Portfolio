import React, { useState, useEffect } from 'react'



const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0)
    const [projectPercentage, setProjectPercentage] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            if (window.innerWidth > 991) {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollY = window.scrollY;
                const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 50;
                setPercentage(scrollPercent);
            }
        }
        const onScrollableContentScroll = () => {
            if (window.innerWidth > 991) {
                const scrollableContent = document.getElementById('scrollableContent');
                const windowHeight = scrollableContent.clientHeight;
                const documentHeight = scrollableContent.scrollHeight;
                const scrollY = scrollableContent.scrollTop;
                const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 50;
                setPercentage(50 + scrollPercent)
            }
        }
        window.addEventListener('scroll', onScroll)
        scrollableContent.addEventListener('scroll', onScrollableContentScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            scrollableContent.removeEventListener('scroll', onScrollableContentScroll);
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