import styled from "styled-components";

// Main 페이지 전체 레이아웃 및 개별 태그들에 대한 위치설정 ////////////////////////////////////////////////////
// Main 페이지 - 전체를 감싸는 태그
const MainLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 70px 75px;
  color: #242424;
  font-family: "SpoqaHanSansNeo-Regular";
  @media (max-width: 1440px) {
    margin: 52.5px 56.25px;
  }
`;

// Main 페이지 첫번째(1,2,5) 전시 종류
const CommenLayout = styled.div`
  position: relative;
  width: 1525px;
  max-height: ${(pos) => pos.height}px;
  min-height: ${(pos) => pos.height}px;
  overflow: hidden;
  margin-bottom: 100px;
  @media (max-width: 1440px) {
    width: 1143.75px;
    margin-bottom: 60px;
    max-height: ${(pos) => pos.media1440}px;
    min-height: ${(pos) => pos.media1440}px;
  }
`;

// Main 페이지 세번째(3) TOP 10 (화면의 너미가 줄어들었을 때를 가정)
const ThirdLayout = styled(CommenLayout)`
  max-height: fit-content;
  margin-bottom: 0px;
`;

const FifthLayout = styled(CommenLayout)`
  margin-bottom: 0px;
`
// Main 페이지 - 소제목 absolute 좌상단 고정
const ArticleTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: end;
  top: 5px;
  left: 0;
  z-index: 1;
`;

//  Main 페이지 - 소제목(2,3,4,5 번째)
const MainH1 = styled.h4`
  font-family: "S-CoreDream-5Medium";
  font-size: 32px;
  width: fit-content;
  @media (max-width: 1440px) {
    font-size: 24px;
  }
`;
const MainH5 = styled.h4`
  position: relative;
  font-family: "S-CoreDream-3Light";
  bottom: 1px;
  font-size: 16px;
  margin-left: 8px;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    margin-left: 6px;
    font-size: 12px;
  }
`;


//  Main 페이지 - 소제목(1 번째)
const MainH4 = styled.h4`
  font-family: "S-CoreDream-5Medium";
  font-size: 20px;
  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

// Main 개별 태그들에 대한 상세설정 //////////////////////////////////////////////////////////////////////
// ---------------------------------------------------------------------------------- //
// Main 페이지 첫번째(1) 슬라이더 레이아웃
const FirstWrapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 269px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 201.75px;
  }
`
const FirstMainSlider = styled.div`
  max-width: 1256px;
  min-width: 1256px;
  min-height: 709px;
  max-height: 709px;

  @media (max-width: 1440px) {
    max-width: 942px;
    min-width: 942px;
    min-height: 531.75px;
    max-height: 531.75px;
  }
`
const FirstMainSliderWrap = styled(FirstMainSlider)`
  position: relative;
`
const FirstMainSliderTitle = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 56px 1fr;
  align-items: center;
  top: 143px;
  width: fit-content;
  max-width: 526px;
  @media (max-width: 1440px) {
    grid-template-columns: 42px 1fr;
    top: 107.25px;
    max-width: 394.5px;
  }
  .titleNum {
    font-size: 24px;
    @media (max-width: 1440px) {
      font-size: 18px;
    }
  }
  .title {
    padding: 12px;
    font-size: 48px;
    background-color: rgba(37, 37, 37, 0.7);
    color: #FFF;
    @media (max-width: 1440px) {
      padding: 9px;
      font-size: 36px;
    }
  }
`

const FirstMainSliderDesc = styled.div`
  position: absolute;
  top: 354px;
  width: 364px;
  font-size: 17px;
  line-height: 28px;
  color: #3C3C3C;
  @media (max-width: 1440px) {
    top: 265.5px;
    width: 273px;
    font-size: 12.75px;
    line-height: 21px;
  }
`

const FirstMainSliderBtn = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 358px;
  height: 70px;
  font-size: 17px;
  border: 1px solid #242424;
  border-radius: 50px;
  color: #242424;
  &:hover {
    background-color: #242424;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    bottom: 3.75px;
    width: 268.5px;
    height: 59.25px;
    font-size: 12.75px;
  }
`

const FirstMainSliderImg = styled.img`
  margin: 0 auto;
  display: block;
  width: 492px;
  height: 704px;
  @media (max-width: 1440px) {
    width: 369px;
    height: 528px;
  }
`
const FirstMainSliderInfo = styled.div`
  position: absolute;
  left: 926px;
  top: 317px;
  width: 376px;
  @media (max-width: 1440px) {
    left: 694.5px;
    top: 237.75px;
    width: 282px;
  }
`

const FirstMainSliderInfoText = styled.div`
  .title {
    font-size: 20px;
    margin-bottom: 8px;
    color: #242424;
    @media (max-width: 1440px) {
      font-size: 15px;
      margin-bottom: 6px;
    }
  }
  .content {
    font-size: 16px;
    color: #5A5A5A;
    margin-bottom: 45px;
    @media (max-width: 1440px) {
      font-size: 12px;
      margin-bottom: 33.75px;
    }
  }
  .contentdate {
    font-family: 'Montserrat';
  }
`

const FirstSubSlider = styled.div`
  height:704px;
  @media (max-width: 1440px) {
    height: 528px;
  }
`

const FirstSubSliderWrap = styled(FirstSubSlider)`
  position: relative;
`

const FirstSubSliderImg = styled.img`
  display: block;
  width: 269px;
  height: 384.91px;
  @media (max-width: 1440px) {
    width: 201.75px;
    height: 288.6825px;
  }
`
const FirstSliderIndex = styled.div`
  position: absolute;
  right: 134.5px;
  transform: translateX(50%);
  bottom: 5px;
  width: 90px;
  height: 63px;
  font-size: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  span {
    font-size: 20px;
    color: #7E7E7E;
  }

  @media (max-width: 1440px) {
    right: 100.875px;
    width: 67.5px;
    height: 47.25px;
    font-size: 18.75px;
    bottom: 0;
    span {
    font-size: 15px;
    }
  }
`
// ---------------------------------------------------------------------------------- //
// Main 페이지 두번째(2) 슬라이더 스타일설정
const SecondSliderWrap = styled(FirstMainSliderWrap)`
  position: static;
  margin-top: 66px;
  max-width: 1545px;
  min-width: 1545px;
  max-height: 497px;
  min-height: 497px;
  overflow: hidden;

  @media (max-width: 1440px) {
    margin-top: 49.5px;
    max-width: 1158.5px;
    min-width: 1158.5px;
    max-height: 372.75px;
    min-height: 372.75px;
  }
`;

const SecondSlider = styled.div`
  min-width: 235px;
  max-width: 235px;
  min-height: 431px;
  max-height: 431px;

  @media (max-width: 1440px) {
    min-width: 176.25px;
    max-width: 176.25px;
    min-height: 323.25px;
    max-height: 323.25px;
  }
`;

const SecondSliderImg = styled.img`
  display: block;
  width: 235px;
  height: 338px;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    width: 176.25px;
    height: 253.5px;
    margin-bottom: 15px;
  }
`

const SecondSliderTitle = styled.div`
  font-size: 20px;
  color: #242424;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-bottom: 12px;
  
  @media (max-width: 1440px) {
    font-size: 15px;
    margin-bottom: 9px;
  }
`
const SecondSliderlocation = styled.div`
  font-size: 16px;
  color: #5A5A5A;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  @media (max-width: 1440px) {
    font-size: 12px;
  }
`

const SecondSliderDate = styled(SecondSliderlocation)`
  font-family: 'Montserrat';
  margin-bottom: 10px;
  @media (max-width: 1440px) {
    margin-bottom: 7.5px;
  }
`

// ---------------------------------------------------------------------------------- //
// Main 페이지 세번째(3) TOP10 상세 레이아웃
const ThirdWrapGrid = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 23px;
  @media (max-width: 1440px) {
    margin-top: 49.5px;
    gap: 17.25px; 
  }
`;


// Main 페이지 세번째(3) TOP10 개별 영역설정
const ThirdInner = styled.div`
  position: relative;
  display: flex;
  height: 148px;
  border-bottom: 1px solid #dddddd;
  padding: 12px 0;
  @media (max-width: 1440px) {
    height: 111px;
    padding: 9px 0;
  }
`;

const ThirdNum = styled.div`
  display: flex;
  align-items: center;
  width: 107px;
  font-size: 20px;
  height: 100%;
  @media (max-width: 1440px) {
    width: 80.25px;
    font-size: 15px;
  }
`;

const ThirdImg = styled.div`
  min-width: 87px;
  max-width: 87px;
  min-height: 124.49px;
  max-height: 124.49px;
  &:hover {
      z-index: 5;
    }
  
  @media (max-width: 1440px) {
    min-width: 65.25px;
    max-width: 65.25px;
    min-height: 93.3675px;
    max-height: 93.3675px;
  }

  img {
    display: block;
    min-width: 87px;
    max-width: 87px;
    min-height: 124.49px;
    max-height: 124.49px;
    transition: all 0.3s;
    &:hover {
      z-index: 3;
    }

    @media (max-width: 1440px) {
      min-width: 65.25px;
      max-width: 65.25px;
      min-height: 93.3675px;
      max-height: 93.3675px;
    }

    &:hover {
      transform: scale(2.5);
      transform-origin: 50% 45%;
    }
  }
`;

const ThirdInfo = styled.div`
  margin-left: 102px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  .titleKo {
    margin-bottom: 8px;
    font-size: 20px;
    width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .titleEn {
    margin-bottom: 12px;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .location {
    color: #5a5a5a;
    font-size: 12px;
  }
  @media (max-width: 1440px) {
    margin-left: 76.5px;
    .titleKo {
      margin-bottom: 6px;
      font-size: 15px;
      width: 337.5px;
    }
    .titleEn {
      margin-bottom: 9px;
      font-size: 12px;
      width: 337.5px;
    }
    .location {
    font-size: 9px;
  }
  }
`;

// ---------------------------------------------------------------------------------- //
// Main 페이지 네번째(4) 예정전시 상세 레이아웃
const FourthWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 390px 1fr;
  gap: 80px;
  min-height: 558px;
  max-height: 558px;
  margin-top: 66px;
  padding-right: 12px;
  overflow: scroll;

  @media (max-width: 1440px) {
    grid-template-columns: 292.5px 1fr;
    gap: 60px;
    min-height: 418.5px;
    max-height: 418.5px;
    margin-top: 49.5px;
    padding-right: 9px;
  }
`;

const FourthImg = styled.img`
  position: sticky;
  top: 0;
  display: block;
  min-width: 390px;
  max-width: 390px;
  min-height: 558px;
  max-height: 558px;
  @media (max-width: 1440px) {
    min-width: 292.5px;
    max-width: 292.5px;
    min-height: 418.5px;
    max-height: 418.5px;
  }
`
const FouthInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    min-height: 480px;
    @media (max-width: 1440px) {
      gap: 9px;
      min-height: 360px;
    }
`

const FourthInfo = styled.div`
  display: flex;
  align-items: center;
  min-height: 102px;
  max-height: 102px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 25px;
  @media (max-width: 1440px) {
    min-height: 76.5px;
    max-height: 76.5px;
    padding: 18.75px;
  }
  &:hover {
    background-color: #232323;
    color: #e6e6e6;
  }
`;

const FouthInfoDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 48px;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    @media (max-width: 1440px) {
      font-size: 15px;
    }
  }
`

const FouthInfoTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 100px;
  @media (max-width: 1440px) {
    gap: 7.5px;
    margin-left: 75px;
  }

  // 전시회 title
  p:first-child {
    font-size: 20px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 1440px) {
      font-size: 15px;
    }
  }
  p:last-child {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 1440px) {
      font-size: 12px;
    }
  }
`

const FouthInfoAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  width: fit-content;
  max-width: 250px;
  height: 48px;
  text-align: end;
  @media (max-width: 1440px) {
    margin-left: 40px;
    max-width: 187.5px;
    height: 36px;
  }
`

// ---------------------------------------------------------------------------------- //
// Main 페이지 다섯번째(5) 아트그램 상세 레이아웃
const FifthWrapGrid = styled(ThirdWrapGrid)`
  grid-template-columns: 390px 1fr;
  gap: 80px;
  @media (max-width: 1440px) {
    grid-template-columns: 292.5px 1fr;
    gap: 60px; 
  }
`

// MainSlider 첫번째 슬라이더 부분 
const MainSlider = styled.div`
  max-width: 390px;
  min-width: 390px;
  min-height: 571px;
  max-height: 571px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1440px) {
    max-width: 292.5px;
    min-width: 292.5px;
    min-height: 428.25px;
    max-height: 428.25px;
  }
`

const MainSliderWrap = styled(MainSlider)`
  position: relative;
  padding: 16px;
  background: #FFFFFF;
  box-shadow:none;

  @media (max-width: 1440px) {
    padding: 12px;
  }
`
const MainSliderImg = styled.div`
  position: relative;
  width: 358px;
  height: 404px;
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
    max-width: 268.5px;
    min-height: 303px;
    max-height: 303px;
  }
`

const MainSliderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  @media (max-width: 1440px) {
    gap: 6px;
    bottom: 12px;
  }
`

const MainSliderProfileImg = styled.img`
  display: block;
  width: 29px;
  height: 29px;
  border-radius: 50px;
  @media (max-width: 1440px) {
    width: 21.75px;
    height: 21.75px;
  }
`

const MainSliderProfileNickName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  color:  #7E7E7E;

  span {
    margin-left: 4px;
    font-weight: 600;
    font-size: 14px;
    color: #242424;
  }
`

// SubSlider 두번째 슬라이더 부분 
const SubSlider = styled(MainSlider)`
  max-width: 1083.75px;
  min-width: 1083.75px;
  min-height: 571px;
  max-height: 571px;
  box-shadow:none;

  @media (max-width: 1440px) {
    max-width: 812.8125px;
    min-width: 812.8125px;
    min-height: 428.25px;
    max-height: 428.25px;
  }
`

const SubSliderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 243px;
  min-width: 243px;
  min-height: 342px;
  max-height: 342px;
  gap: 4px;

  @media (max-width: 1440px) {
    max-width: 182.25px;
    min-width: 182.25px;
    min-height: 256.5px;
    max-height: 256.5px;
  }
`

const SubSliderWrap = styled.div`
  max-width: 235px;
  min-width: 235px;
  min-height: 334px;
  max-height: 334px;
  padding: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1440px) {
    max-width: 176.25px;
    min-width: 176.25px;
    min-height: 250.5px;
    max-height: 250.5px;
  }
`

const SubSliderImg = styled.div`
  position: relative;
  display: block;
  width: 211px;
  height: 239px;
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
    width: 158.25px;
    height: 179.25px;
  }
`

const SubSliderProfile = styled(MainSliderProfile)`
  bottom: 20px;
  @media (max-width: 1440px) {
    bottom: 15px;
  }
`

const SliderIndex = styled.div`
  position: absolute;
  left:614px;
  bottom: 0;
  width: 90px;
  height: 63px;
  transform: translateX(-50%);
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  span {
    font-size: 20px;
    font-weight: 400;
    color: #7E7E7E;
  }
  @media (max-width: 1440px) {
    left:460.5px;
    width: 67.5px;
    height: 47.25px;
    font-size: 18.75px;
    span {
    font-size: 15px;
  }
  }
`;

export {
  // Main 페이지 레이아웃
  MainLayout,
  CommenLayout,
  ThirdLayout,
  FifthLayout,
  ArticleTitle,
  MainH1,
  MainH4,
  MainH5,
  // Main 페이지(1) 상세관련
  FirstWrapGrid,
  FirstMainSlider, 
  FirstMainSliderWrap,
  FirstMainSliderTitle,
  FirstMainSliderImg,
  FirstMainSliderDesc,
  FirstMainSliderBtn,
  FirstMainSliderInfo,
  FirstMainSliderInfoText,
  FirstSubSlider,
  FirstSubSliderWrap,
  FirstSubSliderImg,
  FirstSliderIndex,

  // Main 페이지(2) 상세관련
  SecondSliderWrap,
  SecondSlider,
  SecondSliderImg,
  SecondSliderTitle,
  SecondSliderDate,
  SecondSliderlocation,
  // Main 페이지(3) 상세관련
  ThirdWrapGrid,
  ThirdInner,
  ThirdNum,
  ThirdImg,
  ThirdInfo,
  // Main 페이지(4) 상세관련
  FourthWrap,
  FourthImg,
  FouthInfoWrap,
  FourthInfo,
  FouthInfoDate,
  FouthInfoTitle,
  FouthInfoAddress,
  // Main 페이지(5) 상세관련
  FifthWrapGrid,
  // Main 슬라이더
  MainSlider, 
  MainSliderWrap,
  MainSliderImg,
  MainSliderProfile,
  MainSliderProfileImg,
  MainSliderProfileNickName,
  // Sub 슬라이더
  SubSlider,
  SubSliderLayout,
  SubSliderWrap,
  SubSliderImg,
  SubSliderProfile,
  SliderIndex,
};
