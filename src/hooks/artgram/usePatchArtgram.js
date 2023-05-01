import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apis } from "../../api/apis"
import { cookies } from "../../shared/cookies"
import { keys } from "../../shared/queryKeys"

export  const usePatchArtgram = () => {
  const queryClient = useQueryClient()
  const { mutate:patchArtgram } = useMutation({
    mutationFn: async({artgramId, payload}) => {
      const token = cookies.get("access_token");
      await apis.patch(`/artgram/${artgramId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    onSuccess: () => {
      // console.log("아트그램 수정이 완료되었습니다.");
      queryClient.invalidateQueries(keys.GET_ARTGRAMDETAIL)
    },
    onError:(e)=> {
      console.log("아트그램 수정이 실패했습니다.", e.message);
    }
  })
  return {patchArtgram}
}