import React, { useRef, useEffect, createRef } from "react";
import { TweenMax, Back } from "gsap";

const Card = props => {
  const { number, state } = props;
  let cardEl = useRef([...Array(number)].map(() => createRef()));
  if (state) {
    TweenMax.resumeAll();
  }
  useEffect(() => {
    cardEl.current.map((card, i) => {
      TweenMax.to(card, 1, {
        opacity: 1,
        ease: Back.easeOut.config(1.7),
        delay: i * 0.2,
        y: 10
      });
      TweenMax.pauseAll();
    });
  }, []);

  let cards = new Array(number).fill(number);

  return cards.map((card, i) => {
    return (
      <div
        key={i}
        className="card"
        ref={el => {
          cardEl.current[i] = el;
        }}
      >
        <div className="image" />
        <div className="text">
          <div />
          <div />
        </div>
      </div>
    );
  });
};

export default Card;
