import React from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import { NavBottomPathLogin } from "../../shared/GlobalStyled";
import { useRecoilState, useRecoilValue } from "recoil";
import { decodeAccessToken } from "./loginTokenStore";
import { headerStateSearch, headerStatedefalut } from "../../components/headerStore";

function Logout({ setIsLoggedIn, isLoggedIn }) {
  const [,setDecodeAccessToken] = useRecoilState(decodeAccessToken)
  const headerStateSearchs = useRecoilValue(headerStateSearch)
  const [, setHeaderState] = useRecoilState(headerStatedefalut)
  const navigate = useNavigate();
  const logoutHandler = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      const cookies = new Cookies();
      cookies.remove("access_token");
      setDecodeAccessToken({})
      setIsLoggedIn(false);
      setHeaderState({...headerStateSearchs})
      alert("로그아웃 되었습니다.");
      navigate("/");
    }
  };

  return isLoggedIn && (<NavBottomPathLogin onClick={logoutHandler} children="로그아웃"/>)
    
}

export default Logout;