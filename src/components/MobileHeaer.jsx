import React, { useState } from 'react'
import * as Mobile from '../shared/GlobalStyled'
import logo from '../assets/imgs/museoLogo/logo.png'
import { cookies } from '../shared/cookies';
import jwtDecode from 'jwt-decode';

function MobileHeaer() {
  const accessToken = cookies.get("access_token");
  let nickname = "로그인 해주세요.";
  if (accessToken) {
    const { email } = jwtDecode(accessToken);
    nickname = email;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken); //로그인/로그아웃 상태관리
  const navList = [
    { title: "홈", navigation: "/" },
    { title: "전시", navigation: "/exhibition" },
    { title: "아트그램", navigation: "/artgram" },
    { title: "마이페이지", navigation: isLoggedIn ? "/mypage" : "/login" },
  ];

  return (
    <Mobile.MobileHeaerLayout>
      <Mobile.MobileHeaerLogo src={logo}/>
      <Mobile.MobileSettings>
        {!isLoggedIn 
        ? (<>회원가입, 로그인</>)
        : (<>로그아웃</>)}
      </Mobile.MobileSettings>
    </Mobile.MobileHeaerLayout>
  )
}

export default MobileHeaer

// {!isLoggedIn
//   ? (<>
//   <Headers.NavBottomPath
//     onClick={() => {
//       navigate("/register");
//     }}>
//     <p>회원가입</p>
//   </Headers.NavBottomPath>
//   <Headers.NavBottomPath
//     onClick={() => {
//       navigate("/login");
//     }}
//   >
//     <p>로그인</p>
//   </Headers.NavBottomPath>
//   </>)
//   : (<Logout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />)}