// !영찬님이 컴포넌트에서 사용하실때
// const [files, setFiles, getRootProps, getInputProps] = useDropzoneInput(5(이건 max갯수));

import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const useDropzoneInput = (maxFiles) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
      //!!!!!영찬님 읽어주세요~
      //?왜 maxFiles라는 옵션을 안쓰는가?
      //?alert를 띄우기 위해서는 acceptedFiles의 값이 필요한데
      //?maxFiles옵션을 써서 최대 이미지 갯수를 막아두면
      //?그전에 걸러지기 때문에 사용안하고
      //?UX를 위해서 alert를 띄우기 위해 사용 안함
    },
    onDrop: (acceptedFiles) => {
      //기존 파일에서 추가하는 로직
      setFiles((pre) => {
        //totalfiles 의 길이
        const totalFiles = pre.length + acceptedFiles.length;
        //totalfiles 의 길이가 정해준 maxFiles를 넘으면 기존 파일들을 다시 return 해준다.
        if (totalFiles > maxFiles) {
          alert(`최대 ${maxFiles}개까지만 파일을 업로드할 수 있습니다.`);
          return pre;
        }
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        return [...pre, ...newFiles];
      });
    },
  });
  //언마운트시 컴포넌트에서 작성된 것을 결속 해제 시켜줌
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, []);
  //이미지 삭제 버튼
  const deleteImg = (index) => {
    const currentFiles = [...files];
    URL.revokeObjectURL(currentFiles.preview);
    currentFiles.splice(index, 1);
    setFiles(currentFiles);
  };
  return [files, setFiles, getRootProps, getInputProps, deleteImg];
};
