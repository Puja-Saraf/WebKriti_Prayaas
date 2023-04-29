import React from "react";
import FaqCard from "../components/FaqCard";

const faqs = [
  {
    id: 0,
    question: "What is the mission of the NGO run by IIIT Allahabad students?",
    answer:
      "The mission of our NGO is to empower underprivileged youth through education and skill-building programs. We aim to provide young people with the tools they need to succeed in life and break the cycle of poverty.",
  },
  {
    id: 1,
    question: "Who are the people behind the NGO?",
    answer:
      "Our NGO is run by a team of passionate and dedicated IIIT Allahabad students who are committed to making a difference in their community. Our team members come from diverse backgrounds and bring a range of skills and experiences to our work.",
  },
  {
    id: 2,
    question:
      "How can I get involved with the NGO and contribute to its cause?",
    answer: `There are many ways to get involved with our NGO, from volunteering your time to donating funds or resources. You can find more information on our "Get Involved" page, or by contacting us directly `,
  },
  {
    id: 3,
    question: "What kind of activities and projects does the NGO undertake?",
    answer:
      "Our NGO undertakes a variety of activities and projects to support our mission, including after-school tutoring, vocational training programs, and community outreach initiatives. We also collaborate with other organizations and stakeholders to maximize our impact.",
  },
  {
    id: 4,
    question: "How does the NGO raise funds for its activities?",
    answer:
      "We raise funds through a variety of channels, including donations from individuals and organizations, grants, and fundraising events. We are committed to transparency and accountability in our fundraising efforts.",
  },
  {
    id: 5,
    question: "How does the NGO measure the impact of its work?",
    answer:
      "We measure the impact of our work through a variety of metrics, including student academic performance, job placement rates, and feedback from program participants and their families. We are committed to continuous improvement and regularly evaluate our programs to ensure that we are making the greatest possible difference.",
  },
  {
    id: 6,
    question:
      "How does the NGO collaborate with other organizations and stakeholders?",
    answer:
      "We collaborate with a range of organizations and stakeholders, including local businesses, schools, and government agencies. We believe that partnerships are essential to achieving our mission, and we are always looking for new ways to work with others to make a difference.",
  },
  {
    id: 7,
    question: "What is the NGO's approach to transparency and accountability?",
    answer:
      "We are committed to transparency and accountability in all aspects of our work. We regularly report on our activities and finances, and we welcome feedback and input from our stakeholders. We believe that openness and honesty are essential to building trust and achieving our goals.",
  },
];

export default function Faqs() {
  const faqs1 = faqs.slice(0, 4);
  const faqs2 = faqs.slice(4);

  return (
    <section id="faqs">
    <div className="border-2 border-solid border-[#636363] w-[90%] opacity-25 m-auto rounded-xl"></div>
      <div className="mt-16 mb-16 lg:mt-24 lg:mb-24 w-[80%] m-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3734]">
          FAQs
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-7">
          <div className="m-auto">
            {faqs1.map((item, _index) => (
              <FaqCard faq={item} />
            ))}
          </div>
          <div className="m-auto">
            {faqs2.map((item, _index) => (
              <FaqCard faq={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}