import React, { useEffect, useRef, useState } from "react";
import { useGetUserProfile } from "../../hooks/mypage/useGetUserProfile";
import UpdateUserProfileModal from "./UpdateUserProfileModal";
import UpdateModalBlackBg from "./UpdateModalBlackBg";
import styled from "styled-components";
import AlarmContainer from "./AlarmContainer";
import palette from "../../assets/imgs/mypage/palette_gradient.png";
import setting from "../../assets/imgs/mypage/gear_gray.png";
import { usePatchRole } from "../../hooks/mypage/usePatchRole";

function UserProfile() {
  //react-query
  const { userProfile } = useGetUserProfile();
  const { patchRole } = usePatchRole();

  //모달 open 관리
  const [openModal, setOpenModal] = useState(false);

  //수정, 작가신청 setting div
  const [openSet, setOpenSet] = useState(false);

  const openSettingHandler = () => {
    setOpenSet(prevOpenSet => !prevOpenSet);
  };

  //프로필 수정 클릭
  const updateUserProfileHandler = () => {
    setOpenModal(true);
  };

  //작가 신청 클릭
  const [roleApplied, setRoleApplied] = useState(false);
  const changeRoleHandler = () => {
    if (userProfile?.role === "UR04") {
      alert("이미 신청 완료하였습니다.");
    } else if (userProfile?.role === "UR02") {
      alert("이미 작가 인증이 완료되었습니다.");
    } else {
      const confirmResult = window.confirm("작가 신청을 하시겠습니까?");
      if (confirmResult) {
        //작가신청 PATCH
        patchRole();
        setRoleApplied(true);
        alert("작가 신청이 완료되었습니다!");
      }
    }
  };

  //setting div 닫기
  const ref = useRef(null);
  const closeSettingHandler = () => {
    setOpenSet(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeSettingHandler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <StUserProfileBox>
        <ProfileImg src={userProfile?.profileImg} alt="userProfileImg" />

        <StEditBtnWrap>
          <UpdateBtn onClick={openSettingHandler}>
            <img src={setting} alt="setting" />
          </UpdateBtn>
          {openSet && (
            <StSettingBtn ref={ref} onMouseDown={e => e.stopPropagation()}>
              <div onClick={updateUserProfileHandler}>프로필 수정</div>
              <button
                onClick={changeRoleHandler}
                disabled={roleApplied && userProfile?.role === "UR04"}
              >
                작가 신청
              </button>
            </StSettingBtn>
          )}
        </StEditBtnWrap>

        <StUserNameWrap>
          <StInfoUserName>{userProfile?.nickname}</StInfoUserName>
          {userProfile?.role === "UR02" ? (
            <StArtistMark>
              <img src={palette} alt="palette" />
            </StArtistMark>
          ) : null}
        </StUserNameWrap>

        <StUserInfoIntro>
          <InfoIntro>{userProfile?.introduction}</InfoIntro>
        </StUserInfoIntro>

        <Line></Line>

        <AlarmContainer />
      </StUserProfileBox>

      {/* 유저 프로필 수정을 위한 모달 open */}
      {openModal && <UpdateUserProfileModal setOpenModal={setOpenModal} />}
      {/* 모달 열림과 동시에 어두운 백그라운드 넣어주고 어두운 부분 클릭시 모달 닫힘 */}
      {openModal && <UpdateModalBlackBg setOpenModal={setOpenModal} />}
    </>
  );
}

export default UserProfile;

const StUserProfileBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 430px;
  height: 822px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
  margin-left: 20px;
`;

const StEditBtnWrap = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 20px 0px;
  position: relative;
`;

const UpdateBtn = styled.button`
  background-color: white;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

const StSettingBtn = styled.div`
  margin-top: 40px;
  position: absolute;
  width: 135px;
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 12px;
    color: #3c3c3c;
    width: 135px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    border-bottom: 1px solid #dddddd;

    &:hover {
      background-color: #3c3c3c;
      color: #f65959;
    }
  }

  button {
    border: none;
    background-color: inherit;
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 12px;
    color: #3c3c3c;
    width: 135px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;

    button:disabled {
      cursor: default;
      background-color: "#EEEEEE";
      color: "#7E7E7E";
    }

    &:hover:not(:disabled) {
      background-color: #3c3c3c;
      color: #f65959;
    }
  }
`;

const StUserNameWrap = styled.div`
  width: 400px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  gap: 8px;
`;

const StInfoUserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 600;
`;

const StArtistMark = styled.div`
  /* background-color: #808080bd; */
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
  }
`;

const StUserInfoIntro = styled.div`
  font-size: 16px;
  height: 90px;
  width: 250px;
  margin-top: 35px;
`;

const InfoIntro = styled.div`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 16px;
  color: #3c3c3c;
  /* font-weight: 400; */
  line-height: 25px;
  word-break: break-all;
  text-align: center;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: translate(0%, -50%);
  position: absolute;
`;

const Line = styled.div`
  border-top: 1px solid #cccccc;
  width: 392px;
  height: 32px;
`;
