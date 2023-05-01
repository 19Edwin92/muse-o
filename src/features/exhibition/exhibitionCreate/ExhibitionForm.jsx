import React from "react";
import { Flex } from "../../../components/Flex";
import { useSetExhibition } from "../../../hooks/exhibition/useSetExhibition";
import { useGetImgUrl } from "./CreateURL";
import { useDropzoneInput } from "../../../hooks/exhibition/useDropZone";
import { PostEX } from "./PostEX";
import { UpdateEX } from "./UpdateEX";
// import CalendarEX from "./CalendarEX";
import { EXFormPost } from "./EXFormPost";
import { EXFormContents } from "./EXFormContents";

function ExhibitionForm({
  createExhibition,
  Detaildata,
  DetailLoading,
  updateExhibition,
  deleteHandler,
}) {
  const sourceUrl = "exhibition";
  //썸네일용 dorpzone
  const [
    postfiles,
    setPostFiles,
    getRootPropsPOST,
    getInputPropsPOST,
    deleteImgPOST,
  ] = useDropzoneInput(1);
  //상세설명용 dorpzone
  const [files, setFiles, getRootProps, getInputProps, deleteImg] =
    useDropzoneInput(10);
  //이미지 URL 생성기 + 이미지 파일 업로드 함수
  const [s3ImgUrlHandle] = useGetImgUrl(sourceUrl);
  const [s3PostImgUrlHandle] = useGetImgUrl(sourceUrl, true);
  //업로드 정보, ONLINE,OFF라인 변경버튼,카카오 주소 버튼, 데이터 onChange 함수
  //detaildata 가 있으면 수정페이지 접속시 데이터 적용
  const [
    exhibition,
    exhibitionKind,
    changeOnOff,
    authorName,
    handleClick,
    onchangeHandler,
  ] = useSetExhibition(DetailLoading, Detaildata, setFiles, setPostFiles);
  //post
  const PostEXHandler = PostEX(
    s3ImgUrlHandle,
    s3PostImgUrlHandle,
    files,
    postfiles,
    exhibition,
    exhibitionKind,
    createExhibition
  );
  //update
  const UpdateEXHandler = UpdateEX(
    s3ImgUrlHandle,
    s3PostImgUrlHandle,
    files,
    postfiles,
    exhibition,
    exhibitionKind,
    Detaildata,
    updateExhibition
  );
  return (
    <>
      {DetailLoading ? (
        <div>로딩중</div>
      ) : (
        <Flex
          as={"form"}
          onSubmit={Detaildata ? UpdateEXHandler : PostEXHandler}
          fd="row"
          gap="150"
        >
          <EXFormPost
            Detaildata={Detaildata}
            changeOnOff={changeOnOff}
            exhibitionKind={exhibitionKind}
            postfiles={postfiles}
            getRootPropsPOST={getRootPropsPOST}
            getInputPropsPOST={getInputPropsPOST}
            deleteHandler={deleteHandler}
            deleteImgPOST={deleteImgPOST}
          />

          <EXFormContents
            files={files}
            onchangeHandler={onchangeHandler}
            exhibition={exhibition}
            exhibitionKind={exhibitionKind}
            handleClick={handleClick}
            authorName={authorName}
            deleteImg={deleteImg}
            getRootProps={getRootProps}
            getInputProps={getInputProps}
          />
        </Flex>
      )}
    </>
  );
}

export default ExhibitionForm;
