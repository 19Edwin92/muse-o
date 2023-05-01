import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetScrapExhibitionInfo = () => {
  const [scrapExhibitionNum, setScrapExhibitionNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_SCRAPEXHIBITIONINFO, scrapExhibitionNum],
    queryFn: async () => {
      const data = await apis_token.get(
        `/mypage/exhibition/scraps?limit=5&offset=${scrapExhibitionNum}`
      );
      return data.data;
    },
  });
  return {
    ScrapExhibitionInfo: data,
    scrapExhibitionNum,
    setScrapExhibitionNum,
  };
};
