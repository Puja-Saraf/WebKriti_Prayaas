import React from "react";
import banner from "../img/banner.svg";
import home from "../img/home.svg";
import ReactCurvedText from "react-curved-text";

export default function Home() {
  return (
    <div className="bg-[#F8F4E9]" id="home">
      {/* <img src={banner} className="mt-24 w-[100%]" alt="logo" /> */}
      <div className="flex flex-col md:flex-row w-[100%] h-[24rem] lg:h-[29rem] xl:h-[35rem] mt-24 justify-center">
        <div className="basis-1/2 flex flex-col justify-center items-center md:items-start">
          <h1 className="md:ml-10 lg:ml-20 text-6xl lg:text-8xl font-bold text-[#2C3734]">
            Prayaas
          </h1>
          <p className="md:ml-10 lg:ml-20 text-xl lg:text-3xl font-thin text-[#636363] mt-4">
            Let Dreams, Live On...
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-7 md:ml-10 lg:ml-20">
            <div>
              <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white">
                Add an Event
              </button>
            </div>
            <div className="relative mt-4 md:ml-16 lg:ml-28">
              <ReactCurvedText
                width="120"
                height="120"
                cx="60"
                cy="60"
                rx="30"
                ry="30"
                startOffset="5"
                reversed={true}
                text="Learn about us through this video"
                textProps={{ style: { fontSize: "12" } }}
                textPathProps={null}
                tspanProps={{ dy: "-17" }}
                ellipseProps={null}
                svgProps={{ style: { transform: "rotate(0deg)" } }}
              />
              <a
                href="https://youtu.be/pRC-e2etGyU"
                target="_blank"
                className="absolute top-[20%] right-[25%]"
              >
                <i className="hover:opacity-75 ml-10 fa-solid fa-play p-6 rounded-full bg-[#F7D770]"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-[#F7D770] relative hidden md:block">
          <img
            src={home}
            className="w-[90%] absolute left-0 bottom-0"
            alt="home"
          />
        </div>
      </div>
      <div className="p-6 md:p-10 lg:p-14 bg-[#306F5E] text-white text-center text-lg md:text-2xl lg:text-3xl tracking-wide">
        Be part of the breakthrough, to make someone's dream come true!
      </div>
    </div>
  );
}
