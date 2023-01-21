import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SignIn({ LoginOrSignUp, setLoginOrSignUp }) {
  const navigate = useNavigate();

  const [ML, SetML] = useState("");
  const [PD, SetPD] = useState("");

  async function postUserDetails(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: ML,
        password: PD
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      //save token of user
    } else {
      alert("Invalid credentials");
    }
    localStorage.setItem("auth-token", json.authtoken);

    alert("SuccessFully login", "success");
    navigate("/");
  }

  return (
    <Container
      style={
        LoginOrSignUp === "Login" ? { display: "block" } : { display: "none" }
      }
    >
      <Wrap>
        <Close
          onClick={() => {
            document.body.style.overflow = "auto";
            return setLoginOrSignUp("");
          }}
        ></Close>

        <form action="" method="" onSubmit={postUserDetails}>
          <div className="div_perin heading_perin">
            <h2 className="h2_perin">LOGIN</h2>
            <p className="p_perin">
              New User?{" "}
              <a className="a_perin" onClick={() => setLoginOrSignUp("SignUp")}>
                SignUp
              </a>
            </p>
          </div>
          <div className=" div_perin email">
            <label className="label_perin" htmlFor="">
              Email
            </label>
            <br />
            <input
              value={ML}
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
              value={PD}
              onChange={(e) => SetPD(e.target.value)}
              className="input_perin"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="div_perin">
            <button type="submit">Login</button>
          </div>
        </form>
      </Wrap>
    </Container>
  );
}

export default SignIn;

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
  ${"" /* position: absolute; */}
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;

  position: relative;
  margin: auto;
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
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 100px;
    padding-right: 100px;
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
    }
    .input_perin:focus-visible {
      outline: none;
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
