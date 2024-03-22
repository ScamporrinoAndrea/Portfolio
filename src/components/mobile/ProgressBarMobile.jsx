import React, { useState, useEffect } from 'react'



const ProgressBarMobile = () => {
    const [percentage, setPercentage] = useState(0)
    const [projectPercentage, setProjectPercentage] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 50;
            setPercentage(scrollPercent);
        }
        const onScrollableContentScroll = () => {
            const scrollableContentMobile = document.getElementById('scrollableContentMobile');
            const windowHeight = scrollableContentMobile.clientHeight;
            const documentHeight = scrollableContentMobile.scrollHeight;
            const scrollY = scrollableContentMobile.scrollTop;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 50;
            setPercentage(50 + scrollPercent)
        }
        window.addEventListener('scroll', onScroll)
        scrollableContentMobile.addEventListener('scroll', onScrollableContentScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            scrollableContentMobile.removeEventListener('scroll', onScrollableContentScroll);
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