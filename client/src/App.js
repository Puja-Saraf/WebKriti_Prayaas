/* eslint-disable */
import './App.css';
import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { useRef } from 'react';
import Events from './pages/Events';

function App() {

  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const eventRef=useRef(null);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<><Navbar/><Home /></>} />
    //   </Routes>
    // </BrowserRouter>
    <HashRouter>
      <Navbar refs={{homeRef,aboutRef}}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <div className='border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl'></div>
      <Events ref={eventRef}/>
    </HashRouter>
  );
}

export default App;
