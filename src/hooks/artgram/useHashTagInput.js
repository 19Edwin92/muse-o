import { useEffect, useState } from "react";

export const useHashTagInput = (inputValue,setInputValue,hashTag, setHashTag) => {
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newHashTag = inputValue.trim();
      if(newHashTag && !hashTag.includes(newHashTag)) {
        setHashTag([...hashTag, newHashTag]);
        setInputValue('')
      } else {
        setInputValue('')
      }
      
    }
  };

  const handleRemoveHashTag = (hashTagOne) => {
    setHashTag(hashTag.filter((tag) => tag !== hashTagOne));
  };
  return {handleInputKeyDown, handleRemoveHashTag}
}