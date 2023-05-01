import { useQuery } from "@tanstack/react-query"
import { keys } from "../../shared/queryKeys"
import { apis } from "../../api/apis"

export const usePersonalExhibition = () => {

  const  {isLoading, isError, data} = useQuery({
    queryKey: keys.GET_MAINPERSONALEXHIBITION,
    queryFn: async () => {
      const response = await apis.get('/banner/getPersonalExhibitionsByRecent?reqCnt=6')
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