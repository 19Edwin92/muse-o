import React, { useState } from "react";
import styled from "styled-components";
import { useHashTagInput } from "../hooks/artgram/useHashTagInput";

export const Input = ({ label, inputProps }) => (
  <DivFlex>
    {label && <Label>{label}</Label>}
    <StyledInput {...inputProps} />
  </DivFlex>
);

export const TextArea = ({ label, inputProps }) => (
  <DivFlex>
    {label && <Label>{label}</Label>}
    <StyledTextArea {...inputProps} />
    <CountValue length={inputProps.value.length}>{inputProps.value && inputProps.value.length || 0}/600</CountValue>
  </DivFlex>
);

export const TextAreaUpdate = ({ label, inputProps }) => (
  <DivFlex>
    {label && <Label>{label}</Label>}
    <StyledTextArea2 {...inputProps} />
    <CountValue length={inputProps.value.length}>{inputProps.value && inputProps.value.length || 0}/600</CountValue>
  </DivFlex>
);

export const HashTagInput = ({ label, hashTag, setHashTag }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const { handleInputKeyDown, handleRemoveHashTag } = useHashTagInput(
    inputValue,
    setInputValue,
    hashTag,
    setHashTag
  );
  return (
    <HashTagLayout>
      <DivFlex>
        {label && <Label>{label}</Label>}
        <HashTagInputs
          type="text"
          value={inputValue}
          placeholder="태그를 입력해주세요."
          onChange={handleInputChange}
          onKeyPress={handleInputKeyDown}/>
      </DivFlex>

      <HashTagDiv>
        {hashTag.map(hashTag=>(<HashTag key={hashTag}># {hashTag} <HashTapDelete onClick={() => handleRemoveHashTag(hashTag)}>x</HashTapDelete></HashTag>))}
        </HashTagDiv>

    </HashTagLayout>
  );
};

const DivFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  width: 100px;
  font-size: 20px;
  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;

const StyledInput = styled.input`
  display: flex;
  flex-grow: 1;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  ::placeholder{
    font-size: 12px;
  }
  @media (max-width: 1440px) {
    font-size: 12px;
    ::placeholder{
    font-size: 8px;
  }
  }
`;

const StyledTextArea = styled.textarea`
  display: flex;
  flex-grow: 1;
  height: 365px;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  resize: none;
  box-sizing: border-box;

  ::placeholder{
    font-size: 12px;
  }
  @media (max-width: 1440px) {
    height: 273.75px;
    font-size: 12px;
    ::placeholder{
    font-size: 8px;
  }
  }
`;

const StyledTextArea2 = styled.textarea`
  display: flex;
  flex-grow: 1;
  height: 322px;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  resize: none;
  box-sizing: border-box;

  ::placeholder{
    font-size: 12px;
  }
  @media (max-width: 1440px) {
    height: 232px;
    font-size: 12px;
    ::placeholder{
    font-size: 8px;
  }
  }
`;

const CountValue = styled.div`
  position: absolute;
  bottom: 8px;
  right:16px;
  width: fit-content;
  background-color: rgba(255,255,255, 0.9);
  color: ${({length}) => length < 500 ? "gray" : "red"};

`

const HashTagLayout = styled.div`
`

const HashTagDiv = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 100px;
  margin-top: 8px;
`

const HashTag = styled.div`
  border-radius: 10px;
  padding: 4px;
  width: fit-content;
  line-height: 1.2rem;
  background-color: #3C3C3C;
  color: #fff;
`

const HashTapDelete = styled.div`
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  width: 16px;
  text-align: center;
  margin-left: 4px;
  color: #3C3C3C;
  &:hover{
    cursor: pointer;
  }
`

const HashTagInputs = styled(StyledInput)`
  &:focus {
    outline: none;
    border-color: #666;
  }
`;