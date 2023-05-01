import React from "react";
import RegisterForm from "./../features/register/RegisterForm";
import styled from "styled-components";
import { MainWrap } from "../shared/GlobalStyled";

function Register() {
  return (
    <StMainWrap>
      <RegisterForm />
    </StMainWrap>
  );
}

export default Register;

const StMainWrap = styled(MainWrap)`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
