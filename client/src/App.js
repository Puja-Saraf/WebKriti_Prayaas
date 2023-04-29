/* eslint-disable */
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useRef } from "react";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Events />
                <Stories />
                <Testimonials />
                <Faqs />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/events" element={<Navigate to="/" />} />
          <Route path="/stories" element={<Navigate to="/" />} />
          <Route path="/testimonials" element={<Navigate to="/" />} />
          <Route path="/faqs" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
