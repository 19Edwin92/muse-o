import React, { useEffect, useRef, useState } from "react";
// import CSS --------------------------------------------------------------------------------------------/
import * as ArtgramFormparts from "./ArtgramFormImgparts";
// import 커스텀 훅 ----------------------------------------------------------------------------------------/
import { usePostartgram } from "../../../hooks/artgram/usePostartgram";
import { useFormInput } from "../../../hooks/useFormInput";
import { useDropzoneinput } from "../../../hooks/artgram/useDropzoneinput";
import { useGetimgurl } from "../../../hooks/artgram/useGetimgurl";
// import 컴포넌트 -----------------------------------------------------------------------------------------/
import { HashTagInput, Input, TextArea } from "../../../components/Input";
import DropImgPreivew from "./form/DropImgPreivew";
import Notification from "./form/Notification";
import { useNavigate } from "react-router-dom";

// ArtgramForm 컴포넌트 -------------------------------------------------------------------------------------/
function ArtgramForm({alertState}) {
  // 비동기 통신을 위하 커스텀 훅(리액트 쿼리)  ------------------------------------------------------------------ //
  const [postArtgrams] = usePostartgram(alertState);
  // Navigate  ------------------------------------------------------------------------------------------ //
  const navigate = useNavigate()
  // Form의 input state 관리(제목과 내용, 그리고 해시태그)
  const [formState, setFormState, handleInputChange] = useFormInput();
  const [hashtag, setHashTag] = useState([]);
  // Drag&Drop files state 관리 및 화면에 미리보기 제어   ----------------------------------------------------- //
  const [files, setFiles, getRootProps, getInputProps] = useDropzoneinput();
  useEffect(() => {
    // 마운트 해제시, 데이터 url 취소
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);
  // input의 유효성 검사를 위한 useRef   -------------------------------------------------------------------- //
  const titleRef = useRef(null)
  const descRef = useRef(null)

  // Drag&Drop state(files)를 AWS S3에 업로드하여 url 받아내고, newImageUrls state에 입력하기   ---------------- //
  const [s3imgurlhandle] = useGetimgurl(files);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { artgramTitle, artgramDesc } = formState;
    const newImageUrls = s3imgurlhandle();
    if (files.length === 0) {
      alert("이미지는 최소 1장 이상 입력되어야 합니다.")
    } else if (!formState.artgramTitle) {
      alert("전시회 제목을 입력해주세요.")
      titleRef.current.children[0].children[1].focus()
    } else if(!formState.artgramDesc) {
      alert("전시회 소감을 입력해주세요.")
      descRef.current.children[0].children[1].focus()
    } else {
      postArtgrams({ artgramTitle, artgramDesc, hashtag, imgUrl: newImageUrls });
      setFiles([]);
      setFormState({});
      setHashTag([])
      navigate('/artgram')
    }
  };
 // disabled={files.length === 0 || !formState.artgramTitle || !formState.artgramDesc }
  // -------------------------------------------------------------------------------------------------- //
  return (
    <>
      <ArtgramFormparts.Layout>
        <ArtgramFormparts.FormLeft>
          <ArtgramFormparts.DropZone
            {...getRootProps({ className: "dropzone" })} >
            <input {...getInputProps()} />
            <DropImgPreivew files={files} setFiles={setFiles}/>
          </ArtgramFormparts.DropZone>
          <Notification/>
        </ArtgramFormparts.FormLeft>
        <ArtgramFormparts.FormRigth as="form"  onSubmit={handleSubmit}>
          <div ref={titleRef}>
          <Input 
            label="전시제목"
            inputProps={{
              type: "text", 
              name: "artgramTitle",
              placeholder:"전시회 제목을 입력해주세요(최대 50자)",
              value:formState.artgramTitle || "",
              maxLength:50,
              onChange: handleInputChange
            }}
            />
          </div>
          <HashTagInput
            label="태그"
            hashTag={hashtag}
            setHashTag={setHashTag}
          />
          <div ref={descRef}>
          <TextArea
              label="설명"
              inputProps={{
                type: "text", 
                name: "artgramDesc",
                placeholder:"전시회에 대한 소감을 적어주세요(최대 600자)",
                value:formState.artgramDesc || "",
                maxLength:600,
                onChange: handleInputChange
              }}
              />
          </div>
          <ArtgramFormparts.Formbtn value="등록하기">아트그램 등록하기</ArtgramFormparts.Formbtn>   
        </ArtgramFormparts.FormRigth>
      </ArtgramFormparts.Layout>
    </>
  );
}

export default ArtgramForm;
