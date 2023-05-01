import styled from "styled-components";
const TBOX = styled.div`
  position: relative;
`;

const PreviewBoxDelete = styled.div`
  position: absolute;
  text-align: center;
  right: 8px;
  top: 8px;
  width: fit-content;
  line-height: 20px;
  border-radius: 4px;
  padding: 2px 4px;
  background: #3c3c3c;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
const SectionSpan = styled.span`
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  user-select: none;
`;

const Count = styled.span`
  margin-left: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
`;

const ButtonsAddress = styled.button`
  border: 1px solid #3c3c3c;
  border-radius: 8px;
  background: #ffffff;
  :hover {
    background-color: #eeeeee;
  }
`;

const TitleP = styled.p`
  flex: 1;
  max-width: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
`;
const LocationBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Separator = styled.span`
  margin: 0 8px;
  font-size: 35px;
`;

const Textarea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  resize: none;
  overflow-y: auto;
  border-radius: 8px;
  padding: 10px;
  ::-webkit-scrollbar {
    width: 8px;
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;

const ExDesc = styled.div`
  width: 493px;
  height: auto;
`;

const TitleInput = styled.input`
  background-color: ${({ bg }) => bg};
  max-width: ${({ width }) => width || "100%"};
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  height: 41px;
  flex: 1;
`;

const ExTitleKor = styled.div`
  display: flex;
  height: 41px;
  width: 100%;
  align-items: center;
`;

const EXColum = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentsWrap = styled.div`
  margin-top: 172px;
  display: flex;
  width: 820px;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 110px;
  background: #3c3c3c;
  border-radius: 10px 10px 0px 0px;
`;

const Thumb = styled.div`
  position: relative;
  display: inline-flex;
  border-radius: 2;
  border: 4px solid #eaeaea;
  gap: 8px;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Thumbimg = styled.img`
  display: block;
  max-width: auto;
  max-height: 150px;
`;

const ThumbsContainer = styled.aside`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 250px;
  gap: 13px;
  border-bottom: 1px dashed #242424;
  border-right: 1px dashed #242424;
  border-left: 1px dashed #242424;
  border-radius: 0 0 10px 10px;
  margin: 0px 0px 50px 0px;
`;

const TumbsWrap = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 210px;
  margin: 0px 0px 50px 0px;
  padding: 16px;
  gap: 13px;
  overflow-x: scroll;
  margin: 10px;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #244dde;
  }
`;

export {
  TBOX,
  PreviewBoxDelete,
  SectionSpan,
  Count,
  ButtonsAddress,
  TitleP,
  LocationBox,
  Separator,
  Textarea,
  ExDesc,
  TitleInput,
  ExTitleKor,
  EXColum,
  ContentsWrap,
  Section,
  Thumb,
  ThumbInner,
  Thumbimg,
  ThumbsContainer,
  TumbsWrap,
};
