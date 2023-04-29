/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar({refs}) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (navbarOpen && ref.current && !ref.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [navbarOpen]);

  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/home":
        scrollSmoothHandler(refs.homeRef);
        break;
      case "/event":
        scrollSmoothHandler(refs.eventRef);
        break;

      default:
      // ignore
    }
  }, [location, refs]);

  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed w-full top-0 z-20" ref={ref}>
      <nav
        className="relative flex flex-wrap items-center justify-between px-2 py-1 mb-3 bg-[#F8F4E9]"
      >
        <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-2xl font-bold leading-relaxed mr-4 my-2 whitespace-nowrap text-[#636363] flex flex-row"
              to="/home"
            >
              <img src={logo} className="h-16 mt-2" alt="logo" />
            </Link>
            <button
              className=" cursor-pointer leading-none mx-6 my-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen && (
                <i className="fa-solid fa-bars text-[#306F5E] text-2xl"></i>
              )}
              {navbarOpen && (
                <i className="fa-solid fa-x text-[#306F5E] text-2xl"></i>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center lg:items-center">
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/about"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/events"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/stories"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/alumnis"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Our Alumnis
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/faqs"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "mx-6 my-2 flex items-center text-base font-normal leading-snug text-[#636363] hover:opacity-75 hover:text-[#306F5E]"
                  }
                  to="/contact"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                "mx-6 my-2 lg:py-2 lg:px-6 flex items-center text-base font-normal leading-snug hover:opacity-75 text-[#636363] lg:bg-[#306F5E] lg:text-white"
                  }
                  to="/chat"
                  activeClassName="text-[#306F5E]"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Chat with Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
