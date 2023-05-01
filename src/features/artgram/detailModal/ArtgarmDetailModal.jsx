import React from "react";
// import CSS & icons & png ------------------------------------------------------------------------------/
import * as Artgramparts from "../css/ArtgramCss";
import * as DetailModal from '../css/ArtgramDetailModalCss'
import cancel_WGray from '../../../assets/imgs/common/cancel_WGray.png'
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { useGetartgramDetail } from "../../../hooks/artgram/useGetartgramDetail";
// import 컴포넌트 -----------------------------------------------------------------------------------------/
import ArtgramSlider from "../ArtgramSlider";
import ArtgramDetailContent from "./ArtgramDetailContent";
import ArtgramDetailComments from "./ArtgramDetailComments";
import ArtgramDetailCommentWrite from "./ArtgramDetailCommentWrite";
// ArtgarmDetailModal 컴포넌트 -----------------------------------------------------------------------------/
function ArtgarmDetailModal({ artgramId, modalState, openModalhandle }) {
  const [detailIsLoading, detailIsError, detailData] = useGetartgramDetail(artgramId); // 아트그램상세정보 비동기통신 GET
  return (
    <>
      {/* 상세모달페이지 바깥배경 - stopPropagation() 부모컴포넌트인 ArtgramBox에서 발생되는 이벤트 버블링을 제어하기 위한 선언 */}
      <Artgramparts.ModalBackground
        state={modalState}
        onClick={(e) => {
          e.stopPropagation();
          openModalhandle();}} 
        children={<img src={cancel_WGray}/>}/>

      {/* 상세모달페이지 안쪽내용 - stopPropagation() 부모컴포넌트인 ArtgramBox에서 발생되는 이벤트 버블링을 제어하기 위한 선언 */}
      <Artgramparts.ModalWindow
        state={modalState}
        onClick={(e) => e.stopPropagation()}>  

        {detailIsLoading || detailIsError
        ? (<div>로딩 중...</div>) 
        : (<>
            <DetailModal.SliderOutline
              children={detailData.ArtgramImgs.length > 1 
                ? (<div className="sliderLayout">
                    <ArtgramSlider map={detailData.ArtgramImgs} />
                  </div>) 
                : (<img src={detailData.ArtgramImgs[0].imgUrl} width="100%" />)} />

            <DetailModal.ModalContent>
              <ArtgramDetailContent detailData={detailData}/>
              <ArtgramDetailComments artgramId={artgramId}/>
              <ArtgramDetailCommentWrite artgramId={artgramId} detailData={detailData}/>
            </DetailModal.ModalContent>
          </>
        )}
      </Artgramparts.ModalWindow>
    </>
  );
}

export default ArtgarmDetailModal;
