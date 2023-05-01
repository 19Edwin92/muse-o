import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetMyExhibitionInfo = () => {
  const [myExhibitionNum, setMyExhibitionNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_MYEXHIBITIONINFO, myExhibitionNum],
    queryFn: async () => {
      const data = await apis_token.get(
        `/mypage/exhibition?limit=5&offset=${myExhibitionNum}`
      );
      return data.data;
    },
  });
  return {
    MyExhibitionInfo: data,
    myExhibitionNum,
    setMyExhibitionNum,
  };
};
