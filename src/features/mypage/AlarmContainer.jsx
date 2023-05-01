import React, { useState } from "react";
import styled from "styled-components";
import bell from "../../assets/imgs/mypage/bell_gray.png";
import { useGetAlramInfo } from "../../hooks/mypage/useGetAlramInfo";
import likeIcon from "../../assets/imgs/common/heart_red.png";
import commentIcon from "../../assets/imgs/mypage/chat_blue.png";
import { usePatchAlramInfo } from "../../hooks/mypage/usePatchAlramInfo";
import ArtgarmDetailModal from "./../artgram/detailModal/ArtgarmDetailModal";
import { useOpenModal } from "./../../hooks/artgram/useOpenModal";
import { useNavigate } from "react-router-dom";

function AlarmContainer() {
  const { modalState, openModalhandle } = useOpenModal(); //아트그램 모달
  const [artgramId, setArtgramId] = useState(""); //id를 넘겨주기 위한 state

  //react-query
  const { AlramInfo } = useGetAlramInfo();
  const { updateAlramInfo } = usePatchAlramInfo();
  const navigate = useNavigate();

  const seenTrueHandler = list => {
    const notiId = list.notiId;
    updateAlramInfo(notiId);
    list.seen = true;

    if (list.noti_content === "artgram") {
      const artgramId = list?.noti_content_id;
      setArtgramId(artgramId); //id 넘겨주기
      openModalhandle(artgramId);
    } else if (list.noti_content === "exhibition") {
      navigate(`/exhibition/detail/${list?.noti_content_id}`);
    }
  };

  return (
    <>
      <StAlramContainer>
        <StAlramTitle>
          <AlramTitle>알림</AlramTitle>
          <StBell>
            <img src={bell} alt="bell" />
          </StBell>
        </StAlramTitle>
        <StAlramBox>
          {AlramInfo?.map(list => {
            return (
              <StAlramWrap
                style={
                  list.seen === false
                    ? { backgroundColor: "#F0F3FF" }
                    : { backgroundColor: "white" }
                }
                key={list.notiId}
                onClick={() => seenTrueHandler(list)}
              >
                {(list.noti_content === "artgram" && (
                  <div>
                    <StIconWrap>
                      {(list.noti_type === "like" && (
                        <img src={likeIcon} alt="likeIcon" />
                      )) ||
                        (list.noti_type === "comment" && (
                          <img src={commentIcon} alt="commentIcon" />
                        )) ||
                        (list.noti_type === "reply" && (
                          <img src={commentIcon} alt="commentIcon" />
                        ))}
                    </StIconWrap>

                    <StAlramContents>
                      <div style={{ gap: "20px" }}>
                        <StAlramTheme>아트그램</StAlramTheme>
                        {/* <div>3일전</div> */}
                      </div>
                      <StAlramContent>
                        {(list.noti_type === "like" &&
                          `${list.noti_sender_nickname} 님이 회원님의 아트그램을 좋아합니다.`) ||
                          (list.noti_type === "comment" &&
                            `${list.noti_sender_nickname} 님이 회원님의 아트그램에 댓글을 남겼습니다.`) ||
                          (list.noti_type === "reply" &&
                            `${list.noti_sender_nickname} 님이 회원님의 댓글에 답글을 남겼습니다.`)}
                      </StAlramContent>
                    </StAlramContents>
                  </div>
                )) ||
                  (list.noti_content === "exhibition" && (
                    <div>
                      <StIconWrap>
                        {(list.noti_type === "like" && (
                          <img src={likeIcon} alt="likeIcon" />
                        )) ||
                          (list.noti_type === "comment" && (
                            <img src={commentIcon} alt="commentIcon" />
                          ))}
                      </StIconWrap>

                      <StAlramContents>
                        <div style={{ gap: "20px" }}>
                          <StAlramTheme>전시</StAlramTheme>
                          {/* <div>3일전</div> */}
                        </div>
                        <StAlramContent>
                          {(list.noti_type === "like" &&
                            `${list.noti_sender_nickname} 님이 회원님의 글을 좋아합니다.`) ||
                            (list.noti_type === "comment" &&
                              `${list.noti_sender_nickname} 님이 회원님의 글에 후기를 남겼습니다.`)}
                        </StAlramContent>
                      </StAlramContents>
                    </div>
                  ))}
              </StAlramWrap>
            );
          })}
        </StAlramBox>
      </StAlramContainer>

      {/* 아트그램 모달 */}
      {modalState && (
        <ArtgarmDetailModal
          artgramId={artgramId}
          modalState={modalState}
          openModalhandle={openModalhandle}
        />
      )}
    </>
  );
}

export default AlarmContainer;

const StAlramContainer = styled.div`
  width: 392px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StAlramTitle = styled.div`
  display: flex;
  margin-bottom: 24px;
  gap: 4px;
`;

const AlramTitle = styled.div`
  font-family: "S-CoreDream-3Light";
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const StBell = styled.div`
  width: 23px;
  height: 23px;

  img {
    width: 23px;
    height: 23px;
  }
`;

const StAlramBox = styled.div`
  background-color: white;
  width: 392px;
  height: 469px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const StAlramWrap = styled.div`
  width: 392px;
  height: 66px;
  padding: 10px;
  margin-bottom: 1px;
  cursor: pointer;

  div {
    display: flex;
  }
`;

const StIconWrap = styled.div`
  background-color: #ffffff;
  width: 42px;
  height: 42px;
  border: 1px solid #cccccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;

  img {
    width: 22px;
    height: 22px;
  }
`;

const StAlramContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const StAlramTheme = styled.div`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 7px;
`;

const StAlramContent = styled.div`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 12px;
  font-weight: 400;
  color: #3c3c3c;
  letter-spacing: -0.003em;
`;
