import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../Host";
import { Backdrop } from "@mui/material";

function Register({
  register,
  setRegister,
  teamsize,
  eventid
}) {
  const host = Data.URL;
  const navigate = useNavigate();
  const rows = [];
  var [response, setResponse] = useState("");

  for (let i = 1; i < teamsize; i++) {
    rows[i] = i;
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (document.querySelector(".chkbx").checked) {
      if (localStorage["auth-token"]) {
        var formdata = {};
        document.querySelectorAll(".form-data-input").forEach((inp) => {
          formdata[inp.name] = inp.value;
        });
        const config = {
          headers: {
            "auth-token": localStorage["auth-token"],
            "content-type": "application/json"
          }
        };
        const response = await axios
          .post(`${host}/eventregister/${eventid}`, formdata, config)
          .then((res) => res.data)
          .catch((err) => err);
        setResponse(response.message);
        if (response.status) {
          navigate("/");
          document.body.style.overflow = "auto";
        }
      } else {
        setResponse("Please Login to Continue");
      }
    } else {
      setResponse("Please agree the terms & conditions");
    }
  }
  return (
    // <Container
    //   style={
    //     register === "Register" ? { display: "block" } : { display: "none" }
    //   }
    // >
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={register}
    >
      <Wrap>
        <Close
          onClick={() => {
            document.body.style.overflow = "auto";
            setRegister(false);
          }}
        ></Close>
        <form action="" method="" onSubmit={handleRegister}>
          <div className="div_perin heading_perin">
            <h2 className="h2_perin">Register</h2>
            <p className="p_perin">Team Participation</p>
            <p className="p_perin">{response}</p>
          </div>
          <div className="div_perin name_home">
            <label className="label_perin" htmlFor="">
              Team Name{" "}
            </label>
            <br />
            <input
              className="input_perin form-data-input"
              type="name"
              name="teamname"
              required={true}
              id=""
            />
          </div>
          <div className="div_perin email">
            <label className="label_perin" htmlFor="">
              Team Leader Email ID{" "}
            </label>
            <p>
              {" "}
              The value of this field is pre-filled and cannot be changed. Only
              the team leader needs to fill the form and in this case, it
              displays your email ID.
            </p>
            <br />
            <input
              className="input_perin form-data-input"
              type="email"
              name="leaderemail"
              id=""
              disabled={true}
              value={JSON.parse(localStorage["user"]).data.user.email}
            />
          </div>
          <div className="div_perin email">
            <br />
            <p>
              Please enter the email ID with which your teammate has registered
              on the website. If not, please ask your teammate to sign up & then
              fill the form.
            </p>
            <br />
          </div>
          {rows.map((i) => {
            return (
              <div className="div_perin email" key={i}>
                <label className="label_perin" htmlFor="">
                  Member {i} Email ID{" "}
                </label>
                <br />
                <input
                  className="input_perin form-data-input"
                  type="email"
                  required={true}
                  name={"email" + i}
                />
              </div>
            );
          })}
          <div className="div_perin password">
            <br />
            <input
              type="checkbox"
              className="checkbox_perin chkbx"
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
    </Backdrop>
    // {/* </Container> */}
  );
}
export default Register;

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
