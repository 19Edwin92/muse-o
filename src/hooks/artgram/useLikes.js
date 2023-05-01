import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apis } from "../../api/apis"
import { cookies } from "../../shared/cookies"
import { keys } from "../../shared/queryKeys"

export const useLikes = () => {
  const queryClient = useQueryClient()
  const { mutate : patchLikes } = useMutation({
    mutationFn : async (artgramId) => {
      const token = cookies.get("access_token")
      const reponse = await apis.patch(`artgram/${artgramId}/likes`, null, {
        headers: {
          Authorization : `Bearer ${token}`
        },
      })
      return reponse
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.GET_ARTGRAMDETAIL);
      queryClient.invalidateQueries(keys.GET_ARTGRAM);
    },
    onError: e => {
    }
  })
  return {patchLikes}
}

