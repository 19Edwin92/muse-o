import { useState } from "react";
import { usetoken } from "../../../shared/cookies";

export const ReviewRating = () => {
  const [rating, setRating] = useState(0); // 현재 별점 상태
  const handleHover = (value) => {
    setRating(value); // hover되는 별의 값으로 rating 상태를 업데이트
  };
  const ratingReview = [
    "별점을 등록해 주세요",
    "많이 아쉬웠어요.",
    "조금 아쉬웠어요. ",
    "보통이에요.",
    "좋아요. ",
    "최고의 경험이었어요.",
  ];
  return [rating, setRating, handleHover, ratingReview];
};

export const ReviewHashTag = () => {
  const [inputHashTag, setInputHashTag] = useState("");
  const [hashTag, setHashTags] = useState([]);
  const hashTaghandler = (e) => {
    const { value } = e.target;
    setInputHashTag(value);
  };
  const upKeyPress = (e) => {
    const { value } = e.target;
    if (value.length !== 0 && e.key === "Enter") {
      if (hashTag.length > 4) {
        alert("해시태그는 5개 까지 입력가능합니다");
        return;
      }
      let updatedHash = value.trim();
      const regExp = /[\{\}\[\]\/?.;,:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
      if (regExp.test(updatedHash)) {
        alert("태그 내부에 특수문자는 불가능 합니다");
        return;
      }
      if (updatedHash === "") return;
      setHashTags((pre) => {
        return [...pre, `#${updatedHash}`];
      });

      setInputHashTag("");
    }
  };
  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = hashTag.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setHashTags(filteredTagList);
  };
  return [
    hashTag,
    setHashTags,
    inputHashTag,
    setInputHashTag,
    hashTaghandler,
    upKeyPress,
    deleteTagItem,
  ];
};

export const PostEXReview = (
  createExhibition,
  hashTag,
  setRating,
  setInputHashTag,
  setHashTags
) => {
  const { access_token } = usetoken();
  const template = {
    reviewComment: "",
    reviewRating: 0,
  };
  const [postReview, setPostReviews] = useState(template);

  const reviewHandler = (event) => {
    const { value, name } = event.target;
    if (name === "reviewRating") {
      const satarvalue = event.target.dataset.value;
      setPostReviews((pre) => {
        return {
          ...pre,
          [name]: Number(satarvalue),
        };
      });
    } else {
      setPostReviews((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
    }
  };
  //제출하기
  const onSubmitReview = (e) => {
    e.preventDefault();
    if (!access_token) {
      alert("로그인이 필요한 서비스 입니다.");
      return;
    }
    createExhibition({ hashTag, ...postReview });
    setPostReviews(template);
    setRating(0);
    setInputHashTag("");
    setHashTags([]);
  };

  return [reviewHandler, postReview, onSubmitReview];
};
