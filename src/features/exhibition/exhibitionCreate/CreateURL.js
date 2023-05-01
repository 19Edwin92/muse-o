import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const useGetImgUrl = (sourceUrl, isPost = false) => {
  const s3ImgUrlHandle = (Imgfiles) => {
    let urls = [];
    Imgfiles?.forEach((file, index) => {
      const fileName = `${sourceUrl}/${uuidv4()}.${file.type.split("/")[1]}`;
      const newImageUrl = `https://${process.env.REACT_APP_BucketName}.s3.amazonaws.com/${fileName}`;
      const newObject = {
        order: index,
        imgUrl: newImageUrl,
        imgCaption: "이미지 내용",
      };
      urls.push(newObject);
      const fileType = file.type;
      const s3Client = new S3Client({
        credentials: {
          accessKeyId: process.env.REACT_APP_AccessKey,
          secretAccessKey: process.env.REACT_APP_SecretAccessKey,
        },
        region: process.env.REACT_APP_BucketRegion,
      });
      const putCommand = new PutObjectCommand({
        Bucket: process.env.REACT_APP_BucketName,
        Key: fileName,
        Body: file,
        ContentType: fileType,
      });
      try {
        const response = s3Client.send(putCommand);
      } catch (err) {
        console.log(err.message);
      }
    });

    if (isPost) {
      return urls[0]?.imgUrl || "";
    } else {
      return urls;
    }
  };

  return [s3ImgUrlHandle];
};
