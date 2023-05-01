import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apis_token } from "../../api/apis";
import { keys } from "../../shared/queryKeys";
import { useNavigate } from "react-router-dom";

export const usePostExhibition = () => {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createExhibition } = useMutation({
    mutationFn: async (payload) => {
      const res = await apis_token.post("/exhibition/write", payload);
      return res.data;
    },
    onSuccess: () => {
      alert("생성완료");
      navigator("/exhibition");
      queryClient.invalidateQueries({ queryKey: keys.GET_EXHIBITION });
    },
    onError: (e) => {
      alert(e);
    },
  });

  return [createExhibition];
};
