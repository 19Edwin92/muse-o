import { useInfiniteQuery } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { keys } from "../../shared/queryKeys";
import { cookies } from "../../shared/cookies";


export const useGetartgraminfinity = (pageSize = 12) => {
  // pageSize은 처음에 가져올 데이터를 제한하는 초기값을 선언하는 곳이다. 
  const token = cookies.get("access_token")
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: keys.GET_ARTGRAM,
      queryFn: async ({ pageParam = 0 }) => {
        const response = await apis.get(
          `/artgram?limit=${pageSize}&offset=${pageParam}`, {
            headers : {
              Authorization : `Bearer ${token}`
            }
          }
        )
        // console.log(response.data.artgramList.sortedArtgramList.findArtgrmas);
        return response.data.artgramList.sortedArtgramList.findArtgrmas;
      },
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < pageSize) {
          return undefined;
        }
        return allPages.length * pageSize;
        // getNextPageParam는 useInfiniteQuery의 queryFn을 통해서 반환된 데이터와 이미 가져온 모든 페이지들의 데이터를 전달반느다. 
        // lastPage는 마지막으로 가져온 페이지의 데이터를 나타내고 
        // allPages는 이미 가져온 모든 페이지의 데이터를 나타낸다. 
        // 그러나 여기서 pageParam을 변경하지 않는 이유는? 
           // useInfiniteQuery가 자동으로 getNextPageParam의 결과로 자동으로 pageParam를 변경하기 때문이다. 
           // 데이터가 pageSize보다 작으면 다음페이지가 없다는 undefined이 반환하고 
           // 데이터가 pageSize보다 많다면 현재페이지 * pageSize 를 곱하여 pageParam로 반환한다. 
           // pageParam 동적으로 값이 변하며 20+40+60 다음 데이터를 원활하게 가져오는 것이다. 
      },
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (e) => {
        console.log(e.message);
      },
    });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  };
};
