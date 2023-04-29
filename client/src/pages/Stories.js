import React, { useEffect, useState } from "react";
import MultiSlider from "../components/MultiSlider";
import { api } from "../api";

export default function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const data = await api.getAllStories();

      if (isSubscribed) {
        setStories(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);
  console.log(stories)
  if (stories.length === 0) {
    return <></>;
  }

  return (
    <section id="stories">
    <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[90%] md:w-[70%] lg:w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Our Success Stories
        </h1>
        <div className="m-auto mt-10">
          <MultiSlider items={stories} count={1} event={false} testimonial={false}/>
        </div>

        <div className="flex justify-center mt-12">
          <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#F7D770] text-[#636363]">
            Add Story
          </button>
        </div>
      </div>
    </section>
  );
}
