import dayjs from "dayjs"

export const useGetDate = () => {
  const getday = (setDate) => {
    return dayjs(setDate.split("T")[0]).format("DD")
  }
  const getMonth =  (setDate) => {
    return dayjs(setDate.split("T")[0]).format("MMM")
  }

  return {getday, getMonth}
}