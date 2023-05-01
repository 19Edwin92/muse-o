// import React from 'react'
// import {BsHeartFill, BsFilePlusFill} from 'react-icons/bs' 
// import * as Artgramparts from './Artgramparts'
// import { usePostingtime } from '../../hooks/artgram/usePostingtime'
// import {IoMdImages} from 'react-icons/io'
// import { useLikes } from '../../hooks/artgram/useLikes'
// import { useScrap } from '../../hooks/artgram/useScrap'

// const ArgramBox = ({pos}) => {
//   // pos으로 전달받은 내용 구조분해 할당 ------------------------------------------------------------------------------- //
//   const {
//     artgramId,artgramTitle,imgCount,imgUrl,likeCount,liked,scrap,profileImg,nickname,openModalhandle} = pos;
//   const {patchLikes} = useLikes()
//   const {patchScrap} = useScrap()
//   // GET : allArtgram.Posting 의 시간을 구하는 커스텀 훅 -------------------------------------------------------------- //
//   return (
//     <>
//       {/* ArgramBox의 개별 Argram 뷰파트 ---------------------------------------------------------------------- */}
//       <Artgramparts.Artgrambox
//         fd="column"
//         gap="10"
//         onClick={() => openModalhandle(artgramId)}>
//         <Artgramparts.Img src={imgUrl && imgUrl} />
//         <Artgramparts.UserFlex>
//           <Artgramparts.ProflieBox url={profileImg} />
//           <Artgramparts.Nickname
//             children={
//               <>
//                 <span>by</span> {nickname}
//               </>
//             }
//           />
//           <div
//             onClick={(event) => {
//               event.stopPropagation();
//               patchScrap(artgramId);
//             }}
//             style={{ display: "inline", zIndex: "10" }}
//           >
//             <span>
//               <BsFilePlusFill
//                 color={(scrap && "#4FC0E8") || "lightgray"}
//               />
//             </span>
//           </div>
//           <Artgramparts.Likes
//             children={
//               <>
//                 <div
//                   onClick={(event) => {
//                     event.stopPropagation();
//                     patchLikes(artgramId);
//                   }}
//                   style={{ display: "inline", zIndex: "10" }}
//                 >
//                   <span>
//                     <BsHeartFill color={(liked && "#FB6E52") || "lightgray"} />
//                   </span>{" "}
//                 </div>
//                 {likeCount}
//               </>
//             }
//           />
//         </Artgramparts.UserFlex>
//         {/* 사진 복수 유무에 따른 조건부 렌더링 --------------------------------------------------------------------- */}
//         {imgCount > 1 && (
//           <Artgramparts.PluralImgs
//             children={
//               <p>
//                 <IoMdImages />
//               </p>
//             }
//           />
//         )}
//       </Artgramparts.Artgrambox>
//     </>
//   );
// }

// export default ArgramBox