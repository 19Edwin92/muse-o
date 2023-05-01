import React from 'react'
// import CSS & icons & png ------------------------------------------------------------------------------/
import * as Comment from '../css/ArtgramDetailCss'
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { useGetReply } from '../../../hooks/artgram/newArtgram/useGetReply'
import styled from 'styled-components';
import { usetoken } from '../../../shared/cookies';
import { useMutation } from '@tanstack/react-query';
import { useDeleteReply } from '../../../hooks/artgram/newArtgram/useDeleteReply';
import { usePostingtime } from '../../../hooks/artgram/usePostingtime';

function ArtgramDetailReply({artgramId, commentId}) {
  const { isLoading, isError, data: reply } = useGetReply(
    artgramId,
    commentId
  );
  const {decodetoken} = usetoken() // ToKen에서 사용자 Email 정보 가져오기 
  console.log(reply);
  const {deleteHandle} = useDeleteReply()
  const [timehandle] = usePostingtime(); // 서버로부터 받아온 날짜을 가공하는 커스텀 훅

  return (
    <>
      {isLoading || isError 
        ? (<div>로딩 중 ...</div>) 
        : reply && reply.map(reply=> (<Comment.CommentBox key={reply.commentId}>
          <Comment.CommentBoxProfileImg img={reply.profileImg} />
          <Comment.CommentBoxInnerText>{reply.comment}
          <div style={{display:"flex",gap:"8px"}}>
            <div>{timehandle(reply.createdAt)}</div>
            {decodetoken?.email === reply.userEmail && <div onClick={()=>deleteHandle(artgramId, reply.commentParent, reply.commentId)}>삭제</div>}
          </div>
          </Comment.CommentBoxInnerText>
          
        </Comment.CommentBox>))}
        {/* <div>{artgramId}-{commentId}</div> */}
    </>
  );
}

export default ArtgramDetailReply


// comment: "ㅋㅋㅋ 얏호 달린다"

// commentId: "b07852a6-e992-48ff-a83a-6e30784ebe0a"

// commentParent: "fff444c8-26ce-4d93-b56b-ad26369e1353"

// createdAt: "2023-04-21T05:49:27.000Z"

// profileImg: "https://woog-s3-bucket.s3.amazonaws.com/profile/3673ea1b-a9b9-4881-ac67-9e4db717237d.png"

// profileNickname: "edwin01"

// userEmail: "gg@g.com"

// Object 견본