import React from "react";
import Header from "../components/Header";
import { Article } from "../shared/GlobalStyled";
import { useParams } from "react-router-dom";
import { useDetailGetExibition } from "../hooks/exhibition/useDetailGetExibition";
import ExhibitionForm from "../features/exhibition/exhibitionCreate/ExhibitionForm";
import { usePatchExhibition } from "../hooks/exhibition/usePatchExhibition";
import { useDeleteExhibition } from "../hooks/exhibition/useDeleteExhbition";

function UpdateExhibition() {
  const { id } = useParams();
  const [updateExhibition] = usePatchExhibition(id);
  const [data, isLoading] = useDetailGetExibition(id);
  const [deleteExhibition] = useDeleteExhibition();
  const deleteHandler = () => {
    if (window.confirm("정말 이 게시글을 삭제합니까?")) {
      deleteExhibition(id);
    }
  };

  return (
    <>
      <Header />
      <Article>
        <ExhibitionForm
          Detaildata={data}
          DetailLoading={isLoading}
          updateExhibition={updateExhibition}
          deleteHandler={deleteHandler}
        />
      </Article>
    </>
  );
}

export default UpdateExhibition;
