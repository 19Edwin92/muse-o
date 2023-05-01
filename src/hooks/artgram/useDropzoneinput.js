import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const useDropzoneinput = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 6,
    // maxSize: 1048576, // 1MB 개별파일의 크기 제한
    // maxTotalSize: 10485760, // 10MB 전체파일의 크기 제한
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return [files, setFiles, getRootProps, getInputProps]
}