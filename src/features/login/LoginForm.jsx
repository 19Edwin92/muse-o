import React, { useEffect, useState } from "react";
import useLogin from "../../hooks/login/useLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";
import naverLogo from "../../assets/imgs/login/네이버로고.png";
import googleLogo from "../../assets/imgs/login/google-plus.png";
import kakaoLogo from "../../assets/imgs/login/kakao-talk.png";
import museoLogo from "../../assets/imgs/museoLogo/임시 로고.png";
import falseVisibleEyes from "../../assets/imgs/login/invisible_gray.png";
import trueVisibleEyes from "../../assets/imgs/login/eye_gray.png";

/**
 * 할일
 * 1) input 빈 값인경우 input outline 적용
 * 2) 비밀번호 보기/숨기기
 */

function LoginForm() {
  //react-query
  const { login } = useLogin();

  const [emailMsg, setEmailMsg] = useState(""); //유효성 검사
  const [pwMsg, setPwMsg] = useState(""); //유효성 검사
  const [pwVisible, setPwVisible] = useState(false); //비밀번호

  //로그인시 login에 보낼 정보
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = e => {
    const { value, name } = e.target;
    setLoginInfo(pre => {
      return { ...pre, [name]: value };
    });
  };

  /*
로그인 유효성검사 1
-> 로그인 버튼 클릭시 이메일, 비밀번호 빈 값 체크
*/
  const loginHandler = e => {
    e.preventDefault();
    if (!loginInfo.email) {
      setEmailMsg("이메일을 입력해주세요.");
    } else if (!loginInfo.password) {
      setPwMsg("비밀번호를 입력해주세요.");
    } else {
      login(loginInfo);
    }
  };

  /*
로그인 유효성검사 2
-> 로그인페이지 마운트시 input이 빈 값이어서 자동으로 빈 값 검사되는 것 방지
-> 로그인버튼 클릭 후 input값 입력시 경고문구 사라지게 함
*/
  useEffect(() => {
    if (loginInfo.email === "") {
      setEmailMsg("");
    } else if (loginInfo.email) {
      setEmailMsg("");
    }
  }, [loginInfo.email]);

  useEffect(() => {
    if (loginInfo.password === "") {
      setPwMsg("");
    } else if (loginInfo.password) {
      setPwMsg("");
    }
  }, [loginInfo.password]);

  //비밀번호 보임/숨김
  const visibleChangeHandler = () => {
    setPwVisible(visible => !visible); //toggle
  };

  //소셜로그인 미구현 -> 서비스 제공 예정 alert
  const socialLoginBtn = () => {
    alert("서비스 제공 예정입니다.");
  };

  return (
    <StLogin>
      <StLinkBox>
        <Link to="/">
          <img src={museoLogo} alt="museoLogo" />
        </Link>
      </StLinkBox>

      <StEmailInputBox>
        <label>이메일</label>
        <StEmailInputWrap>
          <input
            type="email"
            name="email"
            onChange={changeInputHandler}
            style={{ borderColor: !emailMsg ? "#dddddd" : "red" }}
          />
          <div>{emailMsg}</div>
        </StEmailInputWrap>
      </StEmailInputBox>

      <StPwInputBox>
        <label>비밀번호</label>
        <StPwInputWrap>
          {!pwVisible ? (
            <StPwInputImgWrap>
              <input
                type="password"
                name="password"
                onChange={changeInputHandler}
                style={{
                  borderColor: !pwMsg ? "#dddddd" : "red",
                  fontFamily: "Malgun gothic",
                  color: "#242424",
                  padding: "10px 10px 15px",
                  letterSpacing: "3px",
                }}
              />
              <div onClick={visibleChangeHandler}>
                <img src={falseVisibleEyes} alt="invisibleEyes" />
              </div>
            </StPwInputImgWrap>
          ) : (
            <StPwInputImgWrap>
              <input
                type="text"
                name="password"
                onChange={changeInputHandler}
                style={{
                  borderColor: !pwMsg ? "#dddddd" : "red",
                }}
              />
              <div onClick={visibleChangeHandler}>
                <img src={trueVisibleEyes} alt="trueVisibleEyes" />
              </div>
            </StPwInputImgWrap>
          )}
        </StPwInputWrap>
        <StPwWarning>{pwMsg}</StPwWarning>
      </StPwInputBox>

      <StLoginBtn onClick={loginHandler}>로그인</StLoginBtn>

      <StSnsBox>
        <div>SNS로 간편하게 시작하기</div>

        <StSnsBtnWrap>
          <GoogleLogoDiv onClick={socialLoginBtn}>
            <img
              src={googleLogo}
              alt="googleLogo"
              style={{ width: "30px", height: "30px" }}
            />
          </GoogleLogoDiv>
          <div onClick={socialLoginBtn}>
            <img src={kakaoLogo} alt="kakaoLogo" />
          </div>
          <div onClick={socialLoginBtn}>
            <img src={naverLogo} alt="naverLogo" />
          </div>
        </StSnsBtnWrap>
      </StSnsBox>

      <StRegisterLink>
        <div>아직 회원이 아니시라면</div>
        <StLink to="/register">회원가입</StLink>
      </StRegisterLink>
    </StLogin>
  );
}

export default LoginForm;

const StLogin = styled.form`
  font-family: "SpoqaHanSansNeo-Regular";
  width: 616px;
  height: 779px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 20px 0px rgba(148, 148, 148, 0.25);
`;

const StLinkBox = styled.div`
  background-color: white;
  width: 217px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
`;

const StEmailInputBox = styled.div`
  width: 416px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 69px 0px 26px;

  label {
    color: #242424;
    font-size: 15px;
    font-weight: bold;
  }
`;

const StEmailInputWrap = styled.div`
  width: 416px;
  height: 48px;

  input {
    font-family: "Montserrat", sans-serif;
    width: 416px;
    height: 44px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    margin-bottom: 5px;
  }

  div {
    color: #f65959;
  }
`;

const StPwInputBox = styled.div`
  width: 416px;
  display: flex;
  flex-direction: column;

  label {
    color: #242424;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;

const StPwInputWrap = styled.div`
  width: 416px;
  height: 48px;

  div {
    color: #f65959;
  }
`;

const StPwInputImgWrap = styled.div`
  input {
    font-family: "Montserrat", sans-serif;
    width: 416px;
    height: 44px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    position: absolute;
  }

  img {
    width: 20px;
    height: 20px;
    transform: translate(385px, 12px);
    cursor: pointer;
  }
`;

const StPwWarning = styled.div`
  color: #f65959;
  height: 9px;
`;

const StLoginBtn = styled.button`
  font-family: "SpoqaHanSansNeo-Regular";
  background-color: white;
  color: #171717;
  width: 416px;
  height: 65px;
  border: 1px solid gray;
  border-radius: 50px;
  font-size: 15px;
  font-weight: bold;
  margin: 44px 0px 72px;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: #242424;
    color: white;
  }
`;

const StSnsBox = styled.div`
  width: 195px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
  }
`;

const StSnsBtnWrap = styled.div`
  display: flex;
  gap: 16px;

  div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const GoogleLogoDiv = styled.div`
  background-color: #f65959;
  /* border: 1px solid rgba(148, 148, 148, 0.25); */
`;

const StRegisterLink = styled.div`
  font-family: "SpoqaHanSansNeo-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 12px;

  div {
    font-size: 16px;
    color: #5a5a5a;
  }
`;

const StLink = styled(Link)`
  font-size: 16px;
  color: #3360ff;
`;
