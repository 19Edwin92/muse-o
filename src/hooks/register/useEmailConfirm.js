import { useMutation } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { useState } from "react";

export function useEmailConfirm() {
  const [checkEmailConfirm, setCheckEmailConfirm] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const [emailConfirmMsg, setCheckEmailConfirmMsg] = useState("");

  const { mutate } = useMutation({
    mutationFn: async payload => {
      const data = await apis.post("/auth/emailconfirm", payload);
      return data;
    },
    onSuccess: data => {
      if (data.status === 201) {
        setCheckEmailConfirm(true);
        setCheckEmailConfirmMsg(data.data.message);
        setWarningMsg("");
      }
    },
    onError: error => {
      setCheckEmailConfirm(false);
      setWarningMsg(error.response.data.errorMessage);
      setCheckEmailConfirmMsg("");
    },
  });

  return {
    emailConfirm: mutate,
    checkEmailConfirm,
    warningMsg,
    emailConfirmMsg,
  };
}
