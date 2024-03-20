import React, { useState } from 'react'

const MyNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className='navbar'>
                <div style={{
                    position: 'absolute',
                    top: 20,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {!showMenu ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" style={{ color: 'white', transition: 'all 1s' }} onClick={() => setShowMenu(true)}>
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" style={{ color: 'white', transition: 'all 1s' }} onClick={() => setShowMenu(false)}>
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    }
                </div>
                <div className='center'>
                    <div style={{ writingMode: 'vertical-lr', color: 'white', fontFamily: 'VT323', fontSize: 25 }}>
                        Andrea Scamporrino
                    </div>
                </div>
            </div>
            <div className='menu' style={{
                transform: showMenu ? 'translateX(0)' : 'translateX(-100%)',
                left: 100
            }}>
                <div className='menu-item'>Home</div>
                <div className='menu-item'>About</div>
                <div className='menu-item'>Projects</div>
            </div>
        </>
    )
}

export default MyNavbar