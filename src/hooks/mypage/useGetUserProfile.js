import { useQuery } from "@tanstack/react-query";
import { keys } from "./../../shared/queryKeys";
import { apis_token } from "../../api/apis";

//로그인한 유저: apis_token이 있음
//-> 서버에서 토큰 확인하고 로그인한상태면 get요청 허용 및 정보 보내줌
//로그인한 유저: apis_token이 없음
//-> 마이페이지 클릭하면 로그인하라고 로그인페이지로 보내줘야함

export const useGetUserProfile = () => {
  const { data } = useQuery({
    queryKey: keys.GET_USERPROFILE,
    queryFn: async () => {
      const data = await apis_token.get("/mypage");
      return data.data;
    },
  });

  return {
    userProfile: data,
  };
};
