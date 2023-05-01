import { useMutation, useQueryClient } from "@tanstack/react-query";
import { keys } from "../../shared/queryKeys";
import { apis_token } from "../../api/apis";
import { useNavigate } from "react-router-dom";

export const usePatchExhibition = (id) => {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateExhibition } = useMutation({
    mutationFn: async (payload) => {
      const res = await apis_token.patch(`/exhibition/update/${id}`, payload);
      return res.data;
    },
    onSuccess: () => {
      alert("수정완료");
      navigator("/exhibition");
      queryClient.invalidateQueries({ queryKey: keys.GET_EXHIBITION });
    },
    onError: (e) => {
      alert(e);
    },
  });
  return [updateExhibition];
};
