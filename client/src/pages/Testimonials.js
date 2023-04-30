import React from "react";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Aavya Gupta",
    desc: "As a former student of IIIT Allahabad and a volunteer with Prayaas, I can say with confidence that their programs are making a real difference in the lives of young people in our community. I'm proud to have been a part of such a dedicated and passionate team.",
  },
  {
    name: "Yash Gupta",
    desc: "The skills and experience I gained through volunteering with Prayaas were invaluable to my personal and professional growth. I'm so grateful for the opportunity to give back to my community and make a positive impact on the lives of others.",
  },
  {
    name: "Simran Kaur",
    desc: "Working with Prayaas was one of the highlights of my time at IIIT Allahabad. It was a great way to connect with my peers and give back to our community, and I learned so much about leadership and teamwork along the way.",
  },
  {
    name: "Rahul Singh",
    desc: "I've seen firsthand the impact that Prayaas is making in the lives of young people in our community. Their programs are empowering students to achieve their full potential and break the cycle of poverty.",
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
            <TestimonialCard testimonial={item} key={_index} ind={_index} />
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
