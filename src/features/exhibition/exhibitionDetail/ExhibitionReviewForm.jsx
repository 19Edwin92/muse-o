import React from "react";
import { usePostReview } from "../../../hooks/exhibition/usePostReview";
import styled from "styled-components";
import cancel_WGray from "../../../assets/imgs/common/cancel_WGray.png";
import sparkle from "../../../assets/imgs/exhibition/sparkle.png";
import sparkle_full_gradient from "../../../assets/imgs/exhibition/sparkle_full_gradient.png";
import { PostEXReview, ReviewHashTag, ReviewRating } from "./PostEXReview";

function ExhibitionReviewForm({ exhibitionID }) {
  const maxlength = 100;
  //쿼리
  const [createExhibition] = usePostReview(exhibitionID);
  //헤시태그
  const [
    hashTag,
    setHashTags,
    inputHashTag,
    setInputHashTag,
    hashTaghandler,
    upKeyPress,
    deleteTagItem,
  ] = ReviewHashTag();
  //별점 만들기
  const [rating, setRating, handleHover, ratingReview] = ReviewRating();
  //리뷰 제출
  const [reviewHandler, postReview, onSubmitReview] = PostEXReview(
    createExhibition,
    hashTag,
    setRating,
    setInputHashTag,
    setHashTags
  );
  return (
    <ReviewForm>
      <ReviewCount>
        <StarsBox>
          {[1, 2, 3, 4, 5].map((value) => (
            <ReviewStar
              name={"reviewRating"}
              data-value={value}
              key={value}
              src={value <= rating ? sparkle_full_gradient : sparkle}
              alt={`${value} star`}
              onMouseEnter={() => handleHover(value)}
              onMouseLeave={() => handleHover(postReview.reviewRating)} // hover 이벤트 처리
              onClick={reviewHandler}
            />
          ))}
        </StarsBox>
        <StarRating> {rating}</StarRating>
        <RatingReview> {ratingReview[rating]}</RatingReview>
      </ReviewCount>
      <ReviewInputBox>
        <InputReview
          type="textarea"
          placeholder="리뷰 입력"
          onChange={reviewHandler}
          value={postReview.reviewComment}
          name="reviewComment"
          maxLength={maxlength}
        />
        <TagBox>
          {hashTag &&
            hashTag.map((hashTag, index) => {
              return (
                <TagItem pan key={index}>
                  <span>{hashTag}</span>
                  <HashTagCancleImg
                    src={cancel_WGray}
                    alt="Cancel"
                    onClick={deleteTagItem}
                  />
                </TagItem>
              );
            })}
          <TagInput
            placeholder="해시태그 입력 (최대 5개)"
            value={inputHashTag}
            onChange={hashTaghandler}
            onKeyPress={upKeyPress}
            name="hashTag"
          />
        </TagBox>
      </ReviewInputBox>
      <ReviewSubmitBtn onClick={onSubmitReview}>입력</ReviewSubmitBtn>
    </ReviewForm>
  );
}

export default ExhibitionReviewForm;
const ReviewSubmitBtn = styled.button`
  display: flex;
  flex: 1;
  max-width: 100px;
  background-color: unset;
  border: 1px solid #242424;
  border-radius: 10px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    background-color: #bdbdbd;
  }
`;
const RatingReview = styled.span`
  font-size: 12px;
  color: #5a5a5a;
`;
const StarRating = styled.span`
  font-size: 20px;
`;
const StarsBox = styled.div`
  display: flex;
`;
const ReviewStar = styled.img`
  width: 4em;
  height: 4em;
  cursor: pointer;
`;
const HashTagCancleImg = styled.img`
  width: 0.9em;
  cursor: pointer;
`;
const ReviewInputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 487px;
  border-radius: 10px;
  border: 1px solid black;
`;
const ReviewCount = styled.div`
  gap: 10px;
  display: flex;
  flex: 1;
  max-width: 212px;
  border: 1px solid #5a5a5a;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

{
  /* <InputsReview>
<InputReviewContainer>
  <InputReview
    type="textarea"
    placeholder="리뷰 입력"
    onChange={reviewHandler}
    value={postReview.reviewComment}
    name="reviewComment"
    maxLength={maxlength}
  />
  <Maxlength>
    {postReview.reviewComment.length} / {maxlength}
  </Maxlength>
</InputReviewContainer>
<TagBox>
  {hashTag &&
    hashTag.map((hashTag, index) => {
      return (
        <TagItem pan key={index}>
          <span>{hashTag}</span>
          <Button onClick={deleteTagItem}>X</Button>
        </TagItem>
      );
    })}
  <TagInput
    placeholder="해시태그 입력 (최대 5개)"
    value={inputHashTag}
    onChange={hashTaghandler}
    onKeyPress={upKeyPress}
    name="hashTag"
  />
</TagBox>
</InputsReview>
<SubmitWrap>
<SubmitReviewBtn onClick={onSubmitReview}>
  <span>리뷰추가</span>
</SubmitReviewBtn>
<Select
  onChange={reviewHandler}
  name="reviewRating"
  value={postReview.reviewRating}
>
  <option>평점입력</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</Select>
</SubmitWrap> */
}
const SubmitReviewBtn = styled.div`
  height: 115px;
  border-radius: 8px;
  background-color: gray;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #333;
  }
  span {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
`;
const SubmitWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const InputReviewContainer = styled.div`
  position: relative;
`;

const InputReview = styled.textarea`
  width: 100%;
  flex: 2;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8f00ff;
    border-radius: 3px;
  }
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;

const Maxlength = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
  color: #999;
`;
const Button = styled.button`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  background-color: transparent; /* 이미지의 배경색을 투명으로 지정 */
  img {
    width: 1rem;
  }
`;
const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin: 5px;
  padding: 10px;
  background: #5a5a5a;
  border-radius: 50px;
  color: white;
  font-size: 12px;
`;

const TagInput = styled.input`
  margin-left: 10px;
  font-size: 15px;
  height: 30px;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;
const TagBox = styled.div`
  display: flex;
  flex: 0.8;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  border: none;
  border-top: 1px solid black;
  border-radius: 0 0 10px 10px;
  font-size: 16px;
`;

const Span = styled.span``;
const Sect = styled.select``;
const Select = styled.select`
  height: 30px;
`;

const InputsReview = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 723px;
  height: 115px;
  margin-right: 10px;
`;

const ReviewForm = styled.div`
  width: 823px;
  margin-top: 40px;
  display: flex;
  height: 170px;
  flex: 1;
  display: flex;
  height: 170px;
  flex: 1;

  & > :first-child {
    margin-right: 8px;
  }

  & > :last-child {
    margin-left: 16px;
  }
`;

const ReviewInputArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  height: 130px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8f00ff;
    border-radius: 3px;
  }
`;
