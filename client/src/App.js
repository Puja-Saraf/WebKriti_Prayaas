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
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import { api } from "./api";
import Navbar1 from "./components/Navbar1";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const user_id=cookies["UserId"];
      if(!user_id){
        return;
      }
      const data = await api.getSingleUser(user_id);

      if (isSubscribed) {
        setUser(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => {
      isSubscribed = false
      console.log("cleanup")
    };
  }, [cookies["UserId"]]);


  let amount=0;
  const donateAmount=(amount)=>{
    amount=amount;
    console.log(amount);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Navbar user={user}/>
                <Home user={user}/>
                <About />
                <Events />
                <Stories />
                <Testimonials />
                <Faqs user={user} />
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
          <Route path="/team" element={<><Navbar1 user={user}/><Team/><Footer /></>} />
          <Route path="/donate" element={
            <>
            {!cookies["UserId"] && <Login />}
            {cookies["UserId"] && <><Donate user={user} func={donateAmount}/></>}
            </>
          }/>
          <Route path="/checkout" element={
            <>
            {!cookies["UserId"] && <Navigate to="/" />}
            {cookies["UserId"] && <><CheckoutPage user={user} func={donateAmount}/></>}
            </>
          }/>
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
