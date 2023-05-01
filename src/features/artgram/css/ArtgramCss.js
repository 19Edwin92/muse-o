import styled from "styled-components";
import { DropZoneMsg, DropZonePreview, PreviewBox } from "../createArtgram/ArtgramFormImgparts";

const Layout = styled.div`
  margin: 80px 75px;
  @media (max-width: 1440px) {
    margin: 60px 56.25px;
  }
`
const H1 = styled.h1`
  font-size: 48px;
  font-family: 'S-CoreDream-5Medium';

  span {
    font-family: 'Montserrat';
    font-size: 32px;
  }
  @media (max-width: 1440px) {
    font-size: 36px;
    span {
      font-size: 24px;
    }
  }
`

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 1440px) {
    gap: 17.25px;
    margin-top: 45px;
  }
`;

const ArtgramWriteWrap = styled.div`
  display:flex;
  justify-content:end;
  position:relative;
  left:37.5px;

  @media (max-width: 1440px) {
    left:28.125px
  }
`

const HiddenRef = styled.div`
  margin-top: 10px;
  color: transparent;
`

const BoxWrap = styled.div`
  position: relative;
  height: 426px;
  box-shadow: 0px 4px 7px #878787;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;

  @media (max-width: 1440px) {
    height: 319.5px;
  }
`;

const BoxImg = styled.div`
  position: relative;
  max-width: 364px;
  min-height: 365px;
  max-height: 365px;
  overflow: hidden;

  .artgramimg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 1440px) {
    max-width: 273px;
    min-height: 273.75px;
    max-height: 273.75px;
  }
`;

const BoxProfile = styled.div`
  display: grid;
  grid-template-columns: 29px 1fr 47px 47px;
  gap: 8px;
  height: 61px;
  padding: 16px 12px;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 12px 9px;
    grid-template-columns: 21.75px 1fr 35.25px 35.25px;
    gap: 6px;
    height: 45.75px;
  }
`;

const BoxProfileimg = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50px;
  background-color: lightgray;

  img {
    display: block;
    width: 100%;
    border-radius: 50px;
  }
  @media (max-width: 1440px) {
    width: 21.75px;
    height: 21.75px;
  }
`;

const BoxProfileNickname = styled.div`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 1440px) {
    font-size: 9px;
  }

  span {
    font-weight: 400;
    color: #767676;
  }
`;

const Scrap = styled.div`
  font-family: "Montserrat";
  height: 15px;
  font-size: 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  
  p:first-child {
    font-size: 16px;
    color: ${(props) => (props.state ? "#FFD43E" : "lightgray")};
    position: relative;
    top: 2px;
  }
`;

const Heart = styled(Scrap)`
  p:first-child {
    color: ${(props) => (props.state ? "#F65959" : "lightgray")};
  }
  `;

const DetailScrap = styled(Scrap)`
  min-width: 40px;
  gap: 8px;
  @media (max-width: 1440px) {
    min-width: 30px;
    gap: 6px;
  }
`
const DetailHeart = styled(Heart)`
  min-width: 40px;
  gap: 8px;
  @media (max-width: 1440px) {
    min-width: 30px;
    gap: 6px;
  }
`

const PluralImgs = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: #fff;
  opacity: 0.8;
  padding: 9px;

  img {
    width: 100%;
  }
  @media (max-width: 1440px) {
    top: 9px;
    right: 9px;
    width: 30px;
    height: 30px;
    padding: 6.75px;
  }
`
const ModalBackground = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  background-color: rgba(36, 36, 36, 0.7);
  z-index: 10200;
  @media (max-width: 1440px) {
    padding: 15px;
  }
  
  img {
    display: block;
    width: 2rem;
    margin-left: auto;
    @media (max-width: 1440px) {
      width: 1.5rem;
    }
  }
`

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 56.38%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.state ? "grid" : "none")};
  grid-template-columns: repeat(2, 1fr);
  width: 1264px;
  height: 894px;
  background-color: #fff;
  border-radius: 15px;
  z-index: 10200;
  @media (max-width: 1440px) {
    width: 948px;
    height: 670.5px;
  }
`;

const UpdateModalWindow = styled(ModalWindow)`
  gap:108px; 
  padding-top: 100px;
  top: 50%;
  left: 50%;
  padding: 0 60px;
  padding-top: 244px;
  overflow: hidden;
  @media (max-width: 1440px) {
    gap:81px; 
    padding-top: 75px;
    top: 50%;
    left: 50%;
    padding: 0 45px;
    padding-top: 183px;
  }
`

const UpdateModalTitleLayout = styled.div`
  position: absolute;
  top: 162px;
  left: 60px;
  @media (max-width: 1440px) {
    top: 121.5px;
    left: 45px;
  }
`

const ImgZone = styled.section`
  width: 526px;
  height: 405px;
  border-radius: 10px;
  @media (max-width: 1440px) {
    width: 394.5px;
    height: 303.75px;
  }
`

const ImgZoneMsg = styled(DropZoneMsg)`
  height: 51px;
  @media (max-width: 1440px) {
    height: 38.25px;
  }
`

const ImgZonePreview = styled(DropZonePreview)`
  height: 354px;
  padding: 14px;
  gap: 7px;
  @media (max-width: 1440px) {
    height: 265.5px;
    padding: 10.5px;
    gap: 5.25px;
  }
`

const PreviewImgBox = styled(PreviewBox)`
  width: 161px;
  height: 162px;
  @media (max-width: 1440px) {
    width: 120.75px;
    height: 121.5px;
  }
`

const Notification = styled.div`
  margin-top: 16px;
  width: 526px;
  height: 95px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 1px solid #7E7E7E;
  border-radius: 5px;
  font-size: 12px;

  img {
    display: inline-block;
    position: relative;
    top: 1px;
    width: 12px;
  }

  span {
    color:red;
    margin-right: 4px;
  }

  @media (max-width: 1440px) {
  margin-top: 12px;
  width: 394.5px;
  height: 71.25px;
  padding: 10px;
  gap: 6px;
  font-size: 9px;
  img {
    width: 9px;
  }
  span {
    margin-right: 3px;
  }
  }
`

const UpdateForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  @media (max-width: 1440px) {
    gap: 12px;
  }
`

const WriteLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  height: 50px;
  @media (max-width: 1440px) {
    height: 50.625px;
  }
`

export {
  // 아트그램 Main
  Layout,
  H1,
  Wrap,
  HiddenRef,

  // 아트그램 Box
  BoxWrap,
  BoxImg,
  BoxProfile,
  BoxProfileimg,
  BoxProfileNickname,
  Scrap,
  Heart,
  PluralImgs,

  // 아트그램 DetailModal
  ModalBackground,
  ModalWindow,

  // 아트그램 상세페이지
  DetailScrap,
  DetailHeart,

  // 아트그램 생성
  ArtgramWriteWrap,
  
  // 아트그램 작성 관련
  WriteLayout,

  // 아트그램 수정 관련
  UpdateModalWindow,
  UpdateModalTitleLayout,
  ImgZone,
  ImgZoneMsg,
  ImgZonePreview, 
  PreviewImgBox,
  Notification,
  UpdateForm

}