import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SignUp({ LoginOrSignUp, setLoginOrSignUp }) {
  const navigate = useNavigate();
  const [FN, SetFN] = useState("");
  const [IN, SetIN] = useState("");
  const [ML, SetML] = useState("");
  const [MN, SetMN] = useState("");
  const [PD, SetPD] = useState("");
  const [CPD, SetCPD] = useState("");
  const [proof, SetProof] = useState({ preview: "", data: "" });
  const [checkbox, SetCheckbox] = useState(false);

  async function postUserDetails(e) {
    e.preventDefault();
    let formData = {
      name: FN,
      institute: IN,
      number: MN,
      email: ML,
      password: PD,
      image: proof.data
    };
    const formimgData = new FormData();
    formimgData.append("file", proof.data);
    formimgData.append("name", FN);
    formimgData.append("institute", IN);
    formimgData.append("number", MN);
    formimgData.append("email", ML);
    formimgData.append("password", PD);

    console.log(formimgData.get("file"));
    var data = JSON.stringify(formData);
    console.log(data);
    console.log(proof.data);

    // formData.append("file", proof.data);
    // console.log(proof);
    if (checkbox) {
      if (PD === CPD) {
        const response = await fetch("http://localhost:3000/signupuser", {
          method: "POST",
          headers: {},
          formimgData
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          // Save the auth token and redirect
          localStorage.setItem("token", json.authtoken);
          navigate("/");
          alert("SuccessFully Created Account", "success");
        } else {
          alert("Error");
        }
        //save token of user
        console.log(json.authtoken);
        localStorage.setItem("auth-token", json.authtoken);
        navigate("/");
      } else {
        alert("Passwords Not Matched");
      }
    } else {
      alert("Please agree the terms & conditions");
    }

    e.preventDefault();
  }
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    };
    SetProof(img);
  };

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
              onChange={(e) => SetFN(e.target.value)}
              className="input_perin"
              type="text"
              name=""
              id=""
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
              type="email"
              name=""
              id=""
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
              type="password"
              name=""
              id=""
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
              type="password"
              name=""
              id=""
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
              type="number"
              name=""
              id=""
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
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Proof of Enrollment in Institute
            </label>
            <br />
            <input
              onChange={handleFileChange}
              className="input_perin"
              type="file"
              name=""
              id=""
            />
          </div>
          <div className="div_perin password">
            <br />
            <input
              onClick={(e) => SetCheckbox(true)}
              className="checkbox_perin"
              type="checkbox"
              name=""
              id=""
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
