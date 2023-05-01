import styled from "styled-components";

export const EXListApplyBox = ({
  //카테고리
  category,
  setCategroy,
  setCategoryVisible,
  setCheckboxes,
  setApplyCategory,
  // 해시태그
  setApplyHashTag,
  selectTags,
  setTagVisible,
  setSelectTags,
  setTop10TagLists,
  top10TagsData,
  // 장소
  selectRegion,
  setApplyWhere,
  setWhereVisible,
  sido,
  setCities,
  setSelectRegion,
}) => {
  const apply = () => {
    category && setApplyCategory(category);
    selectTags && setApplyHashTag(selectTags);
    if (selectRegion) {
      const replaceCityName = (addressString) => {
        const cities = [
          ["서울특별시", "서울"],
          ["부산광역시", "부산"],
          ["대구광역시", "대구"],
          ["인천광역시", "인천"],
          ["광주광역시", "광주"],
          ["대전광역시", "대전"],
          ["울산광역시", "울산"],
          ["세종특별자치시", "세종"],
          ["경기도", "경기"],
          ["강원도", "강원"],
          ["충청북도", "충북"],
          ["충청남도", "충남"],
          ["전라북도", "전북"],
          ["전라남도", "전남"],
          ["경상북도", "경북"],
          ["경상남도", "경남"],
          ["제주특별자치도", "제주"],
        ];

        let replacedString = addressString;
        for (let city of cities) {
          const regex = new RegExp(city[0], "g");
          replacedString = replacedString.replace(regex, city[1]);
        }
        return replacedString;
      };
      const where = replaceCityName(selectRegion);
      setApplyWhere(where);
    }
  };
  const reset = () => {
    if (category) {
      setCategroy("");
      setCheckboxes((prevState) =>
        Object.keys(prevState).reduce((acc, curr) => {
          acc[curr] = false;
          return acc;
        }, {})
      );
      setApplyCategory("");
    }
    if (selectTags) {
      setApplyHashTag("");
      setTop10TagLists(
        top10TagsData.map((tag) => {
          return { tagName: tag.tagName, checked: false };
        })
      );
      setSelectTags([]);
    }
    if (sido) {
      setCities(sido);
      setApplyWhere("");
      setSelectRegion("");
    }
  };
  const cancle = () => {
    setCategroy && setCategoryVisible(false);
    setSelectTags && setTagVisible(false);
    setSelectRegion && setWhereVisible(false);
  };
  return (
    <ApplyContainer>
      <ApplyResetBox onClick={reset}>초기화</ApplyResetBox>
      <ApllyBox>
        <div onClick={cancle}>
          <span>취소</span>
        </div>
        <div onClick={apply}>
          <span>적용하기</span>
        </div>
      </ApllyBox>
    </ApplyContainer>
  );
};

const ApplyResetBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36px;
`;
const ApllyBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;
const ApplyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 20px 24px;
  border-top: 1px solid #eeeeee;
`;
