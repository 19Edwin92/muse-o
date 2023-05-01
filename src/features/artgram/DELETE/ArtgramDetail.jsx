// import React from "react";
// import { useFormInput } from "../../hooks/useFormInput";
// import { usePostcomments } from "../../hooks/artgram/usePostcomments";
// import * as Modal from "./ArtgramModal";
// import { Flex } from "../../components/Flex";
// import { Input } from "../../components/Input";
// import * as Artgramparts from "./Artgramparts";
// import { useGetartgramComments } from "../../hooks/artgram/useGetartgramComments";
// import { usePostingtime } from "../../hooks/artgram/usePostingtime";
// import ArtgramSlider from "./ArtgramSlider";
// import { useGetartgramDetail } from "../../hooks/artgram/useGetartgramDetail";
// import {BsHeartFill, BsFilePlusFill} from 'react-icons/bs' 
// import { useLikes } from "../../hooks/artgram/useLikes";
// import { useScrap } from "../../hooks/artgram/useScrap";

// function ArtgramDetail({pos}) {
//   const { artgramId, modalState, setModalState } = pos;
//     // 아트그램 상세모달페이지: 댓글 GET 관련 --------------------------------------------------------------------------- //
//     const [detailIsLoading, detailIsError,detailData] = useGetartgramDetail(artgramId)
//     const [commentsIsLoading, commentsIsError,commentsData] = useGetartgramComments(artgramId);
//     const [timehandle] = usePostingtime()  
//     console.log(detailData)
//   // 아트그램 상세모달페이지: 댓글 POST 관련 --------------------------------------------------------------------------- //
//   const [formState, setFormState, handleInputChange] = useFormInput();
//   const [commentHandle] = usePostcomments(setFormState);
//   const onSubmitcomment = (e) => {
//       e.preventDefault()
//       commentHandle(e, artgramId, formState.comment)
//   }
//   const {patchLikes} = useLikes()
//   const {patchScrap} = useScrap()

//   if (detailIsLoading || detailIsError || commentsIsLoading || commentsIsError) {
//     return <div>로딩 중....</div>;
//   }
  
//   return (
//     <>
//       {/* 상세모달페이지 바깥배경 ---------------------------------------------------------------------- */}
//       <Modal.ModalBackground
//         state={modalState}
//         onClick={() => setModalState((pre) => !pre)}
//       />
//       {/* 상세모달페이지 안쪽내용 ---------------------------------------------------------------------- */}
//       <Modal.ModalWindow state={modalState}>
//         <Flex>
//           {/* 상세모달페이지 (1) 이미지 삽입공간 --------------------------------------------------------- */}
//           <Modal.ModalinnerImgDiv width="70%">
//             {detailData.ArtgramImgs.length > 1 ? (
//               <ArtgramSlider map={detailData.ArtgramImgs} />
//             ) : (
//               <img src={detailData.ArtgramImgs[0].imgUrl} width="100%" />

//               // <Modal.ModdalinnerImg
//               //   src={detailData.ArtgramImgs.imgUrl}
//               //   width="100"
//               // />
//             )}
//           </Modal.ModalinnerImgDiv>
//           {/* 상세모달페이지 (2) 텍스트 공간 ------------------------------------------------------------ */}
//           <Modal.ModalinnerDiv width="30%">
//             {/* 상세모달페이지 (2-1) 사용자 정보 및 모달닫기 공간 ------------------------ */}
//             <Modal.ModalUsers>
//               <Flex>
//                 <Artgramparts.ProflieBox url={detailData.profileImg} />
//                 <Artgramparts.ModalNickname
//                   children={
//                     <>
//                       <span>by</span> 닉네임
//                       <p>{detailData.artgramTitle}</p>
//                     </>
//                   }
//                 />
//                 <div
//                   className="options"
//                   onClick={() => setModalState((pre) => !pre)}
//                 >
//                   {/* <BiDotsHorizontalRounded /> */} 닫기
//                 </div>
//               </Flex>
//             </Modal.ModalUsers>
//             {/* 상세모달페이지 (2-2) artgram Desc ------------------------------ */}
//             <Modal.ModalInner>
//               <div>
//                 <Artgramparts.ProflieBox url={detailData.profileImg} />
//               </div>
//               <Flex fd="column" jc="center">
//                 <Flex style={{ minHeight: "40px" }} ai="center">
//                   <p>
//                     {detailData.nickname} {timehandle(detailData.createdAt)}
//                   </p>
//                 </Flex>
//                 <div>
//                   <p>{detailData.artgramDesc}</p>
//                   <p>{detailData.hashtag.map((hashtag) => `#${hashtag}`)}</p>
//                   <div>
//                     <Artgramparts.Likes
//                       children={
//                         <div
//                           onClick={(event) => {
//                             event.stopPropagation();
//                             patchLikes(artgramId);
//                           }}
//                           style={{ display: "inline", zIndex: "10" }}
//                         >
//                           <span>
//                             <BsHeartFill
//                               color={
//                                 (detailData.liked && "#FB6E52") || "lightgray"
//                               }
//                             />
//                           </span>{" "}
//                         </div>
//                       }
//                     />
//                     <div
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         patchScrap(artgramId)
//                       }}
//                       style={{ display: "inline", zIndex: "10" }}
//                     >
//                       <span>
//                         <BsFilePlusFill color={detailData.scrap && "#4FC0E8" || "lightgray"} />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Flex>
//             </Modal.ModalInner>
//             {/* 상세모달페이지 (2-3) artgram 댓글관련열람 ------------------------- */}
//             <div
//               style={{
//                 borderTop: "1px solid gray",
//                 maxHeight: "670px",
//                 overflow: "scroll",
//               }}
//             >
//               {/* -------------------------- 댓글 map 관련 부분 */}
//               {commentsData &&
//                 commentsData.map((comment) => (
//                   <Modal.ModalInner key={comment.commentId}>
//                     <div>
//                       <Artgramparts.ProflieBox url={comment.profileImg} />
//                     </div>
//                     <Flex fd="column" jc="center">
//                       <Flex style={{ minHeight: "40px" }} ai="center">
//                         <p>{comment.profileNickname}</p>
//                       </Flex>
//                       <div>
//                         <p>{comment.comment}</p>
//                         <p>{timehandle(comment.createdAt)}</p>
//                       </div>
//                     </Flex>
//                   </Modal.ModalInner>
//                 ))}
//               {/* ---------------------------------------- */}
//             </div>
//             {/* 상세모달페이지 (2-4) artgram 댓글입력공간 ------------------------- */}
//             <Modal.ModalCommentsBox>
//               <form onSubmit={onSubmitcomment}>
//                 <Input
//                   inputProps={{
//                     type: "text",
//                     name: "comment",
//                     value: formState["comment"] || "",
//                     placeholder: "댓글 달기...",
//                     onChange: handleInputChange,
//                   }}
//                 />
//               </form>
//             </Modal.ModalCommentsBox>
//           </Modal.ModalinnerDiv>
//           {/* ------------------------------------------------------------------------------------ */}
//         </Flex>
//       </Modal.ModalWindow>
//     </>
//   );
// }

// export default ArtgramDetail;

