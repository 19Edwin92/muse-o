import React from "react";
import Header from "../components/Header";
import { Article, Wrap } from "../shared/GlobalStyled";
import * as Artgramparts from '../features/artgram/css/Artgramparts'
import ArtgramForm from "../features/artgram/createArtgram/ArtgramForm";

function CreateArtgram() {
  return (
    <>
      <Header />
      <Article>
        <Wrap>
          <Artgramparts.H1
            fs="3rem"
            type="아트그램"
            children="아트그램등록하기"
          />
          <Artgramparts.MainDiv>
            <ArtgramForm/>
          </Artgramparts.MainDiv>
        </Wrap>
      </Article>
    </>
  );
}

export default CreateArtgram;
