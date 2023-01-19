const TeamCard = (props) => {
  return (
    <div className="border" style={{ width: "632px", margin: "20px" }}>
      <div className="teamCard">
        <h2 className="card_heading c2">{props.heading}</h2>
        <h3 className="status">Completed</h3>
        <br />
        <p className="card_content">{props.content}</p>
        <h2 className="teamName">
          Team <span className="c2">{props.teamName}</span>
        </h2>
        <p className="teamMembers">
          {props.leader}
          <br />
          {props.m1}
          <br />
          {props.m2}
          <br />
          {props.m3}
          <br />
          {props.m4}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
