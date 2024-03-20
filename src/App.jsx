import AnimatedCursor from "react-animated-cursor"
import Home from './views/Home';
import MyNavbar from "./components/MyNavbar";




function App() {
  return (
    <>
      <MyNavbar />
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='0, 255, 10'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'h1',
          'h2',
        ]}
      />
      <Home />
    </>
  )
}

export default App
