import { CheckEXValue } from "./CheckEXValue";

//post 버튼
export const PostEX = (
  s3ImgUrlHandle,
  s3PostImgUrlHandle,
  files,
  postfiles,
  exhibition,
  exhibitionKind,
  createExhibition
) => {
  const PostEXHandler = (event) => {
    event.preventDefault();
    const urls = s3ImgUrlHandle(files);
    const posturl = s3PostImgUrlHandle(postfiles);
    CheckEXValue(exhibition, exhibitionKind, posturl, urls, createExhibition);
  };
  return PostEXHandler;
};
