import { Component } from "react";
import Slider from "react-slick";

import Try from "./logo.png";

import "./css/slick.css";
import "./css/slick-theme.css";

export default class AutoCarousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 924,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Platinum Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Gold Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Silver Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Godshot</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Vivek Borole</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={Try} alt="error" />
              <span>Jay Patel</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
