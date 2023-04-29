import React, { forwardRef } from "react";
import banner from "../img/banner.svg";

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <img src={banner} className="mt-24 w-[100%]" alt="logo" />
      <div className="p-14 bg-[#306F5E] text-white text-center text-3xl tracking-wide">
        Be part of the breakthrough, to make someone's dream come true!
      </div>
    </section>
  );
});

export default Home;
