/* eslint-disable */
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Login from "./pages/Login";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Navbar/>
                <Home/>
                <About />
                <Events />
                <Stories />
                <Testimonials />
                <Faqs />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={
            <>
            {!cookies["UserId"] && <Signup />}
            {cookies["UserId"] && <Navigate to="/" />}
            </>
          }/>
          <Route path="/login" element={
            <>
            {!cookies["UserId"] && <Login />}
            {cookies["UserId"] && <Navigate to="/" />}
            </>
          }/>
          {/* <Route path="/donate" element={
            <>
            <Navbar user={user} solid={false} />
            {!cookies["UserId"] && <Signup />}
            {cookies["UserId"] && < />}
            </>
          }/> */}
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
