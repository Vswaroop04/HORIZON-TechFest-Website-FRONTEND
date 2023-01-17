import React from "react";
// import {
//   Box,
//   Box2,
//   Container,
//   Row,
//   Heading2,
//   Column,
//   FooterLink,
//   Heading,
//   Column2,
//   Column3,
//   Foot
// } from "./Footerstyles";
import "./Footer.css";
import footerlogo from "../Images/download-modified.png";

const Footer = () => {
  return (
    <div className="footer_body">
      <div className="footer_main">
        <div className="footer_links">
          <span className="footer_heading">Useful Links</span>
          <a href="">Events</a>
          <a href="">Timeline</a>
          <a href="">FAQs</a>
          <a href="">Institute Website</a>
        </div>
        <div className="footer_links">
          <span className="footer_heading">Connect</span>
          <a href="">Instagram</a>
          <a href="">Discord</a>
          <a href="">Email</a>
        </div>
        <div className="footer_together">
          <img className="footer_img1" src={footerlogo} alt="iiitv-icd" />
          <div className="footer_clg">
            <span className="footer_heading">
              Indian Institute of Information Technology Vadodara -
              International Campus Diu
            </span>
            <span className="footer_add">
              Education Hub, Kevdi, Diu - 362520.
            </span>
          </div>
        </div>
        <img className="footer_img2" src={footerlogo} alt="iiitv-icd" />
      </div>
      <div className="footer_end">Designed by Vector | Developed by Dcodr</div>
    </div>
    // <Foot>
    //   <Box>
    //     <Container>
    //       <Row>
    //         <Column>
    //           <Heading>Useful Links</Heading>
    //           <FooterLink href="/events">Events</FooterLink>
    //           <FooterLink href="/timeline">Timeline</FooterLink>
    //           <FooterLink href="/about">FAQs</FooterLink>
    //           <FooterLink href="http://diu.iiitvadodara.ac.in/">
    //             Institute Website
    //           </FooterLink>
    //         </Column>
    //         <Column>
    //           <Heading>Connect</Heading>
    //           <FooterLink href="#">Instagram</FooterLink>
    //           <FooterLink href="#">Discord</FooterLink>
    //           <FooterLink href="#">Email</FooterLink>
    //         </Column>
    //         <Column2>
    //           <Heading>
    //             Indian Institute Of Information Technology Vadodara -
    //             International Campus Diu
    //           </Heading>
    //           <FooterLink href="https://goo.gl/maps/WcJZh9DHBVq9UgAw9">
    //             Education Hub, Kevdi, Diu - 362520
    //           </FooterLink>
    //         </Column2>
    //         <Column3>
    //           <img src={footerlogo} alt="iiitv-icd" />
    //         </Column3>
    //       </Row>
    //       <Box2>
    //         <Heading2>Designed by Vector | Developed by DCODR</Heading2>
    //       </Box2>
    //     </Container>
    //   </Box>{" "}
    // </Foot>
  );
};
export default Footer;
