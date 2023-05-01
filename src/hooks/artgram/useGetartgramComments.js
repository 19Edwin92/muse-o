import { useQuery } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const useGetartgramComments = (artgramId) => {
    
    const {isLoading, isError, data} = useQuery({
      queryKey : keys.GET_ARTGRAMCOMMENTS,
      queryFn : async () => {
        const response = await apis.get(`/artgram/${artgramId}/comments`);
        return response.data.comment
      },
      refetchOnWindowFocus: false, 
      retry: 1,
      // onSuccess: ()  => {
      //       console.log("댓글요청 요청 성공")
      //     },
          onError: e => {
            console.log(e.message)
          }
    })
    return [isLoading, isError, data]
}