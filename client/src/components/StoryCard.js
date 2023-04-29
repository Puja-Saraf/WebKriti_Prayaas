import React from "react";

export default function StoryCard({ story }) {
  const desc =
    story.content.length > 300
      ? story.content.slice(0, 300) + "..."
      : story.content;
  console.log(story.img_url);
  return (
    <div className="flex flex-col items-center justify-center bg-[#306F5E]">
      <div className="">
        <img src={story.img_url} className="w-[100%]" alt={story.title} />
      </div>
      <div className="flex flex-col justify-center w-[90%] m-auto">
        <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#F7D770]">
          {story.title}
        </h4>
        <p className="text-sm mt-2 mb-4 lg:mb-6 text-white font-light leading-relaxed tracking-wide">
          {desc}
        </p>
      </div>
    </div>
  );
}
