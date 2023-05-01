import React, { useState } from 'react'
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { usetoken } from '../../../shared/cookies';
import {usePostingtime} from '../../../hooks/artgram/usePostingtime'
import {useDeletecomments} from '../../../hooks/artgram/newArtgram/useDeletecomments'
import {useUpdatecomments} from '../../../hooks/artgram/newArtgram/useUpdatecomments'
import {usePostReply} from '../../../hooks/artgram/newArtgram/usePostReply'
import * as Comment from '../css/ArtgramDetailCss'
import ArtgramDetailReply from './ArtgramDetailReply';

// // ArtgramDeteilCommentsEdit 컴포넌트 -------------------------------------------------------------------/
function ArtgramDeteilCommentsEdit({artgramId, comment}) {
  const {decodetoken} = usetoken() // ToKen에서 사용자 Email 정보 가져오기 
  const [timehandle] = usePostingtime(); // 서버로부터 받아온 날짜을 가공하는 커스텀 훅
  const {deleteHandle } = useDeletecomments(); // 댓글삭제 비동기통신 DELETE 
  const { edit, setEdit, updatecomment, setUpdateComment, onSubmitupdateComments } = 
    useUpdatecomments(artgramId, comment.commentId); // 댓글수정 비동기통신 UPDATE
  const {replyState, setReplyState, reply, setReply,replyHandle} = usePostReply(); // 대댓글입력 비동기통신 POST
  const [showReply, setShowReply] = useState(false)

  return (
    <>
    <Comment.ProfileNickNameComments>
      <span className='profileNickname'>{comment.profileNickname}</span>
      {!edit ?
      <span className='comments'>{comment.comment}</span>
    : (<form className='commentsUpdateForm' onSubmit={(e) => onSubmitupdateComments(e)}>
      <input value={updatecomment} onChange={(e)=>setUpdateComment(e.target.value)} placeholder={comment.comment}/>
    </form>)}
    </Comment.ProfileNickNameComments>
    <div style={{display:"flex", gap:"10px", marginTop:"4px", marginBottom:"16px"}}>
      <div>{timehandle(comment.createdAt)}</div>
      {decodetoken?.email === comment.userEmail && (<>
          {!edit
            ? (<div onClick={()=>setEdit(pre=>!pre)}>수정</div>)
            : (<div onClick={(e) => onSubmitupdateComments(e)}>수정완료</div>)}
          <div onClick={() => deleteHandle(artgramId, comment.commentId)}>삭제</div>
      </>)}
        {!decodetoken?.email
        ? null
        : decodetoken?.email && !replyState 
        ? <div onClick={()=>setReplyState(pre=>!pre)}>답글달기</div>
        : <form onSubmit={(e)=>replyHandle(e, artgramId, comment.commentId,reply)}>
          <input value={reply} onChange={(e)=>setReply(e.target.value)} placeholder='답글을 입력해주세요.'/>
        </form>}
    </div>
    
    {comment.replyCount > 0 && (
      <div>
        {!showReply
          ? <div style={{display:"grid", gridTemplateColumns:"50px 1fr"}}>
            <div style={{borderTop: "1px solid black", margin: "6px 0", marginRight:"10px"}}></div>
            <div onClick={()=>setShowReply(pre=>!pre)}> 답글보기 ({comment.replyCount})</div>
          </div>
          : <ArtgramDetailReply artgramId={artgramId} commentId={comment.commentId}/>
        }
      </div>
    )}
    </>
  )
}

export default ArtgramDeteilCommentsEdit;