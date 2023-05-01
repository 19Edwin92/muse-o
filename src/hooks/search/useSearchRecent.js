import { useQuery } from "@tanstack/react-query"
import { keys } from "../../shared/queryKeys"
import { apis } from "../../api/apis"

export const useSearchRecent = (searchWindow) => {
  const {isLoading, isError, data} = useQuery({
    queryKey : keys.GET_UNIFIEDSEARCHRANK,
    queryFn: async () => {
      const response = await apis.get("/search/recent");
      return response.data
    },
    enabled: searchWindow,
    refetchOnWindowFocus: false,
    // onSuccess: () => {
    //   console.log("최근검색결과 조회");
    // },
    onError: (e) => {
      console.log("error", e.message);
    }
  })
  return {isLoading, isError, data} 
}