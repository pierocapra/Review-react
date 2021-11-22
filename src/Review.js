import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNumber = (n) => {
    if (n > people.length - 1) {
      return 0;
    } else if (n < 0) {
      return people.length - 1;
    }
    return n;
    // n === people.length - 1 ? return setIndex(0) : setIndex(index + 1);
    // n === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
  };
  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };

  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is inclusive and the minimum is inclusive
  }

  const randomPerson = () => {
    let randomNumber = getRandomIntInclusive(0, 3);
    if (randomNumber === index) {
      randomNumber = checkNumber(randomNumber + 1);
    }
    setIndex(randomNumber);
  };
  return (
    <article className="review ">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info ">{text}</p>
      <div className="button-container">
        <FaChevronLeft className="prev-btn" onClick={prevPerson} />
        <FaChevronRight className="next-btn" onClick={nextPerson} />
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
