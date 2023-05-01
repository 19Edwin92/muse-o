import styled from "styled-components";

const SliderOutline = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;
  background-color: #eeeeee;
  overflow: hidden;

  .sliderLayout {
    width: 635px;
    @media (max-width: 1440px) {
      width: 476.25px
    }
  }
  //
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0 15px 15px 0;
  max-height: 894px;
  @media (max-width: 1440px) {
    max-height: 670.5px;
  }
`;

const ContentInnerText = styled.div`
  padding: 30px 24px 0;
  display: grid;
  max-height: 268px;
  min-height: 268px;
  grid-template-columns: 33px 1fr;
  border-bottom: 1px solid #dddddd;
  gap: 16px;
  @media (max-width: 1440px) {
    padding: 22.5px 16px 0;
    max-height: 201px;
    min-height: 201px;
    grid-template-columns: 24.75px 1fr;
  }

  .profileimg {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 1440px) {
      width: 24.75px;
      height: 24.75px;
    }
    img {
      width: 100%;
    }
  }
  .profileNickname {
    font-family: "Montserrat";
    font-size: 12px;
    margin-bottom: 8px;
    @media (max-width: 1440px) {
      font-size: 9px;
      margin-bottom: 6px;
    }
  }
  .artgarmDetailTitle {
    font-size: 12px;
    color: #ababab;
    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }
  .artgarmDetailDesc {
    margin-top: 32px;
    font-size: 12px;
    color: #434343;
    line-height: 20px;
    @media (max-width: 1440px) {
      margin-top: 24px;
      font-size: 9px;
      line-height: 15px;
    }
  }
  .artgarmDetailHashTag {
    margin-top: 28px;
    font-size: 11px;
    @media (max-width: 1440px) {
      margin-top: 21px;
      font-size: 8.25px;
    }
    color: transparent;
    // 글자에 그라데이션 효과를 주는 방법 가운데 하나로, 배경화면에 색을 주입하고, 이를 글자의 색상에 첨부하는 방식이 활용될 수 있다.
    background: linear-gradient(to bottom, #3360ff 0%, #b960ff 70%);
    -webkit-background-clip: text;

    font-weight: 600;
  }
`;

const CommentsLayout = styled.div`
  max-height: 458px;
  height: 458px;
  padding: 24px;
  overflow: scroll;
  @media (max-width: 1440px) {
    height: 343.5px;
    padding: 18px;
  }

  .artgarmcomments {
    padding: 24px 24px 0;
    display: grid;
    grid-template-columns: 33px 1fr;
    gap: 16px;
    @media (max-width: 1440px) {
      padding: 18px 18px 0;
      grid-template-columns: 24.75px 1fr;
      gap: 12px;
    }

    .profileimg {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background-color: lightgray;
      overflow: hidden;
      @media (max-width: 1440px) {
        width: 24.75px;
        height: 24.75px;
      }

      img {
        width: 100%;
      }
    }
  }
`;

const CommentsInnerText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 1440px) {
    gap: 6px;
  }

  div {
    display: flex;
    align-items: center;
  }

  .profileNickname {
    font-family: "Montserrat";
    font-size: 12px;
    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }
  .artgarmcomment {
    flex-grow: 1;
    font-size: 13px;
    color: #858585;
    min-height: 20px;
    text-align: justify;
    @media (max-width: 1440px) {
      font-size: 9.75px;
      min-height: 15px;
    }
  }

  input {
    width: 420px;
    border: 2px solid orange;
    border-radius: 15px;
    font-size: 13px;
    padding: 0 12px;
    :focus {
      outline: none;
    }
    @media (max-width: 1440px) {
      width: 315px;
      border: 1.5px solid orange;
      border-radius: 11.25px;
      font-size: 9.75px;
      padding: 0 9px;
    }
  }
`;

const CommentsSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
  @media (max-width: 1440px) {
    gap: 12px;
    height: 30px;
  }

  .artgarmcommentTime {
    font-size: 12px;
    color: #ababab;
    @media (max-width: 1440px) {
      font-size: 9px;
    }
    
  }
  .commentwrite {
    font-size: 12px;
    color: #ababab;
    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }
`;

const Reply = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 58px 1fr;
  gap: 16px;

  hr {
    border: 0.1px solid #7E7E7E;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 43.5px 1fr;
    gap: 12px;
  }
`

const CommentWriteLayout = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 168px;
  border-radius: 0 0 15px 0;
  /* background: #EAEAEA; */
  background: #f7f7f9;
  overflow: hidden;
  @media (max-width: 1440px) {
    height: 126px;
    border-radius: 0 0 11.25px 0;
  }

  .scrapLiked {
    height: 113px;
    @media (max-width: 1440px) {
      height: 84.75px;
    }
  }

  .commentInput {
    border-top: 1px solid #ffffff;
    input {
      display: block;
      width: 100%;
      font-size: 15px;
      background: #f7f7f9;
      padding: 16px 24px;
      border: none;
      ::placeholder {
        color: #7e7e7e;
      }
      :focus {
        outline: none;
      }
      @media (max-width: 1440px) {
        font-size: 11.25px;
        padding: 12px 18px;
      }
    }
  }
`;

const ContentSetting = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
  font-family:  Montserrat;
  @media (max-width: 1440px) {
    top: 22.5px;
    right: 22.5px;
    width: 15px;
    height: 15px;
  }
`

const ContentSettingBoxLayout = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  width: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  background-color: white;
  overflow: hidden;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1440px) {
    top: 45px;
    right: 22.25px;
    width: 101.25px;
    box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`

const SettingBtn = styled.div`
  text-align: center;
  line-height: 32px;
  font-size: 12px;
  &:hover {
    background-color: #3C3C3C;
    color: #fff;
    /* border: 1px solid #3360FF; */
  }
  @media (max-width: 1440px) {
    line-height: 24px;
    font-size: 9px;
  }
`

const SettingBtnborderline = styled(SettingBtn)`
  border-bottom: 1px solid gray;
    &:hover {
    color: red;
    background-color: #3C3C3C;
    /* border: 1px solid #3360FF; */
  }
`



export {
  // 좌측 슬라이더 부분
  SliderOutline,
  // 우측 컨텐츠 부분
  ModalContent,
  ContentInnerText,
  ContentSetting,
  CommentsLayout,
  CommentsInnerText,
  CommentsSettings,
  Reply,
  CommentWriteLayout,
  // ContentSetting 관련
  ContentSettingBoxLayout,
  SettingBtn,
  SettingBtnborderline
};
