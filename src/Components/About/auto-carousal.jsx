import { Component } from "react";
import Slider from "react-slick";

import img1 from "./SponsorImg/devfolio.png";
import img2 from "./SponsorImg/polygon.png";
import img3 from "./SponsorImg/Filecoin.png";
import img4 from "./SponsorImg/elearnmarkets.png";
import img5 from "./SponsorImg/macv.png";
import img6 from "./SponsorImg/noticwbard.png";
import img7 from "./SponsorImg/HoverRobotix.png";
import img8 from "./SponsorImg/portraysketch.png";
import img9 from "./SponsorImg/roostoo.png";
import img10 from "./SponsorImg/startupnews.png";
import img11 from "./SponsorImg/taskade.png";

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
      autoplaySpeed: 2500,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 924,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="spon_suy">
        <Slider {...settings}>
          <div>
            <div className="items_suy">
              <img className="glow" src={img1} alt="error" />
              <span>Platinum Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img2} alt="error" />
              <span>Gold Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img3} alt="error" />
              <span>Gold Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img4} alt="error" />
              <span>Gold Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img5} alt="error" />
              <span>Eyewear Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img6} alt="error" />
              <span>Media Partner</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img7} alt="error" />
              <span>Silver Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img8} alt="error" />
              <span>Silver Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img9} alt="error" />
              <span>Platform Sponsor</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img10} alt="error" />
              <span>Media Partner</span>
            </div>
          </div>
          <div>
            <div className="items_suy">
              <img src={img11} alt="error" />
              <span>Gold Sponsor</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
