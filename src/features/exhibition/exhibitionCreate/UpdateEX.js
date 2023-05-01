import { CheckEXValue } from "./CheckEXValue";
import { CheckImgFile } from "./CheckImgFile";

export const UpdateEX = (
  s3ImgUrlHandle,
  s3PostImgUrlHandle,
  files,
  postfiles,
  exhibition,
  exhibitionKind,
  Detaildata,
  updateExhibition
) => {
  const hasFileProperty = CheckImgFile();
  const info = Detaildata?.exhibitionInfo;
  const UpdateEXHandler = (event) => {
    event.preventDefault();
    const posturl = hasFileProperty(postfiles[0])
      ? s3PostImgUrlHandle(postfiles)
      : info.postImage;

    const fileObjs = [];
    const otherObjs = [];
    files.forEach((obj) => {
      if (hasFileProperty(obj)) {
        fileObjs.push(obj);
      } else {
        otherObjs.push(obj);
      }
    });

    const currentobjs = otherObjs.map((file) => {
      return {
        order: file.order,
        imgUrl: file.preview,
        imgCaption: file.imgCaption,
      };
    });

    const urls = [...currentobjs, ...s3ImgUrlHandle(fileObjs)];
    CheckEXValue(exhibition, exhibitionKind, posturl, urls, updateExhibition);
  };
  return UpdateEXHandler;
};
