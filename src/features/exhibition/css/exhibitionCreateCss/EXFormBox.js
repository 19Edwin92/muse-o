import styled from "styled-components";

const WriteRule = styled.div`
  display: flex;
  flex: 1;
  max-width: 190px;
  margin-left: 12px;
  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #5a5a5a;
  }
`;
const Box = styled.div`
  display: flex;
  margin: 18px 0px;
`;

const Explanation = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  flex: 1;
  max-width: 130px;
  padding-top: 8px;
`;

const DetailExplanation = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex: 1;
  max-width: 495px;
`;

export { WriteRule, Box, Explanation, DetailExplanation };
