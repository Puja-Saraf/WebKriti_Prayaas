import React from "react";
import MultiSlider from "../components/MultiSlider";

const events = [
  {
    event_name: "Pad Bank",
    event_desc:
      "PadBank is an initiative started in the year 2019, wherein girls are educated about maintaining hygiene during menstrual cycles and free sanitary pads are distributed on a monthly basis. There have been 8 successful editions of PadBank and a tremendous increase in the awareness of menstruation and sanitation in the children along with their families.",
  },
  {
    event_name: "Pad Bank",
    event_desc:
    "PadBank is an initiative started in the year 2019, wherein girls are educated about maintaining hygiene during menstrual cycles and free sanitary pads are distributed on a monthly basis. There have been 8 successful editions of PadBank and a tremendous increase in the awareness of menstruation and sanitation in the children along with their families.",
},
  {
    event_name: "Pad Bank",
    event_desc:
    "PadBank is an initiative started in the year 2019, wherein girls are educated about maintaining hygiene during menstrual cycles and free sanitary pads are distributed on a monthly basis. There have been 8 successful editions of PadBank and a tremendous increase in the awareness of menstruation and sanitation in the children along with their families.",
},
  {
    event_name: "Pad Bank",
    event_desc:
    "PadBank is an initiative started in the year 2019, wherein girls are educated about maintaining hygiene during menstrual cycles and free sanitary pads are distributed on a monthly basis. There have been 8 successful editions of PadBank and a tremendous increase in the awareness of menstruation and sanitation in the children along with their families.",
},
];

export default function Events() {
  return (
    <section id="events">
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">Our Events</h1>
        <div className="m-auto mt-10 hidden lg:block"><MultiSlider items={events} count={3} event={true} /></div>
        <div className="m-auto mt-10 block lg:hidden"><MultiSlider items={events} count={2} event={true} /></div>

        <div className="flex justify-center mt-12">
            <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white">Add an Event</button>
        </div>
      </div>
      <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
    </section>
  );
}
