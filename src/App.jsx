import AnimatedCursor from "react-animated-cursor"
import Home from './views/Home';
import MyNavbar from "./components/MyNavbar";
import { useRef } from "react";




function App() {
  return (
    <>
      <MyNavbar />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='0, 255, 10'
        outerAlpha={0.2}
        innerScale={0}
        outerScale={3}
        outerStyle={{ border: '1px solid rgba(0, 255, 10, 1)' }}
        clickables={[
          'h1',
          'h2',
          'svg',
          '.nav-item',
          '.nav-title'
        ]}
      />
      <Home />
    </>
  )
}

export default App
