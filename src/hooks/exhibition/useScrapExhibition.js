import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
//!이것도 좋아요랑 버튼이 비슷한 로직인데 다른점은 scrap api뿐이다 나중에 리팩토링 하자.
export const useScrapExhibition = () => {
  const queryClient = useQueryClient();
  const { mutate: scrapExhibition } = useMutation({
    mutationFn: async (exhibitionId) => {
      const res = await apis_token.patch(`/exhibition/scrap/${exhibitionId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: keys.GET_DETAILEXHIBITION });
    },
    onError: (e) => {
      console.log("에러", e);
    },
  });
  return [scrapExhibition];
};
