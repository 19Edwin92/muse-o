import React from "react";
import { useDetailGetExibition } from "../../../hooks/exhibition/useDetailGetExibition";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Flex } from "../../../components/Flex";
import ExhibitionReview from "./ExhibitionReview";
import ExhibitionReviewForm from "./ExhibitionReviewForm";
import ExhibitionLiked from "./ExhibitionLiked";
import ExhibitionScrap from "./ExhibitionScrap";
import { AiOutlineLike, AiOutlineLink, AiFillLike } from "react-icons/ai";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { usetoken } from "../../../shared/cookies";

function ExhibitionDetail() {
  const { id } = useParams();
  const navigator = useNavigate();
  const { decodetoken } = usetoken();
  const userEmail = decodetoken?.email;
  const [data, isLoading, isError] = useDetailGetExibition(id);
  const info = data?.exhibitionInfo;
  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <Flex>
      {info && (
        <>
          <BlackBg>
            <Date>
              <DateP>
                {info.startDate.slice(0, 10).replace(/-/g, ".")}-
                {info.endDate.slice(0, 10).replace(/-/g, ".")}
              </DateP>
              <OnOffTitle>{info.exhibitionKindName}</OnOffTitle>
            </Date>
            <Title>
              <TitleH1>{info.exhibitionTitle}</TitleH1>
            </Title>
            <SecondTitle>
              <SecondTitleH2>{info.exhibitionEngTitle}</SecondTitleH2>
            </SecondTitle>
          </BlackBg>
          <PostWrap>
            <Posts>
              <PostImg src={info.postImage} />
              <EXButtons>
                <ExBtn>
                  {info.liked === 0 ? (
                    <Icon>
                      <AiOutlineLike />
                    </Icon>
                  ) : (
                    <Icon>
                      <AiFillLike />
                    </Icon>
                  )}
                  <ExhibitionLiked exhibitionId={id}>좋아요</ExhibitionLiked>
                </ExBtn>
                <ExBtn iscenter={true}>
                  {info.scraped === 0 ? (
                    <Icon>
                      <BsBookmarkCheck />
                    </Icon>
                  ) : (
                    <Icon>
                      <BsBookmarkCheckFill />
                    </Icon>
                  )}
                  <ExhibitionScrap exhibitionId={id}>스크랩</ExhibitionScrap>
                </ExBtn>
                <ExBtn>
                  <Icon>
                    <AiOutlineLink />
                  </Icon>
                  <ArtLinkBtn>Artgram</ArtLinkBtn>
                </ExBtn>
              </EXButtons>
            </Posts>
          </PostWrap>
          <ContentWrap>
            <Contents>
              {info.userEmail === userEmail && (
                <button
                  onClick={() =>
                    navigator(`/exhibition/update/${info.exhibitionId}`)
                  }
                >
                  수정하기
                </button>
              )}
              <ExhibitionDescBOX>{info.exhibitionDesc}</ExhibitionDescBOX>
              <ExhibitioninfoP>전시 정보</ExhibitioninfoP>
              <ExhibitionInfoWrap>
                <ExhibitionInfo>
                  <InfoTitle>위치</InfoTitle>
                  <InfoBox>
                    <span>{info.ExhibitionAddress.address}</span>
                    <div>{info.ExhibitionAddress.zonecode}</div>
                    <span>{info.location}</span>
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>입장료</InfoTitle>
                  <InfoBox>
                    <span>{info.entranceFee}</span>
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>분류</InfoTitle>
                  <InfoBox>
                    {info.ExhibitionCategories?.map((theme) => {
                      return (
                        <div key={theme.exhibition_code}>
                          {theme.exhibition_code}
                        </div>
                      );
                    })}
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>작가</InfoTitle>
                  <InfoBox>
                    {info.ExhibitionAuthors?.map((author) => {
                      return (
                        <div key={author.author}>
                          <span>{author.author}</span>
                        </div>
                      );
                    })}
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>작품수</InfoTitle>
                  <InfoBox>
                    <span>{info.artWorkCnt}정</span>
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>후원</InfoTitle>
                  <InfoBox>
                    <span>{info.agencyAndSponsor}</span>
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>기간</InfoTitle>
                  <InfoBox>
                    <p>시작</p>
                    {info.startDate.slice(0, 10)}
                    <p>끝</p>
                    {info.endDate.slice(0, 10)}
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>시간</InfoTitle>
                  <InfoBox>
                    <p>시작시간</p>
                    {info.openTime.slice(0, 5)}
                    <p>닫는시간</p>
                    {info.closeTime.slice(0, 5)}
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>전화번호</InfoTitle>
                  <InfoBox>
                    <p>전화번호</p>
                    Tel:{info.contact}
                  </InfoBox>
                </ExhibitionInfo>
                <ExhibitionInfo>
                  <InfoTitle>전시호 테마</InfoTitle>
                  <InfoBox>
                    <p>전시회테마</p>
                    {info.exhibitionStatus}
                  </InfoBox>
                </ExhibitionInfo>
              </ExhibitionInfoWrap>
              <ExhibitioninfoP>작품 사진</ExhibitioninfoP>
              {/* //!이부분은 작성페이지랑 비슷함 컴포넌트 재사용 가능할듯 */}
              <ThumbsContainer>
                {info.ExhibitionImgs?.map((file) => (
                  <div>
                    <Thumb key={file.imgUrl}>
                      <ThumbInner>
                        <Thumbimg src={file.imgUrl} />
                      </ThumbInner>
                    </Thumb>
                  </div>
                ))}
              </ThumbsContainer>
              <ExhibitioninfoP>후기작성</ExhibitioninfoP>
              <ExhibitionReviewForm exhibitionID={id} />
              <ExhibitionReview exhibitionID={id} />
            </Contents>
          </ContentWrap>
        </>
      )}
    </Flex>
  );
}

export default ExhibitionDetail;
const OnOffTitle = styled.div`
  color: #ffffff;
  padding-left: 16px;
  margin-left: 16px;
  border-left: 1px solid #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 4px solid #eaeaea;
  gap: 8px;
  width: 168px;
  height: 168px;
  box-sizing: border-box;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

const Thumbimg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const ThumbsContainer = styled.aside`
  width: 823px;
  display: flex;
  margin-top: 16;
  gap: 13px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤 바의 색상 */
    border-radius: 4px; /* 스크롤 바의 모서리 둥글기 */
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); /* 스크롤 바의 그림자 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #244dde;
  }
`;
const InfoBox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;
const InfoTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  /* padding-right: 120px; */
  width: 160px;
  box-sizing: border-box;
`;
const ExhibitionInfo = styled.div`
  padding: 32px;
  display: flex;
`;
const Icon = styled.div`
  padding: auto;
  font-size: 20px;
`;
const ExhibitioninfoP = styled.p`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  margin-top: 80px;
`;
const ExhibitionInfoWrap = styled.div`
  margin-top: 24px;
  width: 823px;
  border: 1px solid #494949;
  border-radius: 10px;
`;
const ExBtn = styled.div`
  gap: 12px;
  padding: 22px 38px;
  display: flex;
  flex: 1;
  border-width: ${(props) => props.iscenter && `0px 1px 0px 1px`};
  border-style: solid;
  border-color: #000000;
`;
const ArtLinkBtn = styled.button`
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  align-items: center;
`;
const EXButtons = styled.div`
  width: 493px;
  height: 75px;
  display: flex;
  border-width: 1px 0px 1px 0px;
  padding: 6px 0px;
  border-style: solid;
  border-color: #000000;
  justify-content: space-around;
  margin-top: 15px;
`;

const ExhibitionDescBOX = styled.div`
  width: 823px;
  min-height: 200px;
  margin-top: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
`;
const DIV = styled.div`
  background-color: aqua;
  margin-top: 50px;
`;

const SecondTitle = styled.div`
  margin-left: 648px;
  margin-top: 12px;
  height: 39px;
`;

const SecondTitleH2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #cecece;
`;

const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 648px;
`;
const PostImg = styled.img`
  max-height: 704px;
  max-width: 425px;
  margin-top: 58px;
`;
const ContentWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 1025px;
`;

const BlackBg = styled.div`
  position: fixed;
  background-color: #1b1917;
  height: 328px;
  width: 1675px;
  z-index: 5;
`;

const Date = styled.div`
  display: flex;
  margin-left: 648px;
  margin-top: 60px;
`;

const Title = styled.div`
  margin-left: 648px;
  margin-top: 56px;
`;

const TitleH1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 59px;
  letter-spacing: -0.038em;
  color: #ffffff;
`;

const DateP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Contents = styled.div`
  position: relative;
  margin-top: 328px;
  z-index: 3;
`;
