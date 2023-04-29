import React, { useState } from "react";

export default function FaqCard({faq}) {
  const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper">
      <div className="question" id={faq.id}>
        <h3 className="text-md md:text-lg">{faq.question}</h3>
        <button className="button" onClick={() => handleClick(faq.id)}>
            <i className={`fa-solid fa-angle-down arrow ${isActive ? "active" : ""}`}></i>
        </button>
      </div>
      <div className={`md:text-md text-base text-[#636363] ${isActive ? "answer active" : "answer"}`}>
        {faq.answer}
      </div>
    </div>
  );
}
