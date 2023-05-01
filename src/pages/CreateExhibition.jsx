import React, { useEffect } from "react";
import { Article } from "../shared/GlobalStyled";
import Header from "../components/Header";
import { usePostExhibition } from "../hooks/exhibition/usetPostExhibition";
import ExhibitionForm from "../features/exhibition/exhibitionCreate/ExhibitionForm";
import { useRecoilState } from "recoil";
import { headerStatedefalut } from "../components/headerStore";

function CreateExhibition() {
  const [createExhibition] = usePostExhibition();
  const [headerState, setHeaderState] = useRecoilState(headerStatedefalut)
  useEffect(()=> {
    setHeaderState({...headerState, exhibition:true})
  },[])

  return (
    <>
      <Header />
      <Article>
        <ExhibitionForm createExhibition={createExhibition} />
      </Article>
    </>
  );
}

export default CreateExhibition;
