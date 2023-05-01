import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const useLikeExhibition = () => {
  const queryClient = useQueryClient();
  const { mutate: likeExhibition } = useMutation({
    mutationFn: async (exhibitionId) => {
      const res = await apis_token.patch(`/exhibition/like/${exhibitionId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.GET_DETAILEXHIBITION });
    },
    onError: (e) => {
      console.log("에러", e);
    },
  });
  return [likeExhibition];
};
