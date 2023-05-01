import React from "react";
import LoginForm from "../features/login/LoginForm";
import styled from "styled-components";
import { MainWrap } from "../shared/GlobalStyled";

function Login() {
  return (
    <StMainWrap>
      <LoginForm />
    </StMainWrap>
  );
}

export default Login;

const StMainWrap = styled(MainWrap)`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
