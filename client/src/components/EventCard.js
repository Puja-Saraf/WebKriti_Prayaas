import React from "react";
import tempimg from "../img/temp/event.svg";

export default function EventCard({ event }) {
  const desc =
    event.event_desc.length > 300
      ? event.event_desc.slice(0, 300) + "..."
      : event.event_desc;
  return (
    <div className="flex flex-col items-center justify-center bg-[#F7D770]">
      <div className="">
        <img src={tempimg} className="w-[100%]" alt={event.event_name}/>
      </div>
      <div className="flex flex-col justify-center w-[90%] m-auto">
        <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#306F5E]">
          {event.event_name}
        </h4>
        <p className="text-sm mt-2 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
          {desc}
        </p>
      </div>
    </div>
  );
}
