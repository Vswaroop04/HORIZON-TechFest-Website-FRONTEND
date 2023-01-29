const IndividualCard = (props) => {
  return (
    <div className="indiCard">
      <div className="card_heading">
        <div className="c2">{props.heading}</div>
        <div className="status">Completed</div>
      </div>
      <div className="card_content">{props.content}</div>
      <div></div>
    </div>
  );
};

export default IndividualCard;
