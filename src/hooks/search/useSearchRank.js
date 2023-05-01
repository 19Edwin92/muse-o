import { useQuery } from "@tanstack/react-query"
import { keys } from "../../shared/queryKeys"
import { apis } from "../../api/apis"

export const useSearchRank = (searchWindow) => {
  const {isLoading, isError, data} = useQuery({
    queryKey : keys.GET_UNIFIEDSEARCHRANK,
    queryFn: async () => {
      const response = await apis.get("/search/rank");
      return response.data.searchRank
    },
    enabled: searchWindow,
    refetchOnWindowFocus: false,
    // onSuccess: () => {
    //   console.log("인기검색어 조회");
    // },
    onError: (e) => {
      console.log("error", e.message);
    }
  })
  return {isLoading, isError, data} 
}

