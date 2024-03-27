import React, { useState } from "react";
import faq from "../../assets/faq.png";
import bg from "../../assets/faqback.png";
import { GoDotFill } from "react-icons/go";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex justify-center items-start flex-col ml-2 py-6">
        <p className="items-end max-w-[100px] font-extrabold vie text-secondary text-[25px] md:text-[30px] lg:text-[32px] pb-2">
          FAQ
        </p>
        <span className="h-1 -mt-1 lg:-mt-2 ml-3 min-w-[80px] bg-primary"></span>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-wrap">
          <div data-aos="zoom-in-down" data-aos-duration="2500">
            <img src={faq} alt="" />
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2500"
            className="lg:col-span-2"
          >
            {questions.map((question, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 rounded-none my-3"
              >
                <input
                  type="checkbox"
                  id={`question-${index}`}
                  checked={index === selectedQuestion}
                  onChange={() => handleQuestionClick(index)}
                  className="text-white"
                />
                <label
                  htmlFor={`question-${index}`}
                  className="flex gap-3 collapse-title text-start text-[16px] lg:text-[20px] bg-faq text-text font-light"
                >
                  <GoDotFill className="mt-1" />
                  {question.question}
                </label>
                <div className="collapse-content text-start">
                  <div className="bg-base-200">
                    {index === selectedQuestion && <p>{question.answer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const questions = [
  {
    question: "Who is RED SHIFT?",
    answer:
      "Red Shift is a pioneering company dedicated to revolutionizing transportation through innovative solutions, particularly in the manufacturing of electric and hybrid vehicles.",
  },
  {
    question:
      "Is Red Shift Legally Registered as a manufacturing company of vehicles?",
    answer:
      "Yes, Red Shift is legally registered as a manufacturing company of vehicles, with a focus on electric and hybrid models.",
  },
  {
    question: "What are our short and long term goals?",
    answer:
      "Our short-term goal is to establish ourselves as a leading manufacturer of eco-friendly vehicles in Ethiopia and expand our presence in East Africa. In the long term, we aim to become a prominent player in the global electric vehicle market, contributing to sustainable mobility solutions worldwide.",
  },
  {
    question: "What part of Africa do we work in?",
    answer:
      "Red Shift primarily operates in East Africa, with a focus on countries like Ethiopia, Rwanda, and Kenya. However, we also have plans to expand our operations to other regions in Africa and beyond.",
  },
  {
    question: "Are Red shift only work on Tricycle Manufacturing?",
    answer:
      "While tricycle manufacturing is a significant part of our business, Red Shift is involved in various sectors, including the production of electric tricycles, three-wheel motorcycles, sanitation cars, express cars, and four-wheel electric vehicles. We also provide spare parts and accessories for these vehicles.",
  },
];

export default FAQ;
