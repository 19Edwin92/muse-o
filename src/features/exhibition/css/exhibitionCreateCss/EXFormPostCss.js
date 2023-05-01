import styled from "styled-components";
const PreviewBoxDelete = styled.div`
  position: absolute;
  text-align: center;
  right: 8px;
  top: 8px;
  width: fit-content;
  line-height: 20px;
  border-radius: 4px;
  padding: 2px 4px;
  background-color: #242424;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const PostWrap = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  flex: 1;
  max-width: 515px;
  max-height: 1080px;
  margin-left: 75px;
`;
const Post = styled.div`
  position: fixed;
`;
const PageTitle = styled.h1`
  margin-top: 40px;
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;
`;
const SelectOnOff = styled.div`
  margin-top: 30px;
`;
const commonStyle = `
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  background-color: transparent;
  :hover {
    color: #242424;
  }
  color: #7e7e7e;
`;

const Offline = styled.button`
  ${commonStyle}
  margin-right: 60px;
  color: ${(props) =>
    props.exhibitionKind === "EK0001" ? "#242424" : "#7e7e7e"};
`;

const OnLine = styled.button`
  ${commonStyle}
  cursor: pointer;
  color: ${(props) =>
    props.exhibitionKind === "EK0002" ? "#242424" : "#7e7e7e"};
`;

const PostImgArea = styled.div`
  display: flex;
  background-color: #d9d9d9;
  height: 520px;
  width: 364px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const DragIcon = styled.img`
  display: block;
  width: 18px;
  height: 18px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: linear-gradient(180deg, #3360ff 0%, #b960ff 100%);
  border-radius: 50px;
`;

const UpDateButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SubmitButton = styled.button`
  background-color: #d9d9d9;
  width: 364px;
  height: 40px;
  border-radius: 50px;
  margin-top: 15px;
`;

const Caution = styled.div`
  width: 364px;
  height: 100px;
  background-color: #d9d9d9;
  margin-top: 20px;
`;

const PreviewBox = styled.div`
  position: relative;
  width: 365px;
  max-height: 520px;
  margin-top: 40px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export {
  PreviewBoxDelete,
  PreviewBox,
  DragIcon,
  SelectOnOff,
  PostWrap,
  PageTitle,
  Offline,
  OnLine,
  UpDateButtons,
  Post,
  Caution,
  SubmitButton,
  PostImgArea,
  Circle,
};
