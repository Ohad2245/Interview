/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Rating from "../rating/Rating";
import { CryptoState } from "../../CryptoContext";

function FAQ({ faq, index, toggleFAQ }) {
  const { user } = CryptoState();
  const [questionId, setQuestionId] = useState(0);

  return (
    <>
      <div
        className={"faq " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        <div className="faq-question">{faq.question}</div>
        <div className="faq-answer">
          {faq.answer}
          <br />
          {faq.image}
        </div>

        {user && <Rating questionId={questionId} />}
      </div>
    </>
  );
}

export default FAQ;
