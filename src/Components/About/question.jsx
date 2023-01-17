import { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

const Question = (props) => {
  const [rotate, setRotate] = useState("arrow_down");

  const RotateLogo = () => {
    if (rotate === "arrow_down") {
      setRotate("arrow_up");
    } else {
      setRotate("arrow_down");
    }
  };
  return (
    <div>
      <AccordionItem className="acc_item">
        <h2>
          <AccordionButton className="q_btn" onClick={RotateLogo}>
            <Box as="span" flex="1" textAlign="left" className="ques">
              {props.ques}
            </Box>
            <div className={rotate}>
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0002 27.9546L-2.38419e-07 4.66108e-05L15.0002 17.0455L30 4.66108e-05L15.0002 27.9546Z"
                  fill="url(#paint0_linear_544_284)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_544_284"
                    x1="30"
                    y1="27.9546"
                    x2="-10.5275"
                    y2="20.8156"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B2016B" />
                    <stop offset="1" stopColor="#1E149D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="q_ans">{props.ans}</div>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Question;
