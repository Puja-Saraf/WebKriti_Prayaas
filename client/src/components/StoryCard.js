import React from "react";

export default function StoryCard({ story, ind }) {
  const desc =
    story.content.length > 700
      ? story.content.slice(0, 700) + "..."
      : story.content;
  console.log(story.img_url);
  return (
    <>
      <div className="block lg:hidden">
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="basis-1/2">
            <img
              src={story.img_url}
              className="w-[100%] h-60 m-auto"
              alt={story.title}
            />
          </div>
          <div className="flex flex-col justify-center w-[90%] h-96 m-auto basis-1/2">
            <h4 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-6 text-[#2C3734]">
              {story.title}
            </h4>
            <p className="text-sm mt-2 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row bg-white">
          {ind % 2 === 0 && (
            <div className="basis-2/5 w-[100%] h-[30rem]">
              <img src={story.img_url} className="w-[100%] h-[100%]" alt="" />
            </div>
          )}
          <div className="basis-3/5 m-auto">
            <h4 className="w-[80%] m-auto text-4xl font-bold mt-4 lg:mt-6 text-[#2C3734]">
              {story.title}
            </h4>
            <p className="w-[80%] m-auto text-md mt-4 mb-4 lg:mb-6 text-[#636363] font-light leading-relaxed tracking-wide">
              {desc}
            </p>
          </div>
          {ind % 2 === 1 && (
            <div className="basis-2/5 w-[100%] h-[30rem]">
              <img src={story.img_url} className="w-[100%] h-[100%]" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
