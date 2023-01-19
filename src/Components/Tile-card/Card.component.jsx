import "./Card.component.css";

const Card = (props) => {
  return (
    <div className="card-list">
      <div className="card-container">
        <h2 className="heading_vis">{props.heading}</h2>
        <p className="content_vis">{props.content}</p>
        <button className="view-button_vis">
          <a href={props.link}>
            <h3 className="button-text_suy">VIEW</h3>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
