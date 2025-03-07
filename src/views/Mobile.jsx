import React from 'react'
import NavbarMobile from '../components/mobile/NavbarMobile'
import HomeMobile from '../components/mobile/HomeMobile'
import AboutMobile from '../components/mobile/AboutMobile'
import ProjectsMobile from '../components/mobile/ProjectsMobile'
import ProgressBarMobile from '../components/mobile/ProgressBarMobile'
import ToyotaExperienceMobile from '../components/mobile/ToyotaExperienceMobile'

const Mobile = ({ projects }) => {
    return (
        <div>
            <NavbarMobile />
            <ProgressBarMobile />
            <div className='bg-neutral-800'>
                <HomeMobile />
                <AboutMobile />
                <ToyotaExperienceMobile />
                <ProjectsMobile
                    projects={projects}
                />
            </div>
        </div>
    )
}

export default Mobile