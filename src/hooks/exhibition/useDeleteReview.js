import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteReview } = useMutation({
    mutationFn: async (exhibitionReviewId) => {
      const res = await apis_token.delete(
        `/exhibition/reviews/delete/${exhibitionReviewId}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [keys.GET_REVIEWS] });
    },
    onError: (e) => {
      console.log("에러", e);
    },
  });
  return [deleteReview];
};
