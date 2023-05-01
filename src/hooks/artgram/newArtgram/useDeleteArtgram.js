import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cookies } from "../../../shared/cookies";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";

export const useDeleteArtgram = () => {
  const queryClient = useQueryClient();
  const {mutate:deleteArtgram} = useMutation({
    mutationFn : async (artgramId) => {
      const token = cookies.get("access_token");
      await apis.patch(`/artgram/${artgramId}/remove`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
      console.log("아트그램이 삭제되었습니다.");
    },
    onError: e => {
      console.log("아트그램이 삭제되지 않았습니다.", e.message);
    }
  })
  const deleteHandle = (artgramId) => {
    deleteArtgram(artgramId)
  }

  return {deleteHandle}
}