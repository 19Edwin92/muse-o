import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, header, footer, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, ol, ul, li, form, label,input,button,section{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;  // 16px = 1em 
        vertical-align: baseline;
        box-sizing:border-box;
    }

  * {
    @font-face {
      font-family: 'S-CoreDream-3Light';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
      font-weight: normal;
      font-style: normal;
     }
     @font-face {
      font-family: 'S-CoreDream-5Medium';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
      font-weight: normal;
      font-style: normal;
     }

    @font-face {
      font-family: 'SpoqaHanSansNeo-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
  }

  body {
    font-family: 'SpoqaHanSansNeo-Regular';
  }
`;

export const Wrap = styled.div`
  height: 100%;
`;

export const MainWrap = styled.div`
  position: relative;
  min-height: 100%;
  overflow-x: hidden;
`;

export const ContainerWrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

export const Article = styled.div`
  position: relative;
  margin-left: 245px;
  min-height: 100vh;
  /* border: 5px solid blue; */
  background-color: FEFDFC;
  
  @media (max-width: 1440px) {
    margin-left: 183.75px;
}
@media (max-width: 390px) {
  margin-left: 0;
  }
`;


const Headerwrap = styled.header`
  font-family: 'S-CoreDream-5Medium';
  position: fixed;
  top: 0;
  bottom: 0;
  width: 245px;
  z-index: 10100;
  padding: 18px 23px;
  /* border: 5px solid red; */
  background-color: #252525;
  
  @media (max-width: 1440px) {
    width: 183.75px;
    padding:13.5px 17.25px;
  }

  @media (max-width: 390px) {
    width: 100%;
    height: 50px;
    padding:8px;
  }
`;

const Logo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  img {
    width: 100%;
  }
  @media (max-width: 1440px) {
    height: 30px;
    font-size: 24px;
  }
  @media (max-width: 390px) {
    display: none;
  }
`
const LoginState = styled.div`
  height: 95px;
  border-bottom: 1px solid #FFFFFF;
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 1440px) {
    height:  71.25px;
    gap: 3px;
  }

  @media (max-width: 390px) {
   display: none;
  }
`

const LoginStateImg = styled.div`
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50px;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media (max-width: 1440px) {
    min-width: 37.5px;
    max-width: 37.5px;
    min-height: 37.5px;
    max-height: 37.5px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`
const LoginStateAuthor = styled.img`
  display: inline-block;
  width: 12px;
  height: 12px;
  @media (max-width: 1440px) {
    width: 9px;
    height: 9px;
  }
`


const LoginStateNickname = styled.p`
  color: #EBEBEB;
  font-size: 16px;
  margin-left: 8px;
  font-family: 'SpoqaHanSansNeo-Regular';
  @media (max-width: 1440px) {
    margin-left: 6px;
    font-size: 12px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`

const Nav = styled.div`
  margin-top: 22px;
  @media (max-width: 1440px) {
    margin-top: 16.5px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`

const NavSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 1440px) {
    margin-bottom: 22.5px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`

const NavSearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #D9D9D9;
  padding: 12px;
  border-radius: 5px;
  @media (max-width: 1440px) {
    height: 30px;
    padding: 9px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`;

const NavLists = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 5px;
  background-color: ${props => props.state ? "#F7F7F9" :"transparent"};
  &:hover{
    cursor: pointer;
  }
  @media (max-width: 390px) {
   display: none;
  }
`

const Navgateimg = styled.img`
  display: block;
  width: 27px;
  height: 27px;
  @media (max-width: 390px) {
   display: none;
  }
`
const NavgatePath = styled.div`
  position:relative;
  top:2px;
  margin-left: 12px;
  padding: 1px;
  font-size: 24px;
  color: ${props => props.state ? "transparent" :"#FFFFFF"};
  background: ${props => props.state ? "linear-gradient(to bottom, #3360ff 0%, #b960ff 70%);" : null};
  -webkit-background-clip:  ${props => props.state ? "text" : null};
  @media (max-width: 1440px) {
    font-size: 17px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`
const NavBottom = styled.div`
  position:absolute;
  left: 0;
  bottom:0;
  width: 100%;
  padding: 10px 0 40px;
  display:flex;
  box-shadow: 0px -15px 9px -2px rgba(37,37,37,0.9);
  flex-direction:column;
  background-color: #252525;
  gap:12px;
  @media (max-width: 390px) {
   display: none;
  }
`
const NavBottomPath = styled.div`
  font-family: 'SpoqaHanSansNeo-Regular';
  width: 200px;
  height: 40px;
  margin: 0 auto;
  background-color: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: #242424;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  color: #fff;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    width: 137.75px;
    font-size: 12px;
  }
  @media (max-width: 390px) {
   display: none;
  }
`
const NavBottomPathLogin = styled(NavBottomPath)`
  &:hover {
    background: #fff;
    color: #242424;
  }
`



const NavBottomPathEx = styled(NavBottomPath)`
  border: 1px solid transparent;
  background-image: linear-gradient(#242424, #242424), 
  linear-gradient(to bottom, #3360FF 0%,  #C984FF 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  &:hover{
    background-image: linear-gradient(#3360FF, #C984FF), 
    linear-gradient(to bottom, #3360FF 0%,  #C984FF 100%);
  }
`

const NavSearchList = styled.div`
  position: fixed;
  top: ${props=> props.state ? "175px" : "300vh"};
  margin-left: 245px;
  width: 1675px;
  height: 100vh;
  padding: 40px 75px;
  transition: all 0.5s;
  background-color: rgba(36, 36, 36, 0.97);
  z-index: 15;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  @media (max-width: 1440px) {
    top: ${props=> props.state ? "131.25px" : "300vh"};
    margin-left: 183.75px;
    width: 1256.25px;
    height: 100vh;
    padding: 30px 56.25px;
    grid-template-columns: 225px 1fr;
    gap: 37.5px;
  }
`

const NavSearchListTop10 = styled.div`
  color: white;
  h2 {
    font-size: 20px;
    margin-bottom: 28px;
    color: #FFFFFF;
    @media (max-width: 1440px) {
      font-size: 25px;
      margin-bottom: 21px;
    }
  }
  .searchList {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    height: 60px;
    padding: 8px 5px;
    border-bottom: 1px solid #7E7E7E;
    @media (max-width: 1440px) {
      grid-template-columns: 22.5px 1fr;
      height: 45px;
      padding: 6px 3.75px;
    }
    &:hover {
      background-color: rgba(70, 70, 70, 0.95);
    }

    .rank {
      font-family: 'Montserrat';
      font-size: 16px;
      @media (max-width: 1440px) {
        font-size: 12px;
      }
    }
    .contents {
      font-size: 16px;
      @media (max-width: 1440px) {
        font-size: 12px;
      }
    }
  }
`
const NavSearchListRecently = styled.div`
  color: white;
  h2 {
    font-size: 20px;
    margin-bottom: 28px;
    color: #FFFFFF;
    @media (max-width: 1440px) {
      font-size: 25px;
      margin-bottom: 21px;
    }
  }
  .searchList {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 8px 5px;
    font-size: 16px;
    @media (max-width: 1440px) {
      height: 45px;
      padding: 6px 3.75px;
      font-size: 12px;
    }
    &:hover {
      background-color: rgba(70, 70, 70, 0.95);
    }
  }
`

const MobileHeaerLayout = styled.div`
  display: none;
  @media (max-width: 390px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
  }
`
const MobileHeaerLogo = styled.img`
  display: block;
  width: fit-content;
  height: 20px;
  font-size: 2rem;
`
const MobileSettings = styled.div`
  width: 100%;
  height: 34px;
  background-color: red;
`
const TopButtunWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  left: 67.5px;
  height: 50px;
  @media (max-width: 1440px) {
    left: 50.625px;
    height: 50.625px;
  }
`

const TopButtun = styled.div`
  position: fixed;
  bottom: 60px;
  width: 60px;
  height: 60px;
  @media (max-width: 1440px) {
    width: 40px;
    height: 40px;
    bottom: 40px;
  }
  img {
    width: 100%;
  }
`

const NavSearchMsg = styled.div`
  position: relative;
  width: 600px;
  bottom: 40px;
  font-size: 16px;
  color: #fff;
  @media (max-width: 1440px) {
    width: 450px;
    bottom: 30px;
    font-size: 12px;
  }
`
const AlertWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.state ? "block" : "none")};
  width: 300px;
  height: 100px;
  background-color: yellow;
  @media (max-width: 1440px) {
  }
`;


export {
  Headerwrap,
  Logo,
  LoginState,
  LoginStateImg,
  LoginStateNickname,
  LoginStateAuthor,
  Nav,
  NavSearch,
  NavSearchInput,
  NavLists,
  Navgateimg,
  NavgatePath,
  NavBottom,
  NavBottomPath,
  NavBottomPathLogin,
  NavBottomPathEx,
  MobileHeaerLayout,
  MobileHeaerLogo,
  MobileSettings,
  NavSearchList,
  NavSearchListTop10,
  NavSearchListRecently,
  TopButtunWrap,
  TopButtun,
  NavSearchMsg,
  AlertWindow
}
