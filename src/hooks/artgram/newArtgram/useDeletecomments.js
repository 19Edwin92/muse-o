import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../../shared/cookies";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";

export const useDeletecomments = () => {
  const queryClient = useQueryClient();
  const {mutate:deleteCommet} = useMutation({
    mutationFn : async ({artgramId, commentId}) => {
      const token = cookies.get("access_token");
      const response = await apis.patch(`/artgram/${artgramId}/comments/${commentId}/remove `, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ARTGRAMCOMMENTS);
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      console.log("댓글이 삭제되었습니다.");
    },
    onError: e => {
      console.log("댓글이 삭제되지 않았습니다.", e.message);
    }
  })
  const deleteHandle = (artgramId, commentId) => {
    deleteCommet({artgramId, commentId})
  }

  return {deleteHandle}
}