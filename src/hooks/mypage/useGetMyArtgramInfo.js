import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetMyArtgramInfo = () => {
  const [myArtgramNum, setMyArtgramNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_MYARTGRAMINFO, myArtgramNum],
    queryFn: async () => {
      const data = await apis_token.get(
        `/mypage/artgram/?limit=3&offset=${myArtgramNum}`
      );
      return data.data;
    },
  });
  return {
    MyArtgramInfo: data,
    myArtgramNum,
    setMyArtgramNum,
  };
};
