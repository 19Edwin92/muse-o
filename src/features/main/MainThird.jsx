import React from "react";
import * as Main from "./css/mainparts";
import { useMostLike } from "../../hooks/main/useMostLike";
import { useEditTime } from "../../hooks/main/useEditTime";
import { useNavigator } from "../../hooks/main/useNavigator";

function MainThird() {
  const { isLoading, isError, data } = useMostLike();
  const { editTimehandle } = useEditTime();
  const {navigatehandle} = useNavigator()

  return (
    <Main.ThirdLayout height="906" media1440="679.5">
      <Main.ArticleTitle>
        <Main.MainH1 children="TOP 10" />
        <Main.MainH5 children="더보기 >" onClick={()=>navigatehandle('/exhibition')}/>
      </Main.ArticleTitle>
      { isLoading || isError
        ? <div style={{marginTop:"66px"}}>로딩 중...</div>
        : 
        <Main.ThirdWrapGrid>
        <div>
          {data && data.row1.map(list1 => (
            <Main.ThirdInner key={list1.exhibitionId} onClick={()=>navigatehandle(list1.detailRouter)}>
              <Main.ThirdNum>{list1.index}</Main.ThirdNum>
              <Main.ThirdImg children={<img src={list1.postImage} alt="인기순 전시"/>}/>
              <Main.ThirdInfo>
              <p className="titleKo">{list1.exhibitionTitle}</p>
        <p className="titleEn">
          {list1.exhibitionEngTitle}
        </p>
        <p className="location">
          {editTimehandle(list1.startDate)}{" - "}
          {editTimehandle(list1.endDate)}
        </p>
              </Main.ThirdInfo>
            </Main.ThirdInner>
          ))}
        </div>
        <div>
        {data && data.row2.map(list2 => (
            <Main.ThirdInner key={list2.exhibitionId} onClick={()=>navigatehandle(list2.detailRouter)}>
              <Main.ThirdNum>{list2.index}</Main.ThirdNum>
              <Main.ThirdImg children={<img src={list2.postImage} alt="인기순 전시"/>}/>
              <Main.ThirdInfo>
              <p className="titleKo">{list2.exhibitionTitle}</p>
        <p className="titleEn">
          {list2.exhibitionEngTitle}
        </p>
        <p className="location">
          {editTimehandle(list2.startDate)}{" - "}
          {editTimehandle(list2.endDate)}
        </p>
              </Main.ThirdInfo>
            </Main.ThirdInner>
          ))}
        </div>
      </Main.ThirdWrapGrid>}
    </Main.ThirdLayout>
  );
}

export default MainThird;