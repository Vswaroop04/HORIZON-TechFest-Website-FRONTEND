import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./LoginSignUp/SignIn";
import SignUp from "./LoginSignUp/SignUp";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const JWT = localStorage.getItem("auth-token");

  let auth;
  if (JWT == null) {
    auth = { token: false };
  } else {
    auth = { token: true };
  }

  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  return auth.token ? (
    <Outlet />
  ) : (
    <>
      <Container>
        <SignUp
          login={login}
          setLogin={setLogin}
          signUp={signUp}
          setSignUp={setSignUp}
          goHome={true}
        />
        <SignIn
          signUp={signUp}
          setSignUp={setSignUp}
          login={login}
          setLogin={setLogin}
          headPerin="Please LOGIN to Continue"
          goHome={true}
        />
      </Container>
    </>
    // <h2 className="h2_perin"> Please LOGIN to continue </h2>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default PrivateRoutes;
