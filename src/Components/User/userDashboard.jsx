import "./user.css";
import Avatar1 from "./avatars/Asset 1.svg";
import TeamCard from "./cards/team";
import IndividualCard from "./cards/individual";
// import Avatar2 from "./avatars/Avatar 2.svg";
// import Avatar3 from "./avatars/Avatar 3.svg";
// import Avatar4 from "./avatars/Avatar 4.svg";
// import Avatar5 from "./avatars/Avatar 5.svg";
// import Avatar6 from "./avatars/Avatar 6.svg";

const UserDashboard = () => {
  return (
    <div className="user_body">
      <div className="user_main">
        <div className="welcome">Welcome!</div>
        <div className="user_info">
          <div className="user_img">
            <img src={Avatar1} alt="error" />
          </div>
          <div className="details">
            <span className="name">Vivek Borole</span>
            <br />
            <span className="participation">
              Participated in <span className="name">5</span> events so far
            </span>
            <br />
            <div className="border" style={{ width: "208px" }}>
              <button className="logout">Logout</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="heading_suy">
          <span className="c2">Individual</span>&ensp; Participations
        </div>
        <br />
        <br />
        <div className="card_grid">
          <IndividualCard
            heading="Code Combat"
            content="ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
          <IndividualCard
            heading="1v1 aaja"
            content="Bohot baj raha tha ingame ab aaja 1v1"
          />
          <IndividualCard
            heading="1v1 aaja"
            content="Bohot baj raha tha ingame ab aaja 1v1"
          />
        </div>
        <br />
        <br />
        <div className="heading_suy">
          <span className="c2">Team</span>&ensp; Participations
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default UserDashboard;
