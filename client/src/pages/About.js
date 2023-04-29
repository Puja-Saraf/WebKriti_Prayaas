import React, { forwardRef } from "react";
import about from "../img/about.jpg";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-row mt-24 mb-24 w-[80%] m-auto">
      <div className="basis-2/3 text-lg m-auto">
        <h1 className="text-5xl font-semibold text-[#2C3734]">About Us</h1>
        <p className="mt-7 w-[90%] text-[#636363] font-light leading-relaxed tracking-wide">
          Prayaas is a non-profit organization run by the students of IIIT
          Allahabad, connecting hundreds of people with a single aim-to lighten
          up the future of some frisky little kids. Prayaas is not just a
          teaching program from 5pm-6pm, it has much more to it. It is a
          continuous effort to illuminate the dark areas near Jhalwa, Prayagraj,
          some of which have never experienced the light of education before.
          Prayaas is just a small push in the right direction at the right time.
          And as you would expect, sometimes even a small push can do wonders.
        </p>
      </div>
      <div className="basis-1/3">
        <img src={about} className="w-[100%]" alt="about" />
      </div>
    </div>
    </section>
  );
});

export default About;