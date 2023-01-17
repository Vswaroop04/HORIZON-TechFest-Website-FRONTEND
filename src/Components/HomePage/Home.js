import styled from "styled-components";
import EventsCarousel from "./EventsCarousel";
import SponsorsCarousel from "./SponsorsCarousel";
import Header from "../Header/Header";

function Home() {
  return (
    <Container>
      <Wrap>
        <Description>
          <Title>PRAVINYA</Title>
          <Data>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            repellendus ratione quaerat minima suscipit repudiandae dolores
            autem, assumenda, dolorum ducimus accusamus eligendi maxime
            voluptatibus maiores officia harum eaque. Quia, incidunt!
          </Data>
          <Button>Know More</Button>
        </Description>
      </Wrap>
      <NumTag>
        <Event>
          <EventNum>10</EventNum>
          <EventName>events</EventName>
        </Event>
        <Price>
          <PriceNum>35K+</PriceNum>
          <PriceName>prizes</PriceName>
        </Price>
        <Days>
          <DaysNum>15</DaysNum>
          <DaysName>days</DaysName>
        </Days>
      </NumTag>

      <ComboSection>
        <About>
          <img src="/images/about-illustration.svg" alt="illustration"></img>
          <Content>
            <h2>
              About <span>Pravinya</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              iure doloribus ut quasi maiores, ad magni quod accusantium atque
              odio porro numquam, repellendus quo delectus distinctio. Optio
              esse aut recusandae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              iure doloribus ut quasi maiores, ad magni quod accusantium atque
              odio porro numquam.
            </p>
            <Button className="About_Button">Read More</Button>
          </Content>
        </About>
        <EventsCarousel />

        <SponsorsCarousel></SponsorsCarousel>
      </ComboSection>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  font-family: "Bujji", sans-serif;
  height: 100%;
  width: 100%;
`;

// Wrap Css
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  background-image: url("./images/background.svg");

  @media (max-width: 667px) {
    background-image: none;
    display: block;
    width: 100vw;
    height: auto;
  }
`;
const Description = styled.div`
  max-width: 820px;
  color: white;
  padding-left: 76px;
  /* margin-top: 80px; */

  @media (max-width: 667px) {
    width: 100vw;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const Title = styled.div`
  height: 92px;
  font-size: 90px;
  font-weight: 900;
  margin: 26px 0 26px;

  @media (max-width: 667px) {
    font-size: 25px;
    font-weight: 900;
    line-height: 25px;
    text-align: left;
    margin: 0;
    height: auto;
  }
`;
const Data = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #b5b0b0;
  margin: 26px 0 26px;

  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    margin: 20px 0 20px;
  }
`;
const Button = styled.div`
  display: flex;
  width: 210px;
  height: 55px;
  margin: 26px 0 26px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(225deg, #b2016b, #1e149d);

  &:hover {
    background: linear-gradient(99.32deg, #b2016b 0%, #5346f8 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 667px) {
    width: 89px;
    height: 23px;
    font-size: 6px;
    font-weight: 900;
    line-height: 6px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

// Numtag CSS

const Days = styled.div`
  padding-right: 150px;

  @media (max-width: 667px) {
    padding-right: 38px;
  }
`;

const DaysNum = styled.div`
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const DaysName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Price = styled.div``;

const PriceNum = styled.div`
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const PriceName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Event = styled.div`
  padding-left: 150px;

  @media (max-width: 667px) {
    padding-left: 38px;
  }
`;

const EventNum = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  height: 65px;
  color: white;

  @media (max-width: 667px) {
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: auto;
  }
`;

const EventName = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #b5b0b0;

  @media (max-width: 667px) {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const NumTag = styled.div`
  height: 213px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #b2016b 37.74%, #1e149d 93.02%);

  @media (max-width: 667px) {
    width: 100vw;
    height: 60px;
  }
`;

// ComboSection CSS

const ComboSection = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
`;
const About = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    float: left;
    height: 500.0043029785156px;
    width: 497.67254638671875px;
    border-radius: 0px;
    margin-left: 80px;
    padding-right: 25px;
    margin-right: 100px;

    @media (max-width: 667px) {
      display: none;
    }
  }
  @media (max-width: 667px) {
    height: auto;
  }
`;
const Content = styled.div`
  padding-right: 140px;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 40px;
    line-height: 39px;
    padding-top: 37px;

    span {
      background: linear-gradient(99.32deg, #b2016b 0%, #5346f8 119.64%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media (max-width: 667px) {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #b5b0b0;
    padding-top: 25px;

    @media (max-width: 667px) {
      font-family: Poppins;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
      text-align: center;
      padding-top: 13px;
    }
  }

  .About_Button {
    @media (max-width: 667px) {
      margin: 17px auto;
    }
  }

  @media (max-width: 667px) {
    padding-right: 0;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
