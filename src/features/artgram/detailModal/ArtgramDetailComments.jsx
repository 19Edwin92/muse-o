import React from "react";
// import CSS & icons & png ------------------------------------------------------------------------------/
import { CommentsLayout } from "../css/ArtgramDetailModalCss";
import * as Comment from '../css/ArtgramDetailCss'
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { useGetartgramComments } from "../../../hooks/artgram/useGetartgramComments";
import ArtgramDeteilCommentsEdit from "./ArtgramDeteilCommentsEdit";
// ArtgramDetailComments 컴포넌트 --------------------------------------------------------------------------/
function ArtgramDetailComments({ artgramId }) {
  const [commentsIsLoading, commentsIsError, commentsData] = useGetartgramComments(artgramId); // 아트그램상세, 댓글조회 비동기통신 GET
  return (
    <CommentsLayout>
      {commentsIsLoading || commentsIsError
      ? (<div>로딩 중 ...</div>) 
      : commentsData.map((comment) => (
        <Comment.CommentBox key={comment.commentId}>
          <Comment.CommentBoxProfileImg img={comment.profileImg} />
          <Comment.CommentBoxInnerText children={<ArtgramDeteilCommentsEdit artgramId={artgramId}comment={comment}/>}/>

        </Comment.CommentBox>
        ))
      }
    </CommentsLayout>
  );
}

export default ArtgramDetailComments;