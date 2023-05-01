import React, { useState } from "react";
import { useInterserctionObserver } from "../../../hooks/artgram/newArtgram/useIntersectionObserver";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  HeaderCategorySelect,
  HeaderTagSelect,
  HeaderWhenSelect,
  HeaderWhereSelect,
} from "./ExhibitionHeaderSelect";
import { useGetExhibitioninfinity } from "../../../hooks/exhibition/useGetExhibitioninfinity";
import location from "../../../assets/imgs/exhibition/location.png";
import tickets from "../../../assets/imgs/exhibition/tickets.png";
import artist from "../../../assets/imgs/exhibition/artist.png";
import sparkle_gray from "../../../assets/imgs/exhibition/sparkle_gray.png";

function ExhibitionLists() {
  //적용
  const [applycategory, setApplyCategory] = useState("");
  const [applyHashTag, setApplyHashTag] = useState("");
  const [Search, setSearch] = useState("");
  const [applySearch, setApplySearch] = useState("");
  const [applyWhere, setApplyWhere] = useState("");
  //헤더
  const navigator = useNavigate();
  const [whenVisible, setWhenVisible] = useState(false);
  const [whereVisible, setWhereVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const selectHandler = (e) => {
    const { name } = e.target;
    if (name === "when") {
      setWhenVisible(!whenVisible);
      setWhereVisible(false);
      setCategoryVisible(false);
      setTagVisible(false);
    } else if (name === "where") {
      setWhereVisible(!whereVisible);
      setWhenVisible(false);
      setCategoryVisible(false);
      setTagVisible(false);
    } else if (name === "category") {
      setCategoryVisible(!categoryVisible);
      setWhereVisible(false);
      setWhenVisible(false);
      setTagVisible(false);
    } else if (name === "tag") {
      setTagVisible(!tagVisible);
      setCategoryVisible(false);
      setWhereVisible(false);
      setWhenVisible(false);
    }
  };
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetExhibitioninfinity(
      10,
      applycategory,
      applyHashTag,
      applySearch,
      applyWhere
    );
  let merged =
    data?.pages[0].data.exhibitionList.rows.length > 0
      ? [].concat(...data?.pages[0].data.exhibitionList.rows)
      : [];
  const { ref } = useInterserctionObserver(fetchNextPage);
  //검색
  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  const onSearchHandler = () => {
    setApplySearch(Search);
    setSearch("");
  };
  // console.log("data", data?.pages[0]);
  // console.log("적용된것", applyWhere, applycategory, applyHashTag, applySearch);

  return (
    <ExhibitionWrap>
      <ExhibitionHeader>
        <HeaderTitle>전시</HeaderTitle>
        <HeaderFilterWrap>
          <FilterSelect name="when" onClick={selectHandler}>
            When
            <SelectBox visible={whenVisible}>진행중</SelectBox>
          </FilterSelect>
          <FilterSelect name="where" onClick={selectHandler}>
            Where
            <SelectBox visible={whereVisible}>
              <HeaderWhereSelect
                setApplyWhere={setApplyWhere}
                setWhereVisible={setWhereVisible}
              />
            </SelectBox>
          </FilterSelect>
          <FilterSelect name="category" onClick={selectHandler}>
            Category
            <SelectBox visible={categoryVisible}>
              <HeaderCategorySelect
                setApplyCategory={setApplyCategory}
                setCategoryVisible={setCategoryVisible}
              />
            </SelectBox>
          </FilterSelect>
          <FilterSelect name="tag" onClick={selectHandler}>
            Tag
            <SelectBox visible={tagVisible}>
              {/* <HeaderTagSelect
                setApplyHashTag={setApplyHashTag}
                setTagVisible={setTagVisible}
              /> */}
            </SelectBox>
          </FilterSelect>
          <FilterInputWrap>
            <FilterSearch
              Placeholder="검색"
              value={Search}
              onChange={onChangeSearch}
            ></FilterSearch>
            <FilterButton onClick={onSearchHandler}>검색하기</FilterButton>
          </FilterInputWrap>
        </HeaderFilterWrap>
      </ExhibitionHeader>
      {isLoading || isError ? (
        <div>로딩 중...</div>
      ) : merged.length !== 0 ? (
        merged.map((item) => (
          <ExhibitionItem key={item.exhibitionId}>
            <ImageBox src={item.postImage} />
            <ExhibitionInfoBox>
              <ExhibitionDate>
                {item.startDate.slice(2, 10).replace(/-/g, ".") +
                  " - " +
                  item.endDate.slice(2, 10).replace(/-/g, ".")}
                {item.address?.split(" ").slice(0, 2).join(" ")}
              </ExhibitionDate>
              <ExSate>Now On View</ExSate>
              <ExhibitionTitleWrap>
                <Excategoryname>{item.categoryCodeName[0]}</Excategoryname>
                <ExhibitonTitle>{item.exhibitionTitle}</ExhibitonTitle>
                <ExhibitonSecondTitle>
                  {item.exhibitionEngTitle}
                </ExhibitonSecondTitle>
              </ExhibitionTitleWrap>
            </ExhibitionInfoBox>
            <ExhibitionInfoDetailBox>
              <ExhibitionDatailInfo>
                <DatailInfo>
                  <InfoBox>
                    <Info>
                      <Items>
                        <EmoticonImg src={location} />
                        <span>장소</span>
                      </Items>
                      <InfoText>{item.location}</InfoText>
                    </Info>
                    <Info>
                      <Items>
                        <EmoticonImg src={tickets} />
                        <span>관람료</span>
                      </Items>
                      <InfoText>{item.entranceFee}</InfoText>
                    </Info>
                  </InfoBox>
                  <InfoBox>
                    <Info>
                      <Items>
                        <EmoticonImg src={artist} />
                        <span>작가</span>
                      </Items>
                      <InfoText>{item.authorNickName}</InfoText>
                    </Info>
                    <Info>
                      <Items>
                        <EmoticonImg src={sparkle_gray} />
                        <span>평점</span>
                      </Items>
                      <InfoText>{item.reviewAvgRating}</InfoText>
                    </Info>
                  </InfoBox>
                </DatailInfo>
                <ExhibitionHashTag>
                  {item.tagName
                    ?.sort(() => Math.random() - 0.5)
                    .slice(0, 5)
                    .map((tag) => {
                      return <span key={tag}>{tag}</span>;
                    })}
                </ExhibitionHashTag>
              </ExhibitionDatailInfo>

              <ExhibitionMore
                onClick={() => {
                  navigator(`/exhibition/detail/${item.exhibitionId}`);
                }}
              >
                <span>M</span>
                <span>O</span>
                <span>R</span>
                <span>E</span>
              </ExhibitionMore>
            </ExhibitionInfoDetailBox>
          </ExhibitionItem>
        ))
      ) : (
        <NoneData>데이터가 없습니다</NoneData>
      )}
      <HiddenRef
        ref={ref}
        children={hasNextPage ? "fetchNextPage요청" : "마지막페이지"}
      />
    </ExhibitionWrap>
  );
}

export default ExhibitionLists;
const NoneData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  height: 500px;
`;
const Items = styled.div`
  display: flex;
`;

const InfoText = styled.p`
  margin-left: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #3c3c3c;
`;
const EmoticonImg = styled.img`
  width: 17px;
  height: 17px;
`;
const ExSate = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  background: linear-gradient(180deg, #3360ff 0%, #b960ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Excategoryname = styled.span`
  color: #5a5a5a;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;
const HiddenRef = styled.div`
  margin-top: 10px;
  color: transparent;
`;
const ExhibitionWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 0 76px;
  overflow: hidden;
`;
const Info = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #242424;
  }
`;
const DatailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 200px;
`;
const ExhibitionHashTag = styled.div`
  padding: 0px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    background: linear-gradient(180deg, #3360ff 0%, #b960ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
const ExhibitonTitle = styled.span`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 3em;
  line-height: 38px;
  color: #000000;
`;
const ExhibitonSecondTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const Div = styled.div`
  background-color: #a6d6a6;
  font-size: 40px;
  height: 380px;
`;

const SelectBox = styled.div`
  z-index: 2;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 49px;
  display: ${({ visible }) =>
    visible ? "block" : "none"}; //버튼식으로 hidden,block 으로 껏키가능 select
`;

const ExhibitionHeader = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
`;

const HeaderFilterWrap = styled.div`
  display: flex;
  flex: 1;
  gap: 24px;
  background: #ffffff;
`;

const FilterSelect = styled.button`
  all: unset; // 모든 기본 스타일 초기화
  box-sizing: border-box;
  width: 200px;
  height: 49px;
  background: #ffffff;
  font-size: 18px;
  border-bottom: 1px solid #5b5b5b;
  padding: 12px 20px;
  position: relative;
  :hover {
    background-color: #f3f3f3;
  }
  /* cursor: pointer; */
`;

const FilterInputWrap = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 4px;
  margin-left: 24px;
  position: relative;
`;

const FilterSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 12px;
  border-radius: 4px;
`;

const FilterButton = styled.button`
  height: 100%;
  // background: inherit; //!부모의 속성을 따라가는
  background: transparent;
  font-size: 17px;
  font-weight: bold;
  padding: 0 12px;
  position: absolute;
  right: 0;
  :hover {
    cursor: pointer;
  }
`;

const ExhibitionItem = styled.div`
  display: flex;
  box-sizing: border-box;
  font-size: 25px;
  height: 380px;
  background: #f7f7f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const ImageBox = styled.img`
  width: 266px;
  height: auto;
  object-fit: cover;
`;

const ExhibitionInfoBox = styled.div`
  font-size: 1em; //!부모 따라가기 em이랑 rem
  max-width: 690px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
  position: relative;
`;

const ExhibitionDate = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #242424;
`;

const ExhibitionTitleWrap = styled.div`
  gap: 6px;
  position: absolute;
  bottom: 63px;
  right: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ExhibitionDatailInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-left: 1px dashed gray;
  padding: 60px 80px;
  box-sizing: border-box;
`;

const ExhibitionMore = styled.div`
  display: flex;
  max-width: 76px;
  flex: 1;
  flex-direction: column;
  border-left: 1px dashed gray;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 3px;
  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding: 3px 20px;
  }
  transition: background 1s ease, color 1s ease;
  :hover {
    cursor: pointer;
    background: #242424;
    color: #ffffff;
  }
`;

const ExhibitionInfoDetailBox = styled.div`
  max-width: 569px;
  display: flex;
  flex: 1;
  flex-direction: row;
`;
