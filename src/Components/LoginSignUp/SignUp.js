import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp({ LoginOrSignUp, setLoginOrSignUp }) {
  const navigate = useNavigate();
  const [FN, SetFN] = useState("");
  const [IN, SetIN] = useState("");
  const [ML, SetML] = useState("");
  const [MN, SetMN] = useState("");
  const [PD, SetPD] = useState("");
  const [CPD, SetCPD] = useState("");
  const [checkbox, SetCheckbox] = useState(false);
  const [proof, SetProof] = useState("");

  async function postUserDetails(e) {
    e.preventDefault();
    const formimgData = new FormData();
    formimgData.append("proof", proof);
    formimgData.append("name", FN);
    formimgData.append("institute", IN);
    formimgData.append("number", MN);
    formimgData.append("email", ML);
    formimgData.append("password", PD);

    if (checkbox) {
      if (PD === CPD) {
        if (proof !== "") {
          const config = {
            headers: { "content-type": "multipart/form-data" }
          };
          const response = await axios.post(
            "http://localhost:3000/signupuser",
            formimgData,
            config
          );
          const json = await response.json();
          console.log(json);
          if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            navigate("/");
            document.body.style.overflow = "auto";

            alert("SuccessFully Created Account", "success");
          } else {
            alert("Error");
          }
        } else {
          alert("Attach a valid Proof");
        }
      } else {
        alert("Passwords Not Matched");
      }
    } else {
      alert("Please agree the terms & conditions");
    }
    e.preventDefault();
  }

  return (
    <Container
      style={
        LoginOrSignUp === "SignUp" ? { display: "block" } : { display: "none" }
      }
    >
      <Wrap>
        <Close
          onClick={() => {
            document.body.style.overflow = "auto";
            setLoginOrSignUp("");
          }}
        ></Close>

        <form action="" method="" onSubmit={postUserDetails}>
          <div className="div_perin heading_perin">
            <h2 className="h2_perin">SIGN UP</h2>
            <p className="p_perin">
              Already Registered?{" "}
              <a className="a_perin" onClick={() => setLoginOrSignUp("Login")}>
                Login
              </a>
            </p>
          </div>
          <div className="div_perin name_home">
            <label className="label_perin" htmlFor="">
              Name
            </label>
            <br />
            <input
              onChange={(e) => {
                SetFN(e.target.value);
              }}
              className="input_perin"
              required={true}
              type="text"
              name="name"
            />
          </div>
          <div className="div_perin email">
            <label className="label_perin" htmlFor="">
              Email
            </label>
            <br />
            <input
              onChange={(e) => SetML(e.target.value)}
              className="input_perin"
              name="email"
              required={true}
              type="email"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Password
            </label>
            <br />
            <input
              onChange={(e) => SetPD(e.target.value)}
              className="input_perin"
              name="password"
              required={true}
              type="password"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Re-enter Password
            </label>
            <br />
            <input
              onChange={(e) => SetCPD(e.target.value)}
              className="input_perin"
              required={true}
              type="password"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Contact Number
            </label>
            <br />
            <input
              onChange={(e) => SetMN(e.target.value)}
              className="input_perin"
              required={true}
              type="number"
              name="number"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Name of the Institute
            </label>
            <br />
            <input
              onChange={(e) => SetIN(e.target.value)}
              className="input_perin"
              name="institute"
              required={true}
              type="text"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Proof of Enrollment in Institute
            </label>
            <br />
            <input
              //   onChange={handleFileChange}
              onChange={(e) => SetProof(e.target.files[0])}
              className="input_perin"
              name="proof"
              required={true}
              type="file"
            />
          </div>
          <div className="div_perin password">
            <br />
            <input
              onClick={(e) => SetCheckbox(true)}
              className="checkbox_perin"
              required={true}
              type="checkbox"
              name="checkbox"
            />
            <label className="" htmlFor="">
              I hereby declare that all the information provided by me are
              correct. I also agree to follow all the guidelines of the fest and
              agree to the fact that in case of any discrepancy, the decision of
              the organizers will be final and binding.
            </label>
          </div>
          <div className="div_perin">
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </Wrap>
    </Container>
  );
}

export default SignUp;

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
