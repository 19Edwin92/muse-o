import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../../shared/cookies";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";

export const useDeleteReply = () => {
  const queryClient = useQueryClient();
  const {mutate:deleteReply} = useMutation({
    mutationFn : async ({artgramId, commentParent, commentId}) => {
      const token = cookies.get("access_token");
      console.log("/artgram/${artgramId}/comments/${commentParent}/reply/${commentId}/remove");
      console.log(`/artgram/${artgramId}/comments/${commentParent}/reply/${commentId}/remove`);
      await apis.patch(`/artgram/${artgramId}/comments/${commentParent}/reply/${commentId}/remove`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {artgramId, commentParent};
    },
    onSuccess: ({artgramId, commentParent}) => {
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      queryClient.invalidateQueries(keys.GET_ARTGRAMCOMMENTS);
      queryClient.invalidateQueries([keys.GET_ARTGRAMREPLY+artgramId+commentParent]);
      console.log("댓글이 삭제되었습니다.");
    },
    onError: e => {
      console.log("댓글이 삭제되지 않았습니다.", e.message);
    }
  })
  const deleteHandle = (artgramId, commentParent, commentId) => {
    deleteReply({artgramId, commentParent, commentId})
  }

  return {deleteHandle}
}