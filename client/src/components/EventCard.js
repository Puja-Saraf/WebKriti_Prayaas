import React from "react";

export default function EventCard({ event }) {
  const desc =
    event.content.length > 300
      ? event.content.slice(0, 300) + "..."
      : event.content;
  return (
    <div className="flex flex-col items-center justify-center bg-[#F7D770]">
      <div className="">
        <img src={event.img_url} className="w-[100%] h-60 m-auto" alt={event.title} />
      </div>
      <div className="flex flex-col w-[90%] h-72">
        <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#306F5E]">
          {event.title}
        </h4>
        <p className="text-sm mt-2 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
          {desc}
        </p>
      </div>
    </div>
  );
}
