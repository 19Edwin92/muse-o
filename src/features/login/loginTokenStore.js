import { atom, selector } from "recoil";

export const decodeAccessToken = atom({
  key:"decodeAccessToken",
  default:{}
})

export const decodeEmail = selector({
  key:"decodeEmail",
  get: ({get})=> {
    const {email} = get(decodeAccessToken)
    return email
  }
})

export const decodeNickname = selector({
  key:"decodeNickname",
  get: ({get})=> {
    const {nickname} = get(decodeAccessToken)
    return nickname
  }
})

export const decodeProfileImg = selector({
  key:"decodeProfileImg",
  get: ({get})=> {
    const {profileImg} = get(decodeAccessToken)
    return profileImg
  }
})

export const decodeUserRole = selector({
  key:"decodeUserRole",
  get: ({get})=> {
    const {userRole} = get(decodeAccessToken)
    return userRole
  }
})

export const decodeIntroduction = selector({
  key:"decodeIntroduction",
  get: ({get})=> {
    const {introduction} = get(decodeAccessToken)
    return introduction
  }
})