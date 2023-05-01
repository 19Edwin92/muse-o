import React, { useEffect } from "react";
import * as ArtgramFormparts from "../ArtgramFormImgparts";

function DropImgPreivew({files, setFiles}) {
  const deletFilesimg = (e, name) => {
    e.stopPropagation()
    console.log(name);
    const find = files.findIndex(names => names.name === name)
    const filter = [...files.slice(0,find), ...files.slice(find+1)]
    setFiles(filter)
  }
  useEffect(() => {
    // 마운트 해제시, 데이터 url 취소
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  return (
    <>
      <ArtgramFormparts.DropZoneMsg>
        <p>파일을 끌어와 첨부하거나 클릭해주세요</p>
      </ArtgramFormparts.DropZoneMsg>
      <ArtgramFormparts.DropZonePreview>
        {files &&
          files.map((file) => (
            <ArtgramFormparts.PreviewBox key={file.name}>
              <img
                src={file.preview}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
              <ArtgramFormparts.PreviewBoxDelete onClick={(e)=> deletFilesimg(e, file.name)} children="삭제"/>
            </ArtgramFormparts.PreviewBox>
          ))}
      </ArtgramFormparts.DropZonePreview>
    </>
  );
}

export default DropImgPreivew;
