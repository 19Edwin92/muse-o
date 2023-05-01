import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis } from "../../api/apis";

export const useGetTop10Tags = () => {
  const {
    data: top10TagsData,
    isError,
    error, // 에러 객체
  } = useQuery({
    queryKey: [keys.GET_TOP10TAGS],
    queryFn: async () => {
      const res = await apis.get(`/exhibition/toptags`);
      return res.data.topTags;
    },
  });

  if (isError) {
    alert(`Error: ${error.message}`);
  }
  return [top10TagsData];
};
