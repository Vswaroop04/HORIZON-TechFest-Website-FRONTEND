import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import prev from "./prev.png";
import next from "./next.png";
import linedate from "./linedate.png";
import "./Carousel.css";

export const CarouselItem = ({ children, width }, props) => {
  var date = new Date();
  var month = 2;
  var day = 17;

  if (month === 2) {
    if (day === 17 || day === 18 || day === 19 || day === 20 || day === 21) {
      var class_name = "carousel-item";
    }
  } else {
    class_name = "carousel-item-active";
  }
  return (
    <div className={class_name} style={{ width: width }}>
      {children}
      <h2> {props.class}</h2>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  let Day1 = [
    {
      Topic: "Hackoverflovg, De5igne4",
      Content:
        "Themes of Hackeroverflow and De5igne4 releases. Call of Duty, Cadence Valour team registration commences.",
      Time: "0:00 AM"
    },
    {
      Topic: "Inaguration",
      Content:
        "Inauguration of Technical Fest @ Malala Auditorium. Do not forget to be there on time and witness a blast!",
      Time: "4:00 PM"
    },
    {
      Topic: "Ignitor 3.O",
      Content: "Ignitor 3.O talk @ Malala Auditorium.",
      Time: "6:00 PM"
    }
  ];
  let Day2 = [
    {
      Topic: "CS: Cannon Crev•z",
      Content:
        "   Team registrations for CS: Cannon Crew and Capture Point 5353 begin Code Combat registration ends.",
      Time: "0:00 AM"
    },
    {
      Topic: "Code Combat",
      Content:
        "Code combat begins! Be ready to indulge into a breathtaking ride into problem solving. Contest ends at 12:30 PM.",
      Time: "11:00 AM"
    }
  ];
  let Day3 = [
    {
      Topic: "Hackoverflow",
      Content:
        "Developers buckle up your skills, here starts the most awaited 48 hours long hackathon with grand celebration.",
      Time: "9:00 AM"
    }
  ];
  let Day4 = [
    {
      Topic: "Hackoverflow",
      Content: "Phew! the 48 hours are up. Ending ceremony for hackoverflow.",
      Time: "9:00 PM"
    }
  ];
  let Day5 = [
    {
      Topic: "Hackoverflow",
      Content: "Phew! the 48 hours are up. Ending ceremony for hackoverflow.",
      Time: "9:00 PM"
    }
  ];

  useEffect(() => {
    if (activeIndex === 0) {
      setdays(Day1);
    }
    if (activeIndex === 1) {
      setdays(Day2);
    }
    if (activeIndex === 2) {
      setdays(Day3);
    }
    if (activeIndex === 3) {
      setdays(Day4);
    }
    if (activeIndex === 4) {
      setdays(Day5);
    }
  }, [activeIndex]);

  var [days, setdays] = useState(Day1);
  const renderListOfUserNames = (names) => {
    return names.map((name) => <li>{name}</li>);
  };
  return (
    <div className="hello">
      <div className="temp">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 10}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="temp1">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 40}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="temp2">
        <div {...handlers} className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 20}vw)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <div {...handlers} className="carousel carousel1">
          <div className="indicators">
            <img
              className="linedate"
              src={linedate}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              alt="previous"
            />
            <div className="arrows">
              <img
                className="img1"
                src={prev}
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
                alt="previous"
              />

              <img
                className="img2"
                src={next}
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>
      <div classname="outer-cards">
        {days.map((Day1, idx) => {
          return (
            <div className="card-listall">
              <div className="cardevent">
                <p className="time">{Day1.Time}</p>

                <h2 className="heading">{Day1.Topic}</h2>
                <p className="time1">{Day1.Time}</p>
                <p className="content">{Day1.Content}</p>

                <button className="view-button">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MnJ2cGNjNzMwODVtNWQ4cjQ0ODUzc2k2OTMgZmFtaWx5MDEyNDIyOTA2MDU4NzAyNTU0ODdAZw&amp;tmsrc=family01242290605870255487%40group.calendar.google.com"
                  >
                    <h3 className="button-text">Add to Calendar</h3>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

// with active index i want to do if(activeindex == 1) {var day = "day1"}
