import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import writeButton from '../../assets/imgs/common/writeButton.png'
import writeButtonBlack from '../../assets/imgs/common/writeButtonBlack.png'

function ArtgramWrite() {
  const navigate = useNavigate();
  const [writeButtonState, setWriteButton] = useState(false)
  return (
    <Artgramwrite
      onMouseOver={()=> setWriteButton(true)}
      onMouseOut={()=> setWriteButton(false)}
      onClick={() => navigate("/artgram/create")}
      children={writeButtonState ? <img src={writeButtonBlack} alt="아트그램등록"/> : <img src={writeButton} alt="아트그램등록"/>}
    ></Artgramwrite>
  );
}

export default ArtgramWrite;

const Artgramwrite = styled.div`
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
`;
