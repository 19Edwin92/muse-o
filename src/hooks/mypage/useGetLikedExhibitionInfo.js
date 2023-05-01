import { useQuery } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useState } from "react";

export const useGetLikedExhibitionInfo = () => {
  const [likedNum, setLikedNum] = useState(0); // 페이지 0 초기설정

  const { data } = useQuery({
    queryKey: [keys.GET_LIKEDEXHIBITIONINFO, likedNum],
    queryFn: async () => {
      const data = await apis_token.get(
        `/mypage/exhibition/likes?limit=5&offset=${likedNum}`
      );
      //   console.log(data.data, "data");
      return data.data;
    },
  });

  return {
    LikedExhibitionInfo: data,
    likedNum,
    setLikedNum,
  };
};
