import React from "react";
import { useScrapExhibition } from "../../../hooks/exhibition/useScrapExhibition";
import styled from "styled-components";
import { usetoken } from "../../../shared/cookies";

//!좋아요랑 버튼 로직이 비슷한데 리팩토링때 합치기.
function ExhibitionScrap({ exhibitionId, children }) {
  const { access_token } = usetoken();
  const [scrapExhibition] = useScrapExhibition();
  const scrapHandler = (exhibitionId) => {
    if (!access_token) {
      alert("로그인이 필요한 서비스 입니다.");
      return;
    }
    scrapExhibition(exhibitionId);
  };
  return (
    <ScrapBtn onClick={() => scrapHandler(exhibitionId)}>{children}</ScrapBtn>
  );
}

export default ExhibitionScrap;

const ScrapBtn = styled.button`
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
`;
