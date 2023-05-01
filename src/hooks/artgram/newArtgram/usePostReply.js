import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../../shared/cookies";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";
import { useState } from "react";


export const usePostReply = () => {
  const queryClient = useQueryClient();
  const {mutate:postReply} = useMutation({
    mutationFn : async ({artgramId,commentId,reply}) => {
      // console.log(reply);
      const token = cookies.get("access_token");
      await apis.post(`/artgram/${artgramId}/comments/${commentId}/reply`, {comment:reply}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {artgramId, commentId};
    },
    onSuccess: ({artgramId, commentId}) => {
      queryClient.invalidateQueries(keys.GET_ARTGRAMCOMMENTS);
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      queryClient.invalidateQueries([keys.GET_ARTGRAMREPLY+artgramId+commentId]);
      console.log("대댓글이 등록되었습니다.");
    },
    onError: e => {
      console.log("대댓글이 등록되지 않았습니다.", e.message);
    }
  })

  const [replyState, setReplyState] = useState(false); //대댓글 input을 호출할 상태
  const [reply, setReply] = useState(""); //대댓글 내용을 입력받을 input.value
  const replyHandle = (e,artgramId,commentId,reply) => {
    e.preventDefault()
    if(reply) {
      postReply({artgramId,commentId,reply})
    }
    setReply('')
    setReplyState(pre=>!pre)
  }

  return {replyState, setReplyState,reply, setReply,replyHandle}
}