import React from "react";
import styled from "styled-components";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  const JWT = localStorage.getItem("auth-token");

  let auth;
  if (JWT == null) {
    auth = { token: false };
  } else {
    auth = { token: true };
  }

  return auth.token ? (
    <Outlet />
  ) : (
    <h2 className="h2_perin"> Please LOGIN to continue </h2>
  );
};

export default PrivateRoutes;
