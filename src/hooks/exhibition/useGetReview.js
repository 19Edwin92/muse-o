import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis, apis_token } from "../../api/apis";

export const useGetReview = (id, limit, offset) => {
  const {
    data: reviewData,
    isLoading,
    isError,
    error, // 에러 객체
  } = useQuery({
    queryKey: [keys.GET_REVIEWS, id, limit, offset],
    queryFn: async () => {
      const res = await apis_token.get(
        `/exhibition/${id}/reviews?limit=${limit}&offset=${offset}`
      );
      const exhibitionReviewList = res.data.exhibitionReviewList;

      // exhibitionReviewList가 undefined인 경우에 대한 처리
      if (exhibitionReviewList === undefined) {
        // 유효한 데이터가 없을 때에 대한 처리
        return null;
      }

      return exhibitionReviewList;
    },
  });

  if (isError) {
    alert(`Error: ${error.message}`);
  }

  return [reviewData, isLoading];
};
