import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";

export const usePatchAlramInfo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async id => {
      //   console.log(id, "payload");
      const data = await apis_token.patch("/notification", { notiId: id });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ALRAMINFO);
    },
  });

  return {
    updateAlramInfo: mutate,
  };
};
