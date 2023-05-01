import React from 'react'
import * as Headers from '../../shared/GlobalStyled'
import { useSearchRank } from '../../hooks/search/useSearchRank';
import { useRecoilState } from 'recoil';
import { searchWordState } from '../../hooks/search/seartStore';
import { useNavigate } from 'react-router-dom';
import { useSearchRecent } from '../../hooks/search/useSearchRecent';

function OpenSearchWindow({searchWindow, setSearchWindow}) {
  const {isLoading:loadingRank, isError:errorRank, data:rank} = useSearchRank(searchWindow)
  const {isLoading:loadingRecent, isError:errorRecent, data:recent} = useSearchRecent(searchWindow)
  const [,setSearchWord] = useRecoilState(searchWordState)
  const navigate = useNavigate();

  const searchwordRankHandle = (keyWord) => {
    setSearchWord(keyWord.replace(/\s/g, ""))
    navigate('/search')
  }

  const searchwordRecentHandle = (keyWord) => {
    setSearchWord(keyWord.replace(/\s/g, ""))
    navigate('/search')
  }

  return (
    <Headers.NavSearchList
      state={searchWindow}
      onClick={()=>setSearchWindow(false)}
      onMouseOver={()=>setSearchWindow(true)}
      onMouseOut={()=>setSearchWindow(false)}>
      
    <Headers.NavSearchListTop10>
      <h2>인기검색어</h2>
      {loadingRank ||  errorRank
        ? <div>로딩 중...</div>
        : rank && rank.map((lists, index)=> (
          <div className="searchList" key={index} onClick={()=>searchwordRankHandle(lists.keyWord)}>
            <div className="rank" children={index+1}/>
            <div className="contents" children={lists.keyWord}/>
          </div>
        ))}      
    </Headers.NavSearchListTop10>
    <Headers.NavSearchListRecently>
      <h2>최근검색어</h2>
      {loadingRecent ||  errorRecent
        ? <div>로딩 중...</div>
        : recent && recent.map((lists, index)=> (
          <div className='searchList' key={index} children={lists.keyWord} onClick={()=>searchwordRecentHandle(lists.keyWord)}/>))}
    </Headers.NavSearchListRecently>
    <Headers.NavSearchMsg children="** 크롬에서 검색창이 사라지지 않으면, 마우스를 검색창 밖으로 이동해 주세요."/>
  </Headers.NavSearchList>
  )
}

export default OpenSearchWindow
