import React, { useEffect, useState } from "react";

export const TitleScreenSlide = () => {
  const [index, setIndex] = useState(0);
  const principle = PRINCIPLES[index];

  useEffect(() => {
    const length = PRINCIPLES.length - 1;
    const cycleThroughSolidIndex = () => {
      setInterval(() => {
        setIndex((index) => {
          if (index === length) {
            return 0;
          }
          return index + 1;
        });
      }, 5000);
    };

    cycleThroughSolidIndex();
  }, []);

  return (
    <section
      data-background-video="/videos/title-screen-background.mp4"
      data-background-video-loop
      data-background-size="cover"
      data-background-repeat="repeat"
    >
      <div className="flex center">
        <div className="flex column gap-32 max-content">
          <div className="author">Dfind consulting fagkveld</div>
          <div>
            <div className="tactical-programming-action">
              <div>Tactical</div>
              <div>Programming</div>
              <div>Action</div>
            </div>
            <div>
              <h1 className="title">{renderSolid(index)} prinsippene</h1>
              <div className="active-principle">{principle}</div>
            </div>
          </div>
          <div className="edition-background">
            <strong>TYPESCRIPT</strong> EDITION
          </div>
          <div className="blink">Press start button</div>
        </div>
      </div>
    </section>
  );
};

const SOLID = ["S", "O", "L", "I", "D"];

const PRINCIPLES = [
  "Single responsibility principle",
  "Open-closed principle",
  "Liskov substitution principle",
  "Interface segregation principle",
  "Dependency inversion principle",
];

const renderSolid = (index) =>
  SOLID.reduce(
    (acc, cv, i) => (
      <span>
        <span>{acc}</span>
        <span className={index === i ? "red" : ""}>{cv}</span>
      </span>
    ),
    ""
  );
