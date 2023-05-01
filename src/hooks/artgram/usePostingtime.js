import dayjs from "dayjs";

export const usePostingtime = () => {
  const timehandle = (createdAt) => {
    const dayjsDate = dayjs();
    const currentDate = dayjsDate.format().split("T")[0];
    const currentTime = dayjsDate
    .format()
    .split("T")[1]
    .split(".")[0]
    .split("+")[0];
      // 서버에서 주는 시간 변경에 따른, 데이터 전처리 번경  
      // const createDate = createdAt?.split("T")[0];
      // const createTime = createdAt?.split("T")[1].split(".")[0]; // 2023-04-05
      // const gaphour = `${dayjs(`${currentDate} ${currentTime}`).diff(
  const gaphour = `${dayjs(`${currentDate} ${currentTime}`).diff(
    dayjs(createdAt),
    "hour"
  )}`;
  let postingTime;
  if(gaphour < 1) {
    postingTime = dayjs(dayjsDate).diff(dayjs(createdAt),"minute") < 2 
    ? "방금 전" 
    : `${dayjs(dayjsDate).diff(dayjs(createdAt),"minute")}분 전` 
  } else if (gaphour < 24) {
    postingTime = gaphour + "시간 전";
  } else if (gaphour < 720) {
    postingTime = Math.ceil(gaphour / 24) + "일 전";
  } else if (gaphour < 8736) {
    postingTime = Math.ceil(gaphour / 720) + "개월 전";
  } else if (gaphour <= 8736) {
    postingTime = Math.ceil(gaphour / 8736) + "년 전";
  }
  return [postingTime];
  }
  return [timehandle]
};
