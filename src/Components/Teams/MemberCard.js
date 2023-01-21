import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function MemberCard({ firstName, lastName }) {
  return (
    <Container>
      <MemberDetails>
        <img className="member_image" src="/images/member_image.png" alt="" />
        <h3 className="member_fName">{firstName}</h3>
        <h3 className="member_lName">{lastName}</h3>
        <Image>
          <LinkedInIcon />
          <EmailIcon />
        </Image>
      </MemberDetails>
    </Container>
  );
}

export default MemberCard;

const Container = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
  width: 208px;
  height: 280px;
`;
const MemberDetails = styled.div`
display: flex;
align-items: center;
${"" /* justify-content: center; */}
flex-direction: column;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(225deg, #B2016B, #1E149D);
  position: relative;
  right: -15px;
  width: 208px;
  height: 280px;
  bottom: -15px;
  .member_image {
    padding-left: 17px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 34px;
    width: 100%;
    height: 50%;
  }
  .member_fName, .member_lName {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    rgba(255, 255, 255, 1);
    font-weight: 400;
  }
`;
const Image = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;
