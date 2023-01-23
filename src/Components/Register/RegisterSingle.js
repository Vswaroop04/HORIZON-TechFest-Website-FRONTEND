import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterSingle({ registersingle, setRegistersingle, eventid }) {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    var chkbx = document.querySelectorAll(".cb");
    for (let i = 0; i < 2; i++) {
      if (!chkbx[i].checked) {
        alert("Please tick the check box");
        return;
      }
    }
    console.log(localStorage["auth-token"]);
    if (localStorage["auth-token"]) {
      const config = {
        headers: {
          "auth-token": localStorage["auth-token"]
        }
      };
      const response = await axios
        .post(`http://localhost:3000/eventregister/${eventid}`, {}, config)
        .then((res) => res.data)
        .catch((err) => err);
      alert(response.message);
      if (response.status) {
        document.body.style.overflow = "auto";
        navigate("/");
      }
    } else {
      alert("Please Login to Continue");
    }
  }

  return (
    <Container
      style={
        registersingle === "Register"
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <Wrap>
        <Close
          onClick={() => {
            document.body.style.overflow = "auto";
            setRegistersingle("");
          }}
        ></Close>
        <form action="" method="" onSubmit={handleRegister}>
          <div className="div_perin heading_perin">
            <h2 className="h2_perin">Register</h2>
            <p className="p_perin">Individual Participation</p>
          </div>
          <div className="div_perin name_home">
            <p className="">Register for this event ?</p>

            <input
              type="checkbox"
              className="checkbox_perin cb"
              name=""
              required={true}
              value=""
            />
            <br />

            <label className="" for="">
              {" "}
              Yes
            </label>
          </div>
          <div className="div_perin password">
            <input
              type="checkbox"
              className="checkbox_perin cb"
              id=""
              required={true}
              name=""
              value=""
            />
            <br />
            <label for="">
              {" "}
              I hereby declare that all the information provided by me are
              correct. I also agree to follow all the guidelines of the fest and
              agree to the fact that in case of any discrepancy, the decision of
              the organizers will be final and binding.
            </label>
          </div>
          <div className="div_perin">
            <button type="submit">Register</button>
          </div>
        </form>
      </Wrap>
    </Container>
  );
}
export default RegisterSingle;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(7, 7, 7, 0.75);
  z-index: 2;
  font-family: "bujji", sans-serif;
`;
const Wrap = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  margin: auto;
  position: relative;
  color: white;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    114.88deg,
    #b2016b 9.29%,
    #1e149d 49.91%,
    #b2016b 89.51%
  );
  display: flex;

  justify-content: center;

  .div_perin {
    overflow: auto;

    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 80px;
    padding-right: 80px;
    .label_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);
    }
    .input_perin {
      width: 100%;
      height: 46px;
      border: 4px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(90deg, #b2016b, #1e149d);
      padding-left: 4px;
    }
    .input_perin:focus-visible {
      outline: none;
    }

    .checkbox_perin {
      width: 25px;
      height: 25px;
    }
  }
  button {
    margin: auto;
    display: flex;
    width: 150px;
    height: 55px;
    color: white;
    font-weight: 900;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(90deg, #b2016b 46.26%, #1e149d 94.71%);
    border: 0px;
    margin-top: 20px;

    &:hover {
      background: transparent;
      border: 2px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
    }
  }
  .heading_perin {
    text-align: center;
    line-height: 44px;
    .h2_perin {
      font-size: 45px;
      font-weight: 900;
      margin-top: 80px;
    }
    .p_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);
      .a_perin {
        cursor: pointer;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        text-decoration: underline;
        color: #fc0198;
        font-weight: bold;
      }
    }
  }
`;
/* Line 2 */

const Close = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  color: black;
  background-color: #dbdbdb;
  opacity: 0.7;
  cursor: pointer;
`;
