import { useRef, useState } from "react";

export const useImg = () => {
  const [uploadimg, setUploadImg] = useState("");
  const selectFile = useRef("");
  const saveImgFile = () => {
    const files = Array.from(selectFile.current.files); 
    const promises = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });
    Promise.all(promises).then(images => {
      setUploadImg(images);
    });
  };
  const deleteImage = (event) => {
    const index = parseInt(event.target.dataset.index);
    const newImages = [...uploadimg];
    newImages.splice(index, 1);
    setUploadImg(newImages);
  };

  return [uploadimg, setUploadImg, selectFile, saveImgFile, deleteImage]
}