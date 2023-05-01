import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useGetUserProfile } from "../../hooks/mypage/useGetUserProfile";
import { useUpdateUserProfile } from "../../hooks/mypage/useUpdateUserProfile";
import { useGetimgurl } from "../../hooks/mypage/useGetImgUrl";
import upload from "../../assets/imgs/upload_gray.png";
import cancel from "../../assets/imgs/common/cancel.png";

/*
 * 할 일
 * 1) 모달 크기 디테일 및 폰트
 * 2) 탭메뉴 클릭시 스타일 변경
 */
function UpdateUserProfileModal({ setOpenModal }) {
  /**
   * 모달 open 관리
   */
  const updateModalCloseHandler = () => {
    setOpenModal(false);
  };

  //react-query
  const { userProfile } = useGetUserProfile(); //get
  const { updateUserProfile } = useUpdateUserProfile(); //update

  //이미지 파일을 가져오기 위한 useRef
  const fileRef = useRef(null);

  //이미지 미리보기를 위한 state
  const [image, setImage] = useState("");

  //기존에 저장돼있던 input값 보여주기
  const [editProfile, setEditProfile] = useState({
    profileImg: userProfile?.profileImg,
    nickname: userProfile?.nickname,
    introduction: userProfile?.introduction,
  });

  //setEditProfile에 name: value 형식으로 input값 넣기(nickname, introduction)
  const changeInputHandler = event => {
    const { value, name } = event.target;
    setEditProfile(pre => ({ ...pre, [name]: value }));
  };

  //수정하기 버튼 클릭시 editProfile이 updateUserProfile에 담겨감
  const [s3imgurlhandle] = useGetimgurl();
  const updateUserProfileHandler = e => {
    e.preventDefault();

    if (image === "") {
      //바꾸려는 이미지가 없을 시, s3imgurlhandle에 이미지 안 보내야함.
      //-> 이미지 제외하고 텍스트만 보냄.
      updateUserProfile({ ...editProfile });
      setOpenModal(false);
    } else if (fileRef) {
      //update query에 payload로 넣어줄 fileImg = useRef 사용해서 받아둔 파일
      const fileImg = s3imgurlhandle(fileRef.current.files[0]);
      console.log(fileImg, "fileImg"); //파일 확인
      updateUserProfile({ ...editProfile, profileImg: fileImg });
      setOpenModal(false);
    }
  };

  const imgUpdateHandler = () => {
    fileRef.current.click();
  };

  /**
   * 이미지를 선택하고 선택한 이미지를 미리보여주는 로직
   */
  const changeImageHandler = () => {
    let fileReader = new FileReader();
    let previewImg = fileRef.current.files[0];
    setImage(previewImg);
    fileReader.readAsDataURL(previewImg);
    fileReader.onloadend = () => {
      setImage(fileReader.result);
    };
  };

  return (
    <StUserProfileModal>
      <StCloseBtn onClick={updateModalCloseHandler}>
        <img src={cancel} alt="cancel" />
      </StCloseBtn>

      <StImgContainer>
        <StImgBox>
          <div>
            <ProfileImg
              name="profileImg"
              src={image === "" ? editProfile.profileImg : image}
              alt="userProfileImg"
            />
          </div>

          <StImgEditWrap>
            {/* input 숨기기 */}
            <StInput
              type="file"
              ref={fileRef}
              accept="image/*"
              onChange={changeImageHandler}
            />
            <UpdateIcon onClick={imgUpdateHandler}>
              <img src={upload} alt="upload" />
              프로필 사진 변경
            </UpdateIcon>
            <div>10MB 이내의 이미지 파일을 업로드해주세요</div>
          </StImgEditWrap>
        </StImgBox>
      </StImgContainer>

      <StTextBox>
        <StEditInputNameWrap>
          <div>닉네임 </div>
          <div>소개 </div>
        </StEditInputNameWrap>

        <StEditInputWrap>
          <NameInput
            label="닉네임"
            name="nickname"
            value={editProfile.nickname}
            onChange={changeInputHandler}
            maxLength="8"
          />

          <div>닉네임은 2글자 이상 입력해주세요</div>

          <IntroInput
            label="소개"
            name="introduction"
            value={editProfile.introduction}
            onChange={changeInputHandler}
            maxLength="55"
          />
        </StEditInputWrap>
      </StTextBox>

      <StUpdateBtn onClick={updateUserProfileHandler}>수정하기</StUpdateBtn>
    </StUserProfileModal>
  );
}

export default UpdateUserProfileModal;

const StUserProfileModal = styled.div`
  font-family: "SpoqaHanSansNeo-Regular";
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  height: 665px;
  background-color: white;
  border-radius: 20px;
  position: fixed;
  z-index: 10201;
  top: 15%;
  left: 35%;
`;

const StCloseBtn = styled.div`
  display: flex;
  width: 700px;
  height: 68px;
  justify-content: end;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

const StImgContainer = styled.div`
  width: 750px;
  height: 150px;
  padding-left: 68px;
  margin-bottom: 48px;
`;

const StImgBox = styled.div`
  width: 570px;
  height: 150px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;

const StInput = styled.input`
  display: none;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StImgEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UpdateIcon = styled.button`
  font-family: "SpoqaHanSansNeo-Regular";
  background-color: white;
  border: 1px solid gray;
  width: 154px;
  height: 44px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;

  div {
    font-size: 12px;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

const StTextBox = styled.div`
  /* background-color: #ffc0cb62; */
  width: 543px;
  height: 250px;
  display: flex;
  justify-content: space-around;
`;

const StEditInputNameWrap = styled.div`
  width: 54px;
  height: 100px;
  padding: 13px 0px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  /* margin-right: 61px; */

  div {
    width: 70px;
    font-size: 17px;
    font-weight: bold;
  }
`;

const StEditInputWrap = styled.div`
  /* background-color: #5fa75f44; */
  width: 380px;
  height: 230px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NameInput = styled.input`
  font-family: "Montserrat", sans-serif;
  border: 1px solid #cccccc;
  width: 428px;
  height: 41px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;

const IntroInput = styled.textarea`
  font-family: "SpoqaHanSansNeo-Regular";
  border: 1px solid #cccccc;
  width: 406px;
  height: 164px;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  white-space: pre-line;
  resize: none;
  outline: none;
`;

const StUpdateBtn = styled.div`
  border: 1px solid gray;
  border-radius: 30px;
  width: 238px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`;
