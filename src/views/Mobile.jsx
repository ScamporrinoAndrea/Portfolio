import React from 'react'
import NavbarMobile from '../components/mobile/NavbarMobile'
import HomeMobile from '../components/mobile/HomeMobile'
import AboutMobile from '../components/mobile/AboutMobile'
import ProjectsMobile from '../components/mobile/ProjectsMobile'
import ProgressBarMobile from '../components/mobile/ProgressBarMobile'

const Mobile = ({ scrollable, setScrollable, resetScrollable }) => {
    return (
        <div>
            <NavbarMobile resetScrollable={resetScrollable} />
            <ProgressBarMobile />
            <div className='bg-neutral-800'>
                <HomeMobile />
                <AboutMobile />
                <ProjectsMobile
                    scrollable={scrollable}
                    setScrollable={setScrollable}
                />
            </div>
        </div>
    )
}

export default Mobile