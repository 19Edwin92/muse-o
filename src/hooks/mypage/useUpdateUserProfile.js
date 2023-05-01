import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async editProfile => {
      // console.log(editProfile, "editProfile");
      const data = await apis_token.patch("/mypage", editProfile);
      return data.data;
    },
    onSuccess: () => {
      alert("수정 완료되었습니다!");
      //성공시 유저프로필 불러오기
      queryClient.invalidateQueries(keys.GET_USERPROFILE);
    },
  });
  return {
    updateUserProfile: mutate,
  };
};
