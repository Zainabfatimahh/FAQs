import { useState } from "react";

const faqs = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building fast and interactive user interfaces, mainly for single-page applications.",
  },
  {
    question: "Why should I use React?",
    answer:
      "React makes UI development easier by using reusable components and efficient state management.",
  },
  {
    question: "What is an FAQ Accordion?",
    answer:
      "An FAQ accordion is a UI component where questions expand and collapse to show or hide answers.",
  },
  {
    question: "Can I open multiple questions at once?",
    answer:
      "In this version, only one question opens at a time to keep the interface clean and focused.",
  },
  {
    question: "Is this project mobile responsive?",
    answer:
      "Yes, the layout and interactions work smoothly on mobile, tablet, and desktop devices.",
  },
  {
    question: "Can I customize the design?",
    answer:
      "Absolutely! You can change colors, fonts, animations, and layout using CSS.",
  },
  {
    question: "Is this suitable for a portfolio?",
    answer:
      "Yes, this is a clean, professional React project and is perfect for showcasing component logic and UI skills.",
  },
];


export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>

          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
