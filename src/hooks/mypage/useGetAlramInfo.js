import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";

export const useGetAlramInfo = () => {
  const { data } = useQuery({
    queryKey: [keys.GET_ALRAMINFO],
    queryFn: async () => {
      const data = await apis_token.get(`/notification`);
      //   console.log(data.data.result, "data");
      return data.data.result;
    },
  });
  return {
    AlramInfo: data,
  };
};
