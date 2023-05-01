//원본
export const logininputList = [
  { label: "이메일", type: "email", name: "email" },
  { label: "비밀번호", type: "password", name: "password" },
];

//회원가입 input List
export const registerInputList = [
  { label: "이메일", type: "email", name: "email" },
  { label: "닉네임", type: "text", name: "nickname" },
  { label: "비밀번호", type: "password", name: "password" },
  // { label: "passwordConfirm", type: "password", name: "passwordConfirm" },
];

//로그인 input List
export const loginInputList = [
  { label: "이메일", type: "email", name: "email" },
  { label: "비밀번호", type: "password", name: "password" },
  // { label: "passwordConfirm", type: "password", name: "passwordConfirm" },
];

// 아트그램등록 input List
export const createArtgramInputList = [
  { label: "아트그램 제목", type: "text", name: "artgramTitle"},
  { label: "아트그램 내용", type: "text", name: "artgramDesc", maxLength:"600"},
];
