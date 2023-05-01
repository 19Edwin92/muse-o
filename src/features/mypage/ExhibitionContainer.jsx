import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetLikedExhibitionInfo } from "../../hooks/mypage/useGetLikedExhibitionInfo";
import { useGetMyExhibitionInfo } from "../../hooks/mypage/useGetMyExhibitionInfo";
import { useGetScrapExhibitionInfo } from "../../hooks/mypage/useGetScrapExhibitionInfo";
import leftBtn from "../../assets/imgs/common/next_cut_gray2.png";
import rightBtn from "../../assets/imgs/common/next_cut_gray2.png";
import whiteBtn from "../../assets/imgs/common/next_cut_white.png";
import { useNavigate } from "react-router-dom";
import whiteLeftArrow from "../../assets/imgs/mypage/WhiteLeftArrow.svg";
import blackLeftArrow from "../../assets/imgs/mypage/blackLeftArrow.svg";

function ExhibitionContainer() {
  const navigate = useNavigate();

  const { LikedExhibitionInfo, likedNum, setLikedNum } =
    useGetLikedExhibitionInfo();
  const { MyExhibitionInfo, myExhibitionNum, setMyExhibitionNum } =
    useGetMyExhibitionInfo();
  const { ScrapExhibitionInfo, scrapExhibitionNum, setScrapExhibitionNum } =
    useGetScrapExhibitionInfo();

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    {
      id: 0,
      name: "좋아요",
      content: [LikedExhibitionInfo?.exhibitionList?.result || []],
      count: LikedExhibitionInfo?.paginationInfo,
    },
    {
      id: 1,
      name: "스크랩",
      content: [ScrapExhibitionInfo?.exhibitionList?.result || []],
      count: ScrapExhibitionInfo?.paginationInfo,
    },
    {
      id: 2,
      name: "내가 여는 전시",
      content: [MyExhibitionInfo?.myExhibitionList?.result || []],
      count: MyExhibitionInfo?.paginationInfo,
    },
  ];

  //탭 메뉴 클릭시 처음 페이지로 돌아옴
  const selectMenuHandler = id => {
    clickTab(id);
    setLikedNum(0);
    setScrapExhibitionNum(0);
    setMyExhibitionNum(0);
  };

  //이전 데이터 불러오기
  const getBackDataHandler = () => {
    //데이터의 첫 페이지보다 작은 페이지로 이동하지 않도록 설정
    if (menuArr[currentTab].id === 0) {
      setLikedNum(likedNum => Math.max(likedNum - 5, 0));
    } else if (menuArr[currentTab].id === 1) {
      setScrapExhibitionNum(scrapExhibitionNum =>
        Math.max(scrapExhibitionNum - 5, 0)
      );
    } else if (menuArr[currentTab].id === 2) {
      setMyExhibitionNum(myExhibitionNum => Math.max(myExhibitionNum - 5, 0));
    }
  };

  //다음 데이터 불러오기
  const getNextDataHandler = () => {
    if (menuArr[currentTab].id === 0) {
      setLikedNum(likedNum => likedNum + 5);
    } else if (menuArr[currentTab].id === 1) {
      setScrapExhibitionNum(scrapExhibitionNum => scrapExhibitionNum + 5);
    } else if (menuArr[currentTab].id === 2) {
      setMyExhibitionNum(myExhibitionNum => myExhibitionNum + 5);
    }
  };

  //전시 상세페이지 이동
  const detailExhibitionPage = info => {
    const exhibitionId = info?.exhibition_id;
    navigate(`/exhibition/detail/${exhibitionId}`);
  };

  const [leftBtnSrc, setLeftSrc] = useState(leftBtn);
  const [leftHoverImg, setLeftHoverImg] = useState(whiteBtn);
  const [rightBtnSrc, setRightSrc] = useState(rightBtn);
  const [rightHoverImg, setRightHoverImg] = useState(whiteBtn);

  return (
    <StContainer>
      <StExhibition>전시</StExhibition>
      <StExhibitionBox>
        <StWrap>
          <StTabWrap>
            {menuArr.map(el => (
              <StTab
                key={el.id}
                onClick={() => selectMenuHandler(el?.id)}
                select={menuArr[currentTab].id === el?.id}
              >
                {el.name}
                <StTabCount selectCount={menuArr[currentTab].id === el?.id}>
                  {el?.count?.myExhibitionCnt ? el?.count?.myExhibitionCnt : 0}
                </StTabCount>
              </StTab>
            ))}
          </StTabWrap>

          <StImgBtnBox>
            <StLeftBtn
              onClick={getBackDataHandler}
              disabled={
                (menuArr[currentTab].id === 0 &&
                  !LikedExhibitionInfo?.paginationInfo?.hasBackPage) ||
                (menuArr[currentTab].id === 1 &&
                  !ScrapExhibitionInfo?.paginationInfo?.hasBackPage) ||
                (menuArr[currentTab].id === 2 &&
                  !MyExhibitionInfo?.paginationInfo?.hasBackPage)
              }
            ></StLeftBtn>

            <StImgBox>
              {menuArr[currentTab].content.map(list => {
                return list.map(info => {
                  return (
                    <StImgWrap
                      key={info.exhibition_id}
                      onClick={() => detailExhibitionPage(info)}
                    >
                      <StImg
                        src={info.post_image}
                        alt={info.exhibition_title}
                      />
                    </StImgWrap>
                  );
                });
              })}
            </StImgBox>
            <StRightBtn
              disabled={
                (menuArr[currentTab].id === 0 &&
                  !LikedExhibitionInfo?.paginationInfo?.hasNextPage) ||
                (menuArr[currentTab].id === 1 &&
                  !ScrapExhibitionInfo?.paginationInfo?.hasNextPage) ||
                (menuArr[currentTab].id === 2 &&
                  !MyExhibitionInfo?.paginationInfo?.hasNextPage)
              }
              onClick={getNextDataHandler}
            ></StRightBtn>
          </StImgBtnBox>
        </StWrap>
      </StExhibitionBox>
    </StContainer>
  );
}

export default ExhibitionContainer;

const StContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const StExhibition = styled.div`
  font-family: "S-CoreDream-3Light";
  font-weight: bold;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StImgBtnBox = styled.div`
  width: 1070px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StLeftBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeeee;
  background-image: url(${blackLeftArrow});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-image: url(${whiteLeftArrow});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* disabled 상태가 아닐 때만 hover 했을 때 배경색이 바뀜 */
  &:not(:disabled):hover {
    background-color: #242424;
    background-image: url(${whiteLeftArrow});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

// const StLeftImg = styled.img`
//   width: 14px;
//   height: 22px;
//   transform: rotate(-180deg);
// `;

const StRightBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eeeeee;
  background-image: url(${blackLeftArrow});
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(-180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-image: url(${whiteLeftArrow});
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(-180deg);
  }

  /* disabled 상태가 아닐 때만 hover 했을 때 배경색이 바뀜 */
  &:not(:disabled):hover {
    background-color: #242424;
    background-image: url(${whiteLeftArrow});
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(-180deg);
  }
`;

const StRightImg = styled.img`
  width: 14px;
  height: 22px;
`;

const StExhibitionBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 1010px;
  height: 348px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 970px; */
`;

const StTabWrap = styled.div`
  width: 450px;
  height: 63px;
  display: flex;
  align-items: center;
  margin-left: 55px;
  gap: 36px;
`;

const StTab = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  font-family: "SpoqaHanSansNeo-Regular";
  font-weight: bold;
  font-size: 16px;

  color: ${({ select }) => (select ? "#242424" : "#7E7E7E")};
`;

const StTabCount = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 12px;
  width: 32px;
  height: 25px;
  border-radius: 30px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ selectCount }) => (selectCount ? "#EEEEEE" : "#7E7E7E")};
  background-color: ${({ selectCount }) =>
    selectCount ? "#242424" : "#EEEEEE"};
`;

const StImgBox = styled.div`
  width: 958px;
  height: 261px;
  /* background-color: #80808089; */
  display: flex;
  gap: 12px;
`;

const StImgWrap = styled.div`
  background-color: #2c2c2c;
  width: 182px;
  height: 261px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StImg = styled.img`
  max-width: 182px;
  max-height: 261px;
`;
