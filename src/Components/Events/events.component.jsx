import Card from "../Tile-card/Card.component";
import "./events.component.css";

const Events = () => {
  return (
    <div>
      <div className="event-page">
        <h1 className="events-header">Technical</h1>
        <div className="events_cards">
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
            link="/event/T1"
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
        </div>

        <h1 className="events-header">Gaming</h1>
        <div className="events_cards">
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
            link="/event/T2"
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
        </div>

        <h1 className="events-header">Designing</h1>
        <div className="events_cards">
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
        </div>
        <h1 className="events-header">Talks</h1>
        <div className="events_cards">
          <Card
            heading="Hackoverflow"
            content="sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit."
          />
        </div>
      </div>
      <div className="events-timeline">
        <div className="event-div one">
          <h2 className="timeline-heading">Timeline</h2>
          <h4 className="timeline-content">
            Sync your schedules with timeline, so that you miss nothing!
          </h4>
        </div>
        <div className="event-div two">
          <a href="/timeline">
            {" "}
            <button className="timeline-button">
              <h4 className="timeline-button-text">View timeline</h4>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
