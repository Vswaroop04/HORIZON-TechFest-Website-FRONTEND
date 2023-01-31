import "./event.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "../Register/Register";
import RegisterSingle from "../Register/RegisterSingle";
import { Backdrop } from "@mui/material";

const SingleEvent = () => {
  let { id } = useParams();
  let T0 = [
    {
      Topic: "Not Found-Try Again"
    }
  ];

  let T1 = [
    {
      eventid: "63d7101a6859ccbede1b1264",
      eventname: "The Cadence Valour",
      image: "valorant.png",
      mode: "Online",
      details: [
        "Start Date: Feburary 08, 2023",
        "End Date: Feburary 16, 2023",
        "Mode of Conduct: Online",
        "Requirment: Discord ID"
      ],
      eventtype: "team",
      Topic: "Gaming Event",
      Content:
        "Amateur or pro, your opportunity to shine at Valorant is here! Cadence Valour is the flagship valorant event of “Horizon”. Participate in teams of 5.",
      Time: "9:00 PM",
      Prize: "6,000",
      TeamSize: 5,
      Participants: "0",
      Rules: [
        "The Game will be played on the latest patch of Valorant active at the time of the event.",
        "Each Match will be played with the Tournament Mode-On and timeouts active in the custom mode.",
        "The event will have either the Elimination or Double-Elimination Format depending on the number of participants.",
        "The map pool shall be the one followed by official Valorant Tournaments during the 2023 circuit.",
        "The Semi-final and Final shall be streamed on the designated Youtube channel.",
        "Any Undergraduate course student from any institute nationwide shall participate in this tournament.",
        '"Each team shall have only 5 members with only 1 emergency replacement allowed.',
        "Any team caught using malpractices will be disqualified.",
        "All updates and communication with the participants will be done through discord or Whatsapp as per the requirements at the time of the event. All Teams shall appoint one captain to be the point of contact."
      ],
      Themes: ["Will be live soon. Stay Tuned!"]
    }
  ];

  let T2 = [
    {
      eventid: "63d6e0e26859ccbedefe1ca7",
      eventname: "Code Combat",
      image: "codeCombat.png",
      mode: "Online",
      details: [
        "Date: Feburary 16, 2023",
        "Duration: 3 Hours",
        "Mode of Conduct: Online"
      ],
      eventtype: "individual",
      Topic: "Coding Event",
      Content:
        " Want to test out your DSA and Problem-Solving skills? The battle has begun, get ready for CodeCombat! 8 challenging problems with increasing difficulty levels and a total of 3 hours at hand.",
      Time: "5:30 PM",
      Prize: "4,500",
      TeamSize: 1,
      Participants: "0",
      Rules: [
        "This is an individual event and no external help is permissible during the contest.",
        "The contest would be hosted on hackerrank.com and the link would be shared with the students through the mail.",
        "No submissions will be accepted after the deadline of 3 hours.",
        "Any kind of copying can lead to disqualification.",
        "No form of communication channel is permitted.",
        "Any student found to be helping someone else would also be disqualified along with the cheating student.",
        "The organizers are permitted to call any participant after the event and ask any questions that they deem fit regarding the contest.",
        "All decisions made by the judges and the organizers are final and binding."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T3 = [
    {
      eventid: "63d6fcc16859ccbede0f2637",
      eventname: "Capture Point 5353",
      image: "capturePoint5353.png",
      mode: "Online",
      details: [
        "Start Date: Feburary 11, 2023",
        "End Date: Feburary 13, 2023",
        "Mode of Conduct: Hybrid"
      ],
      eventtype: "team",
      Topic: "CTF Event",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible! ",
      Time: "9:00 PM",
      Prize: "6,000",
      TeamSize: 2,
      Participants: "0",
      Rules: [
        "No Individual participation will be entertained.",
        "There will be two types of questions: Hunt type: Answers to these questions will be in any format and many cases related to in some form or other technology. ",
        "CTF type: Answers to these questions will have to be of the following format – flag{your_flag_here} or ctf{your_flag_here}.",
        "In general CTF style questions will contain a link to an external website.",
        "During the CTF we’ll be getting live logs of your answers so try to be creative as you might get a shout-out from the organizers.",
        "Scores of each question are different and the score will depreciate after every hour.",
        "You might have to disable the ad blocker, like the brave shields, for some questions.",
        "This is a team event and no external help is permissible during the contest.",
        "Any kind of copying can lead to disqualification. ",
        "Any student/team found to be helping someone else would also be disqualified along with the team of the cheating student.",
        "The organizers are permitted to call any team after the event and ask any questions that they deem fit regarding the contest.",
        "All decisions made by the organizers are final and binding."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T4 = [
    {
      eventid: "63d6fe756859ccbede103c22",
      eventname: "The Choice Matrix",
      image: "theChoiceMatrix.png",
      mode: "Online",
      details: [
        "Round 1 Date: Feburary 15, 2023",
        "Round 2 Date: Feburary 17, 2023",
        "Mode of Conduct: Online",
        "Duratiom (Each Round): 3 Hours"
      ],
      eventtype: "team",
      Topic: "Quiz",
      Content:
        "Get ready to debug! 36 hours, puzzling problems, and intense competition is all that is standing between you and the prizes. Compete in teams of 2 to Capture the Flag as quickly as possible! ",
      Time: "6:00 PM",
      Prize: "4,000",
      TeamSize: 2,
      Participants: "0",
      Rules: [
        "The teams must attend the Google meet from laptops only.",
        "During all the rounds, all the participants must attend Google Meet with a device equipped with a camera and it must be switched on at all times for participants.",
        "The team members must be visible at all times during the quiz.",
        "The team members will be provided with another meeting for discussion in later stages.",
        "Any kind of disturbance or use of unfair practices by a participant will not be tolerated and will result in immediate disqualification.",
        "No doubt during the event will be entertained.",
        "In case of any dispute, the decision of the organisers will be final and binding.",
        "Any further rules would be conveyed in due time."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T5 = [
    {
      eventid: "63d6ff016859ccbede108f5f",
      eventname: "CEO's Conference",
      image: "ceoConference.png",
      mode: "Offline",
      details: [
        "Round 1 Date: Feburary 09, 2023",
        "Round 2 Date: Feburary 10, 2023",
        "Mode of Conduct: Offline",
        "Venue: IIIT Vadodara - ICD"
      ],
      eventtype: "team",
      Topic: "Case Study",
      Content:
        "A two-day real-world problem-solving event. With 10 minutes to present your solution, are you up for the challenge? Participate in teams of 4. ",
      Time: "6:00 PM",
      Prize: "4,000",
      TeamSize: 4,
      Participants: "0",
      Rules: [
        "4 pools of 8 teams each would be created and each pool would be given a real-world case study 1 day before the event.",
        "The teams would have to come up with solutions to the given problems before the event.",
        "Each team would then be given 10 minutes to present their solution to the judges which would then be evaluated by the judges.",
        "The top 2 teams from each of the pools would advance to the next round.",
        "The final round would be played similarly among the selected 8 teams.",
        "Only original entries will be accepted otherwise the entry gets disqualified.",
        "No cross-campus teams will be allowed i.e., all members of one team should be students of only 1 institute.",
        "The presentation must not exceed a maximum of 10 minutes.",
        "Similarities among solutions can be tolerated to a certain extent, but an exact copy of any other group's solution will result in immediate disqualification.",
        "In case of any disputes, the decision of the organisers will be final."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T6 = [
    {
      eventid: "63d6ffc56859ccbede1107ba",
      eventname: "Hackoverflow",
      image: "Hackoverflow.png",
      mode: "Hybrid",
      details: [
        "Start Date: Feburary 17, 2023",
        "End Date: Feburary 19, 2023",
        "Mode of Conduct: Hybrid",
        "Duration: 36 Hours"
      ],
      eventtype: "team",
      Topic: "Development Event",
      Content:
        "48 hours to cook up innovative solutions to real-life problems and implement them using Android or Web development. This a golden opportunity to showcase your creative and development skills!  ",
      Time: "9:00 PM",
      Prize: "10,000",
      TeamSize: 4,
      Participants: "0",
      Rules: [
        "A team must contain exactly 4 members.",
        "No cross-campus teams will be allowed i.e., all members of one team should be students of only 1 institute.",
        "No submissions will be accepted after the deadline of 48 hours.",
        "Reuse of code/templates is allowed, but a link to the source code has to be provided with the submission. In case you are found not providing proper references, it will lead to your disqualification.",
        "The project must follow one of the given themes.",
        "The teams may use any communication channel they wish to, for communicating with their members.",
        "No team can collaborate with any other team, if found, it will lead to disqualification.",
        "Each team must present its ideas formally in the form of a video to the judges after the 48-hour time.",
        "The demonstration video must not exceed 10 minutes.",
        "Teams must stop hacking once the time is up. However, teams are allowed to debug and make small fixes to their programs after time is up. e.g., If during demonstrating your hack, you find a bug that breaks your application and the fix is only a few lines of code, it's okay to fix that. This code needs to be pushed to the repository.",
        "In case of any disputes, the decision of the organisers will be final."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T7 = [
    {
      eventid: "63d7033b6859ccbede13240b",
      eventname: "De5ignin4",
      image: "designing.png",
      mode: "Online",
      details: [
        "Start Date: Feburary 11, 2023",
        "End Date: Feburary 13, 2023",
        "Mode of Conduct: Hybrid",
        "Duration: 3 Days"
      ],
      eventtype: "individual",
      Topic: "Designing Event",
      Content:
        "Channelize your inner Picasso! Online graphic design and artwork contest accepting individual participation. Use any design software of your choice to create on the given theme. ",
      Time: "6:00 PM",
      Prize: "4,000",
      TeamSize: 1,
      Participants: "0",
      Rules: [
        "The deadline for the contest will be the 0:00 AM 14th of February. Deadlines can be extended under some circumstances.",
        "Only original artwork will be accepted otherwise the entry gets disqualified.",
        "Only one entry per person will be accepted.",
        "In case of multiple entries, the entry obtaining the maximum points will be considered.",
        "A short description of the design will be mandatory.",
        "Submission will be accepted in jpeg and png format along with the ai format or PSD format.",
        "Likes and comments will be added to the result along with the decision from the judges.",
        "In case of any dispute, decisions taken by the designing club or technical committee will be the final.",
        "The best posts will be uploaded on our Instagram, LinkedIn and FB pages."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T8 = [
    {
      eventid: "63d7054e6859ccbede146486",
      eventname: "SWOT The Trend",
      image: "swotTheTrend.png",
      mode: "Online",
      details: [
        "Start Date: Feburary 14, 2023",
        "End Date: Feburary 17, 2023",
        "Mode of Conduct: Hybrid",
        "Duration: 4 Days"
      ],
      eventtype: "individual",
      Topic: "Finance Event",
      Content:
        "Interested in trading? SWOT the Trends - the virtual trading event for those who are interested in everything finance. Get ready to analise the trends! ",
      Time: "9:15 AM",
      Prize: "4,000",
      TeamSize: 1,
      Participants: "0",
      Rules: [
        "The deadline for the contest will be the 17th of February. Deadlines can be extended under some circumstances.",
        "Only one entry per person will be allowed.",
        "Trades should only be made in stocks that are under the indices Nifty 50, Nifty 200, and Nifty 500.",
        "MIS (Margin intraday square-off) trades are not allowed.",
        "Trading in F&O (Future & Options) is not allowed.",
        "Short selling a stock is allowed.",
        "Real-time market prices will be used, and the participants cannot influence the price.",
        "Using automated means (including but not limited to harvesting bots, robots, parsers, spiders, or screen scrapers) to obtain, collect or access any information is strictly prohibited.",
        "In case of any dispute, decisions taken by the organisers will be the final."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
    }
  ];

  let T9 = [
    {
      eventid: "63d707516859ccbede159ec5",
      eventname: "CODM Resurgence",
      image: "codm.png",
      mode: "Online",
      details: [
        "Start Date: Feburary 08, 2023",
        "End Date: Feburary 16, 2023",
        "Mode of Conduct: Online",
        "Requirment: Discord ID"
      ],
      eventtype: "team",
      Topic: "Gaming Event",
      Content:
        "Guns loaded, armour equipped, meds ready! Call Of Duty: Resurgence aims at creating a competitive and fun experience. Participate in teams of 5 and get the maximum number of kills! ",
      Time: "9:00 PM",
      Prize: "6,000",
      TeamSize: 5,
      Participants: "0",
      Rules: [
        "The Game will be played on the latest version of Call of Duty Mobile currently available at the time of the event.",
        "Each Match will be played with the Domination Mode and no timeouts active.",
        "The event will have either the Elimination or Double-Elimination Format depending on the number of participants with the final being a Best of 5 matches.",
        "The map pool shall be the one followed by official Ranked playlists during the 2023 circuit.",
        "The Semi-final and Final shall be streamed on the designated Youtube channel.",
        "Any Undergraduate course student from any institute nationwide shall participate in this tournament.",
        "Each team shall have only 5 members with only 1 emergency replacement allowed.",
        "Any team caught using malpractices will be disqualified.",
        "All updates and communication with the participants will be done through discord or WhatsApp as per the requirements at the time of the event. All Teams shall appoint one captain to be the point of contact."
      ],
      Themes: ["Will be live on 17th February 2023. Stay Tuned!"]
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

  const [open, setOpen] = useState(false);
  const [big, setBig] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setBig(e.target.src);
    console.log(e.target.src);
    setOpen(!open);
  };

  const [register, setRegister] = useState(false);
  const [registersingle, setRegistersingle] = useState(false);

  function handleClickRegister() {
    document.body.style.overflow = "hidden";
    if (events[0].eventtype === "team") {
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
                  src={"/images/" + Event.image}
                  alt="poster1"
                  onClick={handleToggle}
                />
                {/* </div> */}
                <div className="s1bdiv">
                  <h2 className="topic">{Event.eventname}</h2>
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
                    <h3 className="details-title"> Mode</h3>
                    <p className="details-num">
                      &nbsp;&nbsp;&nbsp;{Event.mode}&nbsp;&nbsp;
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="event-title">DETAILS</h1>

              <div className="details-box">
                {/* <p className="content-box"> */}
                <div className="inside-box">
                  <p className="">
                    {Event.details?.map(function (element) {
                      return <p>{element}</p>;
                    })}
                  </p>
                </div>
                <div className="inside-box">
                  <p className="">
                    {Event.details?.map(function (element) {
                      return <p>{element}</p>;
                    })}
                  </p>
                </div>
              </div>

              <h1 className="event-title">RULES & REGULATIONS </h1>
              <div className="s2div">
                <p className="content-box">
                  {Event.Rules?.map(function (element) {
                    return <p>{element}</p>;
                  })}
                </p>
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
              teamsize={Event.TeamSize}
              eventid={Event.eventid}
            />
            <RegisterSingle
              registersingle={registersingle}
              setRegistersingle={setRegistersingle}
              eventid={Event.eventid}
            />
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <img className="bigImg" src={big} alt="error" />
            </Backdrop>
          </>
        );
      })}
      ;
    </div>
  );
};

export default SingleEvent;
