import { useMutation } from "@tanstack/react-query";
import { apis } from "../../api/apis";
import { useState } from "react";

export function useEmailAuthConfirm() {
  const [checkEmailAuthConfirm, setCheckEmailAuthConfirm] = useState(false);
  const [emailAuthConfirmMsg, setEmailAuthConfirmMsg] = useState("");
  const [emailAuthConfirmWarning, setEmailAuthConfirmWarning] = useState("");

  const { mutate } = useMutation({
    mutationFn: async payload => {
      const data = await apis.post("/auth/emailcodecheck", payload);
      return data;
    },
    onSuccess: data => {
      if (data.status === 200) {
        setCheckEmailAuthConfirm(true);
        setEmailAuthConfirmMsg("이메일 인증에 성공하였습니다.");
      }
    },
    //시간 만료, 인증번호 틀림 에러처리
    onError: error => {
      setCheckEmailAuthConfirm(false);
      setEmailAuthConfirmWarning(error.response.data.errorMessage);
    },
  });
  return {
    emailAuthConfirm: mutate,
    emailAuthConfirmMsg,
    emailAuthConfirmWarning,
    checkEmailAuthConfirm,
  };
}
