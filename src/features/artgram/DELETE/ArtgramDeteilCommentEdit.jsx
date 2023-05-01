// import React from "react";
// // import CSS & icons & png ------------------------------------------------------------------------------/
// import * as DetailModal from "./ArtgramDetailModalCss";
// // import 커스텀 훅 ----------------------------------------------------------------------------------------/
// import { useGetReply } from "../../../hooks/artgram/newArtgram/useGetReply";
// import { usePostingtime } from "../../../hooks/artgram/usePostingtime";
// import { usePostReply } from "../../../hooks/artgram/newArtgram/usePostReply";
// import { useUpdatecomments } from "../../../hooks/artgram/newArtgram/useUpdatecomments";
// import { useDeletecomments } from "../../../hooks/artgram/newArtgram/useDeletecomments";
// // import 설정관련 -----------------------------------------------------------------------------------------/
// import { usetoken } from "../../../shared/cookies";
// // // ArtgramDetailComments 컴포넌트 -----------------------------------------------------------------------/ 
// function ArtgramDeteilCommentEdit({ artgramId, comment }) {
//   const {decodetoken} = usetoken() // ToKen에서 사용자 Email 정보 가져오기 
//   const [timehandle] = usePostingtime(); // 서버로부터 받아온 날짜을 가공하는 커스텀 훅
//   const { deleteHandle } = useDeletecomments(); // 댓글삭제 비동기통신 DELETE 
//   const { edit, setEdit,updatecomment, setUpdateComment, onSubmitupdateComments } = 
//     useUpdatecomments(artgramId, comment.commentId); // 댓글수정 비동기통신 UPDATE
//   const {replyState, setReplyState,reply, setReply,replyHandle} = usePostReply(); // 대댓글입력 비동기통신 POST
//   const { isLoading, isError, data:replydata } = useGetReply(artgramId,comment.commentId); // 대댓글조회 비동기통신 GET

//   if (isLoading || isError) {
//     return <div>로딩 중 ...</div>;
//   }

//   return (
//     <>
//       <DetailModal.CommentsInnerText>
//         <div className="profileNickname">
//           <p>{comment.profileNickname}</p>
//         </div>
//         <div className="artgarmcomment">
//           {!edit ? (
//             <p>{comment.comment}</p>
//           ) : (
//             <form onSubmit={onSubmitupdateComments}>
//               <input
//                 value={updatecomment}
//                 onChange={(e) => setUpdateComment(e.target.value)}
//                 placeholder={comment.comment}
//               />
//             </form>
//           )}
//         </div>
//       </DetailModal.CommentsInnerText>

//       <DetailModal.CommentsSettings>
//         <p className="artgarmcommentTime">{timehandle(comment.createdAt)}</p>
//         {!replyState ? (
//           <p
//             className="commentwrite"
//             onClick={() => setReplyState((pre) => !pre)}
//           >
//             답글달기
//           </p>
//         ) : (
//           <form
//             onSubmit={(e) =>
//               replyHandle(e, artgramId, comment.commentId, reply)
//             }
//           >
//             <input
//               value={reply}
//               onChange={(e) => setReply(e.target.value)}
//               placeholder="답글을 입력해주세요."
//             />
//           </form>
//         )}
//         {decodetoken.email === comment.userEmail && (
//           <>
//             {!edit ? (
//               <p
//                 className="commentwrite"
//                 onClick={() => {
//                   setEdit((pre) => !pre);
//                 }}
//               >
//                 수정
//               </p>
//             ) : (
//               <p className="commentwrite" onClick={onSubmitupdateComments}>
//                 수정완료
//               </p>
//             )}
//             <p
//               className="commentwrite"
//               onClick={() => deleteHandle(artgramId, comment.commentId)}
//             >
//               삭제
//             </p>
//           </>
//         )}
//       </DetailModal.CommentsSettings>
//       {comment.replyCount > 0 && (
//         <DetailModal.Reply>
//           <div>
//             <hr />
//           </div>
//           <div>답글보기 ({comment.replyCount}) </div>
//         </DetailModal.Reply>
//       )}
//     </>
//   );
// }

// export default ArtgramDeteilCommentEdit;

