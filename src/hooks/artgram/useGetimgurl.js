import { v4 as uuidv4 } from "uuid"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

export const useGetimgurl =  (files) => {
  const s3imgurlhandle = () => {
    const urls = [];
    files.map((file) => {
      const fileName = `artgram/${uuidv4()}.${file.type.split("/")[1]}`;
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
        const newimageUrl = `https://${process.env.REACT_APP_BucketName}.s3.amazonaws.com/${fileName}`;
        urls.push(newimageUrl);
      } catch (err) {
        console.log(err.message);
      }
    });
    return urls
  };
  return [s3imgurlhandle]
}