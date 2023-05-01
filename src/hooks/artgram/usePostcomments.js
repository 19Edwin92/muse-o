import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../shared/cookies";
import { apis } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const usePostcomments = (setFormState) => {
  const queryClient = useQueryClient();
  const {mutate:postCommet} = useMutation({
    mutationFn : async ({artgramId, formState}) => {
      const token = cookies.get("access_token");
      const response = await apis.post(`/artgram/${artgramId}/comments`, {comment:formState}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ARTGRAMCOMMENTS);
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      console.log("댓글이 등록되었습니다.");
    },
    onError: e => {
      // if(e.response.status === 403) {
      //   alert("댓글 쓰기는 로그인 후 가능힙니다.")
      // }
      console.log("댓글이 등록되지 않았습니다.", e.message);
    }
  })
  const commentHandle = (e, artgramId, formState) => {
    e.preventDefault()
    postCommet({artgramId, formState})
    setFormState({})
  }

  return [commentHandle]
}