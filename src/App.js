import React from "react";
import Router from "./shared/Router";
import { GlobalStyle } from "./shared/GlobalStyled";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;
