import styled from "styled-components";

const CommentBox = styled.div`
  display:grid;
  grid-template-columns:33px 1fr;
  margin-bottom:10px;
  gap:5px;
  @media (max-width: 1440px) {
    grid-template-columns:24.75px 1fr;
    margin-bottom:7.5px;
    gap:3.75px;
  }
`

const CommentBoxProfileImg = styled.div`
  background-color:lightgray;
  background-image: url(${pos => pos.img});
  background-position: center;
  background-size: cover;
  width:33px;
  height:33px;
  border-radius:50px;
  @media (max-width: 1440px) {
    width:24.75px;
    height:24.75px;
  }
`

const CommentBoxInnerText = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  /* background-color:yellow; */
`

const ProfileNickNameComments = styled.div`
  .profileNickname{
    font-family: "Montserrat";
    font-weight:550;
    font-size: 12px;
    @media (max-width: 1440px) {
      font-size: 9px;
    }
  }
  .comments {
    margin-left:8px;
    font-size:12px;
    line-height:20px;
    @media (max-width: 1440px) {
      margin-left:6px;
      font-size:9px;
      line-height:15px;
    }
  }
  .commentsUpdateForm {
    display: inline-block;
    margin-left:8px;
    font-size:12px;
    height:20px;
    @media (max-width: 1440px) {
      margin-left:6px;
      font-size:9px;
      line-height:15px;
    }

    input {
    width: 430px;
    border: 2px solid orange;
    border-radius: 15px;
    font-size: 13px;
    padding-left: 4px;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 10px; /* 원하는 글자 크기 설정 */
      }
      @media (max-width: 1440px) {
        width: 322.5px;
        border: 1.5px solid orange;
        border-radius: 11.25px;
        font-size: 9.75px;
        padding-left: 3px;
      }
    }
  }
`

export {
  CommentBox,
  CommentBoxProfileImg,
  CommentBoxInnerText,
  ProfileNickNameComments
}