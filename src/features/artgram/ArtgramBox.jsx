import React from "react";
// import CSS & icons & png ------------------------------------------------------------------------------/
import * as Artgramparts from "./css/ArtgramCss";
// import { BsBookmarkFill, BsFillHeartFill } from "react-icons/bs";
import {RiBookmarkFill} from "react-icons/ri"
import {AiFillHeart} from "react-icons/ai"
import overlap_gray from '../../assets/imgs/artgram/overlap_gray.png'
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { useLikes } from "../../hooks/artgram/useLikes";
import { useScrap } from "../../hooks/artgram/useScrap";
import { useOpenModal } from "../../hooks/artgram/useOpenModal";
// import 컴포넌트 -----------------------------------------------------------------------------------------/
import ArtgarmDetailModal from "./detailModal/ArtgarmDetailModal";
import { usePostSearchWord } from "../../hooks/search/usePoseSearchWord";
import { useRecoilValue } from "recoil";
import { decodeUserRole } from "../login/loginTokenStore";
import { useNavigate } from "react-router-dom";
// ArtgramBox 컴포넌트 -------------------------------------------------------------------------------------/
function ArtgramBox({ info, postSearchWords }) {
  const { artgramId, imgUrl, imgCount, profileImg,nickname, scrapCount, scrap, likeCount, liked,} 
  = info; // props로 전달받은 useGetartgraminfinity의 개별데이터의내용 
  const { patchScrap } = useScrap(); // 스크랩관련 비동기통신 PATCH
  const { patchLikes } = useLikes(); // 좋아요관련 비동기통신 PATCH
  const {modalState, openModalhandle} = useOpenModal(); // 개별데이터 상세페이지를 열 모달관련 커스컴 훅 
  const userRole = useRecoilValue(decodeUserRole)
  const {postSearchWord} = usePostSearchWord()
  const navigate = useNavigate()
  const artgramEvent = () => {
    if(postSearchWords?.type) {
      const {type, title} = postSearchWords
      postSearchWord({type, title})
      openModalhandle()
    } else {
      openModalhandle()
    }
  }

  return (
    <Artgramparts.BoxWrap onClick={() => artgramEvent()}>
      <Artgramparts.BoxImg children={<img className="artgramimg" src={imgUrl} alt="아트그램 이미지" />}/>
      <Artgramparts.BoxProfile>
        <Artgramparts.BoxProfileimg
          children={<img src={profileImg} alt="artgramProfileImg" />} />
        <Artgramparts.BoxProfileNickname 
          children={<><span>by</span> {nickname}</>} />
        <Artgramparts.Scrap
          state={scrap}
          onClick={(event) => {
            event.stopPropagation();
            !userRole && window.confirm("회원만 가능합니다. 로그인 하시겠습니까?") && navigate('/login')
            userRole && patchScrap(artgramId)}}
          children={
            <>
              <p children={<RiBookmarkFill />} />
              <p children={scrapCount}/>
            </>}/>
        <Artgramparts.Heart
          state={liked}
          onClick={(event) => {
            event.stopPropagation();
            !userRole && window.confirm("회원만 가능합니다. 로그인 하시겠습니까?") && navigate('/login')
            userRole && patchLikes(artgramId)
            
          }}
          children={
            <>
              <p children={<AiFillHeart />} />
              <p children={likeCount}/>
            </>} />
      </Artgramparts.BoxProfile>
      
       {/* 해당 아트그램의 이미지가 복수인 경우 표시할 아이콘 */}
      {imgCount > 1 && (
        <Artgramparts.PluralImgs children={<img src={overlap_gray} alt="복수이미지표시" />} />)}
      
      {/* 해당 아크그램을 클릭했을 때 상세모달페이지가 실행되는 컴포넌트 */}
      {modalState && (<ArtgarmDetailModal artgramId={artgramId} modalState={modalState} openModalhandle={openModalhandle}/>)}
    </Artgramparts.BoxWrap>
  );
}

export default ArtgramBox;
