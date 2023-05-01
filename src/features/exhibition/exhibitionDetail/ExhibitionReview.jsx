import React, { useState } from "react";
import styled from "styled-components";
import { useGetReview } from "../../../hooks/exhibition/useGetReview";
import { usetoken } from "../../../shared/cookies";
import { useDeleteReview } from "../../../hooks/exhibition/useDeleteReview";
import { AiOutlineDelete } from "react-icons/ai";
function ExhibitionReview({ exhibitionID }) {
  const { decodetoken } = usetoken();
  const userEmail = decodetoken?.email;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [reviewData, isLoading] = useGetReview(exhibitionID, limit, offset);
  const pageNum = Math.ceil(
    reviewData?.paginationInfo.exhibitionReviewCnt / limit
  );
  const changePage = (pagenum) => {
    setPage(pagenum);
  };
  const changeLimit = (e) => {
    setLimit(e.target.value);
  };
  const [deleteReview] = useDeleteReview();
  return (
    <ReviewWrap>
      {reviewData ? (
        <ShowReview>
          <ExhibitioninfoP>
            후기{reviewData.paginationInfo.exhibitionReviewCnt}
          </ExhibitioninfoP>
          <div>
            <select onChange={changeLimit} name="reviewRating" value={limit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <button>최신순</button>
            <button>평점순</button>
          </div>
          {reviewData?.searchExhibitionReviews.map((review, index) => {
            return (
              <>
                <ReviewBox key={index}>
                  <ReviewHeader>
                    <div>평점:{review.reviewRating}</div>
                    <Center>{review.userEmail}</Center>
                    <div>{review.createdAt.slice(0, 10)}</div>
                    {review.userEmail === userEmail ? (
                      <DeleteIcon>
                        <AiOutlineDelete
                          onClick={() =>
                            deleteReview(review.exhibitionReviewId)
                          }
                        />
                      </DeleteIcon>
                    ) : null}
                  </ReviewHeader>
                  <ReviewComment>
                    <span>{review.reviewComment}</span>
                  </ReviewComment>
                  <ReviewHashTag>
                    {review.ExhibitionHashtags.map((hashtag, index) => {
                      return <span key={index}>{hashtag.tagName}</span>;
                    })}
                  </ReviewHashTag>
                </ReviewBox>
              </>
            );
          })}
          <Buttons>
            <PageButton
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
            >
              이전
            </PageButton>
            {pageNum &&
              Array(pageNum)
                .fill()
                .map((_, i) => (
                  <PageButton
                    key={i + 1}
                    onClick={() => changePage(i + 1)}
                    aria-current={page === i + 1 ? "page" : null}
                  >
                    {i + 1}
                  </PageButton>
                ))}
            <PageButton
              onClick={() => changePage(page + 1)}
              disabled={page === pageNum}
            >
              다음
            </PageButton>
          </Buttons>
        </ShowReview>
      ) : (
        <div>아직 리뷰가 없어요</div>
      )}
    </ReviewWrap>
  );
}

export default ExhibitionReview;
const ExhibitioninfoP = styled.p`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  margin-top: 80px;
`;
const DeleteIcon = styled.div`
  font-size: 15px;
`;
const ReviewHashTag = styled.div`
  margin-top: 18px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
  }
`;
const ReviewComment = styled.div`
  margin-top: 18px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
`;
const Center = styled.div`
  padding: 0px 5px;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;
const ReviewHeader = styled.div`
  gap: 10px;
  display: flex;
`;

const PageButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #555555;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: #8f00ff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
const ReviewBox = styled.div`
  border-top: 1px solid #000000;
  min-height: 120px;
  padding: 5px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
const ShowReview = styled.div``;

const ReviewWrap = styled.div`
  margin-bottom: 100px;
  width: 826px;
`;
