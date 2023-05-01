import { v4 as uuidv4 } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const useGetimgurl = files => {
  const s3imgurlhandle = file => {
    let newimageUrl;
    const fileName = `profile/${uuidv4()}.${file?.type.split("/")[1]}`;
    const fileType = file.type;
    //권한 설정
    const s3Client = new S3Client({
      credentials: {
        accessKeyId: process.env.REACT_APP_AccessKey,
        secretAccessKey: process.env.REACT_APP_SecretAccessKey,
      },
      region: process.env.REACT_APP_BucketRegion,
    });

    //버킷에 key, Body, ContentType 형태로 넣음
    const putCommand = new PutObjectCommand({
      Bucket: process.env.REACT_APP_BucketName,
      Key: fileName,
      Body: file,
      ContentType: fileType,
    });
    //s3Client.send로 보내기
    try {
      s3Client.send(putCommand); //저장(서버에서 받는 것 없음)
      newimageUrl = `https://${process.env.REACT_APP_BucketName}.s3.amazonaws.com/${fileName}`;
    } catch (err) {
      //에러처리
      console.log(err.message);
    }
    return newimageUrl;
  };
  return [s3imgurlhandle];
};
