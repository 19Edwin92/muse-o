import React, { useState } from "react";
import * as Main from "./css/mainparts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAsNavForSliderMainFifith } from "../../hooks/main/useAsNavForSliderMainFifith";
import { useCurrentArtgram } from "../../hooks/main/useCurrentArtgram";
import { useOpenModal } from '../../hooks/main/useOpenModal'
import ArtgarmDetailModal from '../artgram/detailModal/ArtgarmDetailModal'
import { useNavigate } from "react-router-dom";

function MainFifith() {
  // 서버로 부터 받아 온 배열을 슬라이더의 목적에 따라 가공하는 커스텀 훅
  const { mainSliderSettings, subSliderSettings, currentSlideIndex } =
    useAsNavForSliderMainFifith();
  const navigate = useNavigate()
  // 상세모달 
  const { modalState, openModalhandle } = useOpenModal();
  const [modalArtgramId, setModalArtgramId] = useState(null);

  const { isLoading, isError, data } = useCurrentArtgram();
  let editLists;
  if(data) {
    const editList = [...data]
    const editshiftitem = editList.shift()
    editList.push(editshiftitem)
    editLists = editList
  }
  return (
    <Main.FifthLayout height="640"  media1440="480">
      <Main.ArticleTitle>
        <Main.MainH1 children="아트그램" />
        <Main.MainH5 children="더보기 >" onClick={()=>navigate('/artgram')}/>
      </Main.ArticleTitle>
      { isLoading || isError 
        ? <div style={{marginTop:"66px"}}>로딩 중...</div>
        : 
        <Main.FifthWrapGrid>
        <Main.MainSlider>
          <Slider {...mainSliderSettings}>
            {data && data.map(artgram => (
              <Main.MainSliderWrap key={artgram.artgramId} onMouseOver={()=>setModalArtgramId(artgram.artgramId)} onClick={() =>openModalhandle(artgram.artgramId)}>
                <Main.MainSliderImg children={<img className="artgramimg" src={artgram.imgUrl}/>}/>
                <Main.MainSliderProfile>
                  <Main.MainSliderProfileImg src={artgram.authorProfileImg} alt="authorProfileImg"/>
                  <Main.MainSliderProfileNickName children={<>by <span>{artgram.authorNickName}</span></>} />
                </Main.MainSliderProfile>
              </Main.MainSliderWrap>
            ))}
          </Slider>
        </Main.MainSlider>
        <Main.SubSlider>
          <Slider {...subSliderSettings}>
            {editLists && editLists.map(artgram => (
                <Main.SubSliderLayout key={artgram.artgramId} onMouseOver={()=>setModalArtgramId(artgram.artgramId)} onClick={() =>openModalhandle(artgram.artgramId)}>
                  <Main.SubSliderWrap>
                    <Main.SubSliderImg children={<img className="artgramimg" src={artgram.imgUrl}/>}/>
                    <Main.SubSliderProfile>
                      <Main.MainSliderProfileImg src={artgram.authorProfileImg} alt="authorProfileImg"/>
                      <Main.MainSliderProfileNickName children={<>by <span>{artgram.authorNickName}</span></>} />
                    </Main.SubSliderProfile>
                  </Main.SubSliderWrap>
              </Main.SubSliderLayout>
            ))}
          </Slider>
        </Main.SubSlider>
        <Main.SliderIndex children={currentSlideIndex < 10 
            ? <>0{currentSlideIndex}&nbsp;<span>/ 0{editLists.length}</span></> 
            : <>{currentSlideIndex}&nbsp;<span>/ {editLists.length}</span></>}/>
      </Main.FifthWrapGrid>
        }
      {modalState && (
          <>
            {data.map(   
              ({artgramId}) =>
                artgramId === modalArtgramId && (                
                  <ArtgarmDetailModal key={artgramId} artgramId={artgramId} modalState={modalState} openModalhandle={openModalhandle}/>
                )
            )}
          </>
        )}
    </Main.FifthLayout>
  );
}

export default MainFifith;