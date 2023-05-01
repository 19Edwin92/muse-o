import { useQuery } from "@tanstack/react-query"
import { keys } from "../../shared/queryKeys"
import { apis } from "../../api/apis"

export const useNearestExhibition = () => {

  const  {isLoading, isError, data} = useQuery({
    queryKey: keys.GET_MAINNEARESTEXHIBITION,
    queryFn: async () => {
      const response = await apis.get('/banner/getFutureExhibitionsSortedByNearest?reqCnt=10')
      return response.data.exhibitionList.rows
    },
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (e) => {
      console.log(e.message);
    },
  })

  return {isLoading, isError, data}
}