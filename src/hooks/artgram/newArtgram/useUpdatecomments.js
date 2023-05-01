import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../../shared/cookies";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";
import { useState } from "react";

export const useUpdatecomments = (artgramId, commentId) => {
  // 비동기통신을 위한 useMutation 선언부
  const queryClient = useQueryClient();
  const {mutate:updateCommet} = useMutation({
    mutationFn : async ({artgramId, commentId, updatecomment}) => {
      const token = cookies.get("access_token");
      const response = await apis.patch(`/artgram/${artgramId}/comments/${commentId}`, {comment:updatecomment}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ARTGRAMCOMMENTS);
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      console.log("댓글이 수정되었습니다.");
    },
    onError: e => {
      console.log("댓글이 수정되지 않았습니다.", e.message);
    }
  })
  
  // 수정을 위한 input을 제어할 상태와, inputValue에 대한 상태 부분
  const [edit, setEdit] = useState(false);
  const [updatecomment, setUpdateComment] = useState("");

  // 해당로직을 수행하기 위한 Form태그의 onSubmit
  const onSubmitupdateComments = (e) => {
    e.preventDefault();
    updateCommet({artgramId, commentId, updatecomment})
    setEdit((pre) => !pre);
    setUpdateComment("");
  }; 
  return {edit, setEdit,updatecomment, setUpdateComment, onSubmitupdateComments}
}
