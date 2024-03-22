import AnimatedCursor from "react-animated-cursor"
import Home from './views/Home';
import MyNavbar from "./components/MyNavbar";
import { useEffect, useState, useRef } from "react";
import ProgressBar from "./components/ProgressBar";
import Mobile from "./views/Mobile";




function App() {
  const [scrollable, setScrollable] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 991) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check mobile on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [])

  const resetScrollable = () => {
    setScrollable(false);
    document.body.classList.remove('no-scroll');
    if (window.innerWidth > 991) {
      document.getElementById('scrollableContent').scrollTop = 0;
    }
    else {
      document.getElementById('scrollableContentMobile').scrollTop = 0;
    }
  }

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color='0, 255, 10'
          outerAlpha={0.2}
          innerScale={0}
          outerScale={3}
          outerStyle={{ border: '1px solid rgba(0, 255, 10, 1)' }}
          clickables={[
            '.nav-item',
            '.nav-title',
            '.clickable'
          ]}
          showSystemCursor={isMobile}
        />
      )}
      <div className="d-none d-lg-block">
        <MyNavbar resetScrollable={resetScrollable} />
        <ProgressBar />
        <Home
          scrollable={scrollable}
          setScrollable={setScrollable}
        />
      </div>
      <div className="d-lg-none">
        <Mobile
          resetScrollable={resetScrollable}
          scrollable={scrollable}
          setScrollable={setScrollable} />
      </div>
    </>
  )
}

export default App
