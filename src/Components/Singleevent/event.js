import "./event.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleEvent = () => {
  let { id } = useParams();
  let T0 = [
    {
      Topic: "Not Found-Try Again"
    }
  ];
  let T1 = [
    {
      Topic: "Hackoverflow",
      Content:
        " sollkitudin nibh sit amet cornmxio nulla fæilisi nunun vehicula ipsu o arcu cursus congue mouris rhorcus cEnean vel  mowis pellentesque pulvinar pellentesque",
      Time: "0:00 AM",
      Prize: "12000",
      TeamSize: "4",
      Participants: "26",
      Rules:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Themes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte"
    }
  ];

  let T2 = [
    {
      Topic: "overflowHack",
      Content:
        " sollkitudin nibh sit amet cornmxio nulla fæilisi nunun vehicula ipsu o arcu cursus congue mouris rhorcus cEnean vel  mowis pellentesque pulvinar pellentesque",
      Time: "0:00 AM",
      Prize: "12000",
      TeamSize: "4",
      Participants: "26",
      Rules:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Themes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte"
    }
  ];

  let Tnotfound = [
    {
      Topic: "Not Found-try again"
    }
  ];
  var [events, setevent] = useState(T0);
  useEffect(() => {
    if (id === "T1") {
      setevent(T1);
    }

    if (id === "T2") {
      setevent(T2);
    }
  }, [id]);

  return (
    <div className="single-event">
      {events.map((Event, idx) => {
        return (
          <div className="sdiv">
            <div className="s1div">
              {/* <div className="s1adiv"> */}
              <img
                className="Posterimg"
                src="/images/Sample Poster 1.png"
                alt="poster1"
              />
              {/* </div> */}
              <div className="s1bdiv">
                <h2 className="topic">{Event.Topic}</h2>
                <p className="eventdesc">{Event.Content}</p>
                <div className="details-event">
                  <h3 className="details-title">Prize Pool &nbsp;</h3>
                  <p className="details-num">{Event.Prize}</p>
                </div>
                <div className="details-event">
                  <h3 className="details-title"> Team Size &nbsp;</h3>
                  <p className="details-num">
                    &nbsp;&nbsp;&nbsp;&nbsp;{Event.TeamSize}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
                <div className="details-event">
                  <h3 className="details-title"> Particpants</h3>
                  <p className="details-num">
                    &nbsp;&nbsp;&nbsp;{Event.Participants}&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <h1 className="event-title">RULES & REGULATIONS </h1>
            <div className="s2div">
              <p className="content-box">{Event.Rules}</p>
            </div>
            <h1 className="event-title"> THEMES </h1>
            <div className="s2div">
              <p className="content-box">{Event.Themes}</p>
            </div>
            <div className="single_vis">
              <button className="single-viewbutton">
                <p className="single-buttontext"> Register </p>
              </button>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default SingleEvent;
