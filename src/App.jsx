import AnimatedCursor from "react-animated-cursor"
import Home from './views/Home';
import MyNavbar from "./components/MyNavbar";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Mobile from "./views/Mobile";




function App() {
  const [scrollable, setScrollable] = useState(false);

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
      />
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
