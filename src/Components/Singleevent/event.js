import "./event.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "../Register/Register";
import RegisterSingle from "../Register/RegisterSingle";

const SingleEvent = () => {
  let { id } = useParams();
  let T0 = [
    {
      Topic: "Not Found-Try Again"
    }
  ];
  let T1 = [
    {
      eventid: "63c2459be24f970861a2590d",
      eventtype: "team",
      Topic: "CTF",
      Content:
        " sollkitudin nibh sit amet cornmxio nulla fæilisi nunun vehicula ipsu o arcu cursus congue mouris rhorcus cEnean vel  mowis pellentesque pulvinar pellentesque",
      Time: "0:00 AM",
      Prize: "12000",
      TeamSize: 2,
      Participants: "26",
      Rules:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Themes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte"
    }
  ];

  let T2 = [
    {
      eventid: "63bf91a5b96674e099da1c6c",
      eventtype: "individual",
      Topic: "Hackoverflow2",
      Content:
        " sollkitudin nibh sit amet cornmxio nulla fæilisi nunun vehicula ipsu o arcu cursus congue mouris rhorcus cEnean vel  mowis pellentesque pulvinar pellentesque",
      Time: "0:00 AM",
      Prize: "12000",
      TeamSize: 1,
      Participants: "26",
      Rules:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Themes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte"
    }
  ];
  var [events, setevent] = useState(T0);
  useEffect(() => {
    let x = T0;
    try {
      x = eval(id);
    } catch {}
    setevent(x);
  }, [id]);

  const [register, setRegister] = useState(false);
  const [registersingle, setRegistersingle] = useState(false);

  function handleClickRegister() {
    document.body.style.overflow = "hidden";
    if (events[0].eventtype !== "team") {
      setRegister(true);
    } else {
      setRegistersingle(true);
    }
  }

  return (
    <div className="single-event">
      {events.map((Event, idx) => {
        return (
          <>
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

              <h1 className="event-title">DETAILS</h1>

              <div className="details-box">
                {/* <p className="content-box"> */}
                <div className="inside-box">
                  <p>
                    <span>Round 1 Date:</span> February 8, 2023
                  </p>
                  <p>
                    {" "}
                    <span>Round 2 Date:</span> February 8, 2023
                  </p>
                </div>
                <div className="inside-box">
                  <p>
                    <span>Mode of conduct:</span> Offline
                  </p>
                  <p>
                    <span>Venue:</span> IIITV-ICD premises, Education Hub, Diu
                  </p>
                </div>
                {/* </p> */}
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
                <button
                  className="single-viewbutton"
                  onClick={handleClickRegister}
                >
                  <p className="single-buttontext"> Register </p>
                </button>
              </div>
            </div>
            <Register
              register={register}
              setRegister={setRegister}
              teamsize={events[0].TeamSize}
              eventid={events[0].eventid}
            />
            <RegisterSingle
              registersingle={registersingle}
              setRegistersingle={setRegistersingle}
              eventid={events[0].eventid}
            />
          </>
        );
      })}
      ;
    </div>
  );
};

export default SingleEvent;
