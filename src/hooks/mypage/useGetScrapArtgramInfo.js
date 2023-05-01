import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetScrapArtgramInfo = () => {
  const [scrapArtgramNum, setScrapArtgramNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_SCRAPARTGRAMINFO, scrapArtgramNum],
    queryFn: async () => {
      const data = await apis_token.get(
        `/mypage/artgram/scraps?limit=3&offset=${scrapArtgramNum}`
      );
      return data.data;
    },
  });
  return {
    ScrapArtgramInfo: data,
    scrapArtgramNum,
    setScrapArtgramNum,
  };
};
