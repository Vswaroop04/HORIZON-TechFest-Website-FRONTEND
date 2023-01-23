import styled from "styled-components";
import { useState } from "react";
import SignUp from "../LoginSignUp/SignUp";
import SignIn from "../LoginSignUp/SignIn";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const [LoginOrSignUp, setLoginOrSignUp] = useState("");

  const [closeState, setCloseState] = useState(true);

  function handleClickBurgerNav() {
    if (!closeState) document.body.style.overflow = "auto";
    else {
      document.body.style.overflow = "hidden";
    }
    setCloseState(!closeState);
  }

  function handleClickLogin() {
    document.body.style.overflow = "hidden";
    setLoginOrSignUp("Login");
  }

  return (
    <>
      <Nav>
        <Menu onClick={handleClickBurgerNav}>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B2016B" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B2016B" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="25"
            height="3"
            viewBox="0 0 25 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" fill="url(#paint0_linear_811_1500)" />
            <defs>
              <linearGradient
                id="paint0_linear_811_1500"
                x1="0"
                y1="0"
                x2="12.1285"
                y2="16.5899"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B2016B" />
                <stop offset="1" stop-color="#1E149D" />
              </linearGradient>
            </defs>
          </svg>
        </Menu>
        <BurgerWrap style={{ display: closeState ? "none" : "block" }}>
          <BurgerNav show={closeState}>
            <CloseWrapper>
              <CustomClose onClick={handleClickBurgerNav} />
            </CloseWrapper>

            <li>
              <NavLink to="/" onClick={handleClickBurgerNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={handleClickBurgerNav}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleClickBurgerNav}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" onClick={handleClickBurgerNav}>
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink to="/tribute" onClick={handleClickBurgerNav}>
                Tribute
              </NavLink>
            </li>
            <LoginLogo className="login_burger_nav" onClick={handleClickLogin}>
              LOGIN
            </LoginLogo>
          </BurgerNav>
        </BurgerWrap>

        <NavMenu className="nav_nav">
          <NavLink
            to="/"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            HOME
          </NavLink>
          <NavLink
            to="/events"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            About
          </NavLink>
          <NavLink
            to="/teams"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            Teams
          </NavLink>
          <NavLink
            to="/tribute"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            Tribute
          </NavLink>
        </NavMenu>
        <LoginLogo onClick={handleClickLogin}>LOGIN</LoginLogo>
      </Nav>
      <SignUp
        LoginOrSignUp={LoginOrSignUp}
        setLoginOrSignUp={setLoginOrSignUp}
      />
      <SignIn
        LoginOrSignUp={LoginOrSignUp}
        setLoginOrSignUp={setLoginOrSignUp}
      />
    </>
  );
}

export default Header;

const Nav = styled.div`
  padding: 30px 76px 30px 41px;
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 18px;
  z-index: 1;
  font-family: "Bujji", sans-serif;
  color: white;
  background-color: black;

  .burger_nav_icon {
    display: none;
  }

  @media (max-width: 667px) {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    padding-inline: 16px;
    padding-block: 25px;
  }
`;
const NavMenu = styled.div`
  color: white;
  flex: 1;
  cursor: pointer;

  @media (max-width: 667px) {
    display: none;
    background: linear-gradient(90deg, #b2016b 46.26%, #1e149d 94.71%);
  }

  #home-nav {
    background: linear-gradient(99.32deg, #b2016b 0%, #5346f8 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  a:hover {
    background: linear-gradient(99.32deg, #b2016b 0%, #5346f8 119.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 667px) {
    display: block;
    display: flex;
    flex-direction: column;
    height: 19px;
    svg {
      margin: 2px;
    }
  }
`;

const LoginLogo = styled.a`
  display: flex;
  width: 173px;
  height: 55px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(90deg, #b2016b 46.26%, #1e149d 94.71%);
  opacity: 0.93;

  &:hover {
    background: transparent;
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
  }

  @media (max-width: 667px) {
    width: 80px;
    height: 23px;
    font-size: 9px;
    font-weight: 900;
    line-height: 9px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const BurgerNav = styled.div`
  height: 100vh;
  width: 180px;
  background: white;
  z-index: 100; // to show above all when it opens
  text-align: start;
  padding: 20px;
  background: linear-gradient(90deg, #b2016b 10.26%, #1e149d 94.71%);
   ${"" /* to hide and show right menu bar on click */}
  transform: ${(props) => (props.show ? "translateX(-120%)" : "translate(0)")};
  transition: transform 0.2s; 
  li {
    padding: 10px 0;
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{ 
      text-decoration: none;
      font-weight: 600;
      font-size: 17px;
      color: white;
      font-size: 10px;
      font-weight: 900;
      line-height: 10px;
      letter-spacing: 0em;
      text-align: left;

    }
  }
  
  .login_burger_nav {
    margin-top: 40px;
  }
  
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: none;

  background-color: rgba(7, 7, 7, 0.75);
`;
