import React from "react";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Aavya Gupta",
    desc: "As a former student of IIIT Allahabad and a volunteer with this NGO, I can say with confidence that their programs are making a real difference in the lives of young people in our community. I'm proud to have been a part of such a dedicated and passionate team."
},
{
    name: "Aavya Gupta",
    desc: "As a former student of IIIT Allahabad and a volunteer with this NGO, I can say with confidence that their programs are making a real difference in the lives of young people in our community. I'm proud to have been a part of such a dedicated and passionate team."
},
{
    name: "Aavya Gupta",
    desc: "As a former student of IIIT Allahabad and a volunteer with this NGO, I can say with confidence that their programs are making a real difference in the lives of young people in our community. I'm proud to have been a part of such a dedicated and passionate team."
},
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          Our Alumnis Say
        </h1>
        <div className="mt-12">
          {testimonials.map((item, _index) => (
            <TestimonialCard testimonial={item} ind={_index}/>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="py-2 px-6 text-center text-base leading-snug hover:opacity-75 bg-[#F7D770] text-[#636363]">
            Add Your Testimonial
          </button>
        </div>
      </div>
    </section>
  );
}
