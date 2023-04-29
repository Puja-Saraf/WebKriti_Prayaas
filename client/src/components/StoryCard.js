import React from "react";
import tempimg from "../img/temp/story.png";

export default function StoryCard({ story }) {
  const desc =
    story.story_desc.length > 300
      ? story.story_desc.slice(0, 300) + "..."
      : story.story_desc;
  return (
    <div className="flex flex-col items-center justify-center bg-[#306F5E]">
      <div className="">
        <img src={tempimg} className="w-[100%]" alt={story.story_name}/>
      </div>
      <div className="flex flex-col justify-center w-[90%] m-auto">
        <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#F7D770]">
          {story.story_name}
        </h4>
        <p className="text-sm mt-2 mb-4 lg:mb-6 text-white font-light leading-relaxed tracking-wide">
          {desc}
        </p>
      </div>
    </div>
  );
}
