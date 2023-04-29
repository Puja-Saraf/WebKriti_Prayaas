import React, { useEffect, useState } from "react";
import MultiSlider from "../components/MultiSlider";
import { api } from "../api";

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllEvents();

      if (isSubscribed) {
        setEvents(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);
  if (events.length === 0) {
    return <></>;
  }
  return (
    <section id="events">
        <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">Our Events</h1>
        <div className="m-auto mt-10 hidden lg:block"><MultiSlider items={events} count={3} event={true} testimonial={false} /></div>
        <div className="m-auto mt-10 block lg:hidden"><MultiSlider items={events} count={2} event={true} testimonial={false} /></div>

        <div className="flex justify-center mt-12">
          <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#306F5E] text-white">
            Add an Event
          </button>
        </div>
      </div>
    </section>
  );
}
