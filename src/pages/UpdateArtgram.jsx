import React from "react";
import Header from "../components/Header";
import { Article, Wrap } from "../shared/GlobalStyled";
import * as Artgramparts from '../features/artgram/css/Artgramparts'
import ArtgramUpdateForm from "../features/artgram/createArtgram/ArtgramUpdateForm";

function UpdateArtgram() {
  return (
    <>
      <Header />
      <Article>
        <Wrap>
          <Artgramparts.H1
            fs="3rem"
            type="아트그램"
            children="아트그램수정하기"
          />
          <Artgramparts.MainDiv>
            <ArtgramUpdateForm/>
          </Artgramparts.MainDiv>
        </Wrap>
      </Article>
    </>
  );
}

export default UpdateArtgram;
