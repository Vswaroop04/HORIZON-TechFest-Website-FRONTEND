import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class EventsCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      responsive: [
        {
          breakpoint: 821,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };
    return (
      <Container>
        <h2>SPONSORS</h2>
        <Slider className="sponsors_slider_perin" {...settings}>
          <Wrap className="items">
            <img src="/images/Sample Poster 1.png" alt="poster1" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 2.png" alt="poster2" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 3.png" alt="poster3" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 1.png" alt="poster1" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 2.png" alt="poster2" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 1.png" alt="poster1" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 2.png" alt="poster2" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 3.png" alt="poster3" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 1.png" alt="poster1" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 2.png" alt="poster2" />
          </Wrap>
          <Wrap className="items">
            <img src="/images/Sample Poster 3.png" alt="poster3" />
          </Wrap>
        </Slider>
        <Button>VIEW ALL</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 70px;
  height: auto;
  margin-bottom: 100px;
  margin-left: 100px;
  margin-right: 100px;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 40px;
    line-height: 39px;
    text-align: center;
    margin-bottom: 100px;

    @media (max-width: 820px) {
      margin-bottom: 57px;
      font-size: 23px;
      font-weight: 900;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: center;
    }
    @media (max-width: 667px) {
      margin-bottom: 17px;
      font-size: 20px;
      font-weight: 900;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  @media (max-width: 667px) {
    margin-inline: 16px;
    margin-block: 37px;
    height: auto;
  }
`;
const Wrap = styled.a`
  position: relative;
  img {
    margin: auto;
    width: 80%;
    padding: 2.5px;
    border: 4px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(209, 45, 45, 0.92) 0%,
      #1e149d 65.43%
    );
  }
`;
const Button = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  display: flex;
  width: 210px;
  height: 55px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    rgba(209, 45, 45, 0.92) 0%,
    #1e149d 65.43%
  );

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(209, 45, 45, 0.92) 0%,
      #1e149d 65.43%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 820px) {
    width: 110px;
    height: 40px;
    font-size: 9px;
    font-weight: 900;
    line-height: 9px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 48px;
  }
  @media (max-width: 667px) {
    width: 89px;
    height: 23px;
    font-size: 6px;
    font-weight: 900;
    line-height: 6px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 21px;
    margin-bottom: 31px;
  }
`;
