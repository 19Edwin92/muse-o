import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const usePatchRole = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = await apis_token.patch("/mypage/role");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_USERPROFILE);
    },
  });

  return {
    patchRole: mutate,
  };
};
