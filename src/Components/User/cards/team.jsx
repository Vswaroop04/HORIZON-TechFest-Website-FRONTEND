const TeamCard = (props) => {
  return (
    <div className="teamCard">
      <div className="card_heading">
        <div className="c2">{props.heading}</div>
        <div className="status">{props.status}</div>
      </div>
      <div className="card_content">{props.content}</div>
      <div className="teamName">
        Team <span className="c2">{props.teamName}</span>
      </div>
      <div className="card_content">
        <div>Leader:{props.leader}</div>
        {props.members.map((output) => (
          <div>Member:{output}</div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
