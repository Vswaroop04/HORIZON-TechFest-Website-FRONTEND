const IndividualCard = (props) => {
  return (
    <div className="border" style={{ width: "632px", margin: "20px" }}>
      <div className="indiCard">
        <h2 className="card_heading c2">{props.heading}</h2>
        <h3 className="status">Completed</h3>
        <br />
        <p className="card_content">{props.content}</p>
      </div>
    </div>
  );
};

export default IndividualCard;
