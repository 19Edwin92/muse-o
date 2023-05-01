//그 오브잭트가 File 객체 형식인지 확인하는 함수.
export const CheckImgFile = () => {
  const hasFileProperty = (obj) => {
    return (
      obj instanceof File ||
      (typeof obj === "object" &&
        obj.hasOwnProperty("name") &&
        obj.hasOwnProperty("lastModified") &&
        obj.hasOwnProperty("size") &&
        obj.hasOwnProperty("type"))
    );
  };
  return hasFileProperty;
};
