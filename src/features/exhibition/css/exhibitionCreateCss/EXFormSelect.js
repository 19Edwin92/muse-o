import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: 235px;
  height: 42px;
`;

const SelectLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
`;

const SelectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  z-index: 10;
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

const SelectOption = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const SelectSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
`;

export { SelectWrapper, SelectLabel, SelectDropdown, SelectOption, SelectSpan };
