import { useQuery } from "@tanstack/react-query"
import { keys } from "../../shared/queryKeys"
import { apis } from "../../api/apis"

export const useMostLike = () => {
  const  {isLoading, isError, data} = useQuery({
    queryKey: keys.GET_MAINMOSTLIKE,
    queryFn: async () => {
      const response = await apis.get('/banner/getOpenExhibitionsSortedByMostLike?reqCnt=6')
      return response.data.exhibitionList
    },
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (e) => {
      console.log(e.message);
    },
  })

  return {isLoading, isError, data}
}