import { useQuery } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { cookies } from "../../shared/cookies";
import { keys } from "../../shared/queryKeys";

export const useGetartgramDetail = (artgramId) => {
  const token = cookies.get("access_token")
  const { isLoading, isError, data } = useQuery({
    queryKey: keys.GET_ARTGRAMDETAIL,
    queryFn: async () => {
      const response = await apis.get(`/artgram/${artgramId}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      });
      return response.data.datailArtgram.detailArtgram;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (e) => {
      console.log(e.message);
    },
  });
  return [isLoading, isError, data];
};
