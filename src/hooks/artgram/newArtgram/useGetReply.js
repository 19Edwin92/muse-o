import { useQuery } from "@tanstack/react-query";
import { apis } from "../../../api/apis";
import { keys } from "../../../shared/queryKeys";

export const useGetReply = (artgramId, commentId) => {
  
  const {isLoading, isError, data} = useQuery({
    queryKey:[keys.GET_ARTGRAMREPLY+artgramId+commentId],
    queryFn: async() => {
      const response = await apis.get(`/artgram/${artgramId}/comments/${commentId}/reply`);
      return response.data.Reply
    },
    // cacheTime: 0,
    onSuccess: (data) =>{
      // console.log(data);
      // console.log("대댓글 조회성공");
    },
    onError: (e) => {
      // console.log("대댓글 조회실패", e.message)
    }
  })
  return {isLoading, isError, data}
}