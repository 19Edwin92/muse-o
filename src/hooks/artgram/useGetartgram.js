import { useQuery } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const useGetartgram = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: keys.GET_ARTGRAM,
    queryFn: async () => {
      const response = await apis.get("/artgram?limit=20&offset=0");
      return response.data.artgramList.rows;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (e) => {
      console.log(e.message);
    },
  });
  return [isLoading, isError, data];
};
