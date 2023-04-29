import React from "react";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <section id="contact">
      <div className="bg-[#F7D770]">
        <div className="flex flex-row pt-12 pb-12 lg:px-32">
          <div className="flex flex-col basis-1/2 m-auto justify-center">
            <img src={logo} alt="logo" className="h-28 w-40" />
          </div>
          <div className="basis-1/2 hidden lg:block">
            <h1 className="text-lg font-bold mb-2">Contact Info:</h1>
            <div className="text-md text-[#636363] mt-4">
              <p>
                Address: IIIT Allahabad, Jhalwa, Devghat, Prayagraj - 211012
              </p>
              <div className="flex flex-row text-2xl mt-4">
                <i className="fa-brands fa-facebook-f mr-8"></i>
                <i className="fa-brands fa-instagram mr-8"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#306F5E] flex flex-row pt-2 pb-2 justify-center">
        <p className="text-xs md:text-sm text-white text-center">
          Made with ❤️ by IIITA
        </p>
      </div>
    </section>
  );
}
