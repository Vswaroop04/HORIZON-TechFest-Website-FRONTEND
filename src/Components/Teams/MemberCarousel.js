import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MemberCard from "./MemberCard";
import { MemberNames } from "./MemberNames";

export default function EventsCarousel({ teamName }) {
  // render() {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1
  };
  const length = teamName.firstName.length;

  return (
    <Container>
      <Slider {...settings}>
        {teamName.firstName.map(function (firstName, index) {
          if (index % 2 === 0 && index !== length - 1)
            return (
              <Wrap className="perin">
                <UpperCard>
                  <MemberCard
                    firstName={teamName.firstName[index]}
                    lastName={teamName.lastName[index]}
                  />
                </UpperCard>
                <BottomCard>
                  <MemberCard
                    firstName={teamName.firstName[index + 1]}
                    lastName={teamName.lastName[index + 1]}
                  />
                </BottomCard>
              </Wrap>
            );
          else {
            if (index === length - 1 && length % 2 !== 0) {
              console.log("hello");
              return (
                <Wrap className="perin">
                  <UpperCard>
                    <MemberCard
                      firstName={teamName.firstName[index]}
                      lastName={teamName.lastName[index]}
                    />
                  </UpperCard>
                </Wrap>
              );
            }
            return;
          }
        })}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
const Wrap = styled.div``;
const UpperCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  height: 298px;
`;
const BottomCard = styled.div`
  display: flex;
  justify-content: center;
  height: 298px;
`;
