/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useRef } from "react";
import Events from "./pages/Events";
import Stories from "./pages/Stories";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Home />
                <About />
                <Events />
                <Stories/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
