import * as EXPost from "../css/exhibitionCreateCss/EXFormPostCss";
import plus_white from "../../../assets/imgs/common/plus_white.png";
import NotificationEX from "./NotificationEX";

export const EXFormPost = ({
  Detaildata,
  changeOnOff,
  exhibitionKind,
  postfiles,
  getRootPropsPOST,
  getInputPropsPOST,
  deleteHandler,
  deleteImgPOST,
}) => {
  return (
    <EXPost.PostWrap>
      <EXPost.Post>
        <EXPost.PageTitle>전시 등록</EXPost.PageTitle>
        <EXPost.SelectOnOff>
          <EXPost.Offline
            type="button"
            name="EK0001"
            onClick={changeOnOff}
            exhibitionKind={exhibitionKind}
          >
            오프라인
          </EXPost.Offline>
          <EXPost.OnLine
            type="button"
            name="EK0002"
            onClick={changeOnOff}
            exhibitionKind={exhibitionKind}
          >
            온라인
          </EXPost.OnLine>
        </EXPost.SelectOnOff>
        {postfiles.length === 0 ? (
          <EXPost.PostImgArea {...getRootPropsPOST({ className: "dropzone" })}>
            <EXPost.Circle>
              <EXPost.DragIcon src={plus_white} />
            </EXPost.Circle>
            <input {...getInputPropsPOST()} />
          </EXPost.PostImgArea>
        ) : (
          postfiles.map((file, index) => (
            <EXPost.PreviewBox>
              <img key={file.name} src={file.preview} />
              <EXPost.PreviewBoxDelete
                type="button"
                onClick={() => deleteImgPOST(index)}
              >
                삭제
              </EXPost.PreviewBoxDelete>
            </EXPost.PreviewBox>
          ))
        )}
        {Detaildata ? (
          <EXPost.UpDateButtons>
            <EXPost.SubmitButton type={"submit"}>
              전시수정하기
            </EXPost.SubmitButton>
            <EXPost.SubmitButton type={"button"} onClick={deleteHandler}>
              전시삭제하기
            </EXPost.SubmitButton>
          </EXPost.UpDateButtons>
        ) : (
          <EXPost.SubmitButton type={"submit"}>
            전시등록하기
          </EXPost.SubmitButton>
        )}
        <NotificationEX
          warning={"주의사항"}
          coment1={`되도록 큰 사이즈의 사진 파일 업로드 부탁드립니다!
`}
          coment2={`작으면 화질이 떨어져요ㅠㅡㅠ`}
        />
      </EXPost.Post>
    </EXPost.PostWrap>
  );
};
