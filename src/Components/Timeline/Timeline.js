import Carousel, { CarouselItem } from "./Carousel.js";
import "./Carousel.css";

const Timeline = () => {
  return (
    <div className="App" style={{ marginBottom: "10vh" }}>
      <Carousel>
        <CarouselItem>
          <h2 className="day">Day 1</h2>
          <p className="date">17/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 2</h2>
          <p className="date">18/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 3</h2>
          <p className="date">19/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 4</h2>
          <p className="date">20/02/2023</p>
        </CarouselItem>
        <CarouselItem>
          <h2 className="day">Day 5</h2>
          <p className="date">21/02/2023</p>
        </CarouselItem>
      </Carousel>
    </div>
  );
};
export default Timeline;
