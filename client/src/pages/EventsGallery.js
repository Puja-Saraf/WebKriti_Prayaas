import React from "react";

const donation = [
  {
    img: "https://drive.google.com/uc?id=14NgRpnGytFYDRTLpH8HNhgzqF7Ll1KkS",
  },
  {
    img: "https://drive.google.com/uc?id=1apWEaMbxi7cJYm7J_r3NAiYd1es7g3UL",
  },
  {
    img: "https://drive.google.com/uc?id=1dF6pGSWf915DnPBxqGJ41QZWbFnPwmGi",
  },
  {
    img: "https://drive.google.com/uc?id=1oeD0pl-PbqMmjODt1VZwcNZ50uVoYJ60",
  },
];

const republic = [
  {
    img: "https://drive.google.com/uc?id=1wzesEYDe2VOoxvvq512qPyxQ7OBdBD1x",
  },
  {
    img: "https://drive.google.com/uc?id=1_PKIy6opTFkhDFEUEeQjDiU_fGI4X0Jy",
  },
  {
    img: "https://drive.google.com/uc?id=1t21gKHHX0OMsD4KjXPyyt4pquR0iQpm4",
  },
  {
    img: "https://drive.google.com/uc?id=1t21gKHHX0OMsD4KjXPyyt4pquR0iQpm4",
  },
];

export default function EventsGallery() {
  return (
    <div className="mt-24 mb-24">
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Donation Drive
        </h1>
        <div className="grid grid-cols-4 gap-6 justify-center items-center mt-7">
          {donation.map((item, _index) => (
            <div key={_index}>
              <img src={item.img} className="w-[100%]" alt="donation" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Republic Day
        </h1>
        <div className="grid grid-cols-4 gap-6 justify-center items-center mt-7">
          {republic.map((item, _index) => (
            <div key={_index}>
              <img src={item.img} className="w-[100%]" alt="donation" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
