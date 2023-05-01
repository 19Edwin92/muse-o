import React, { useEffect, useState } from "react";
import * as Main from "./css/mainparts";
import { useGetDate } from "../../hooks/main/useGetDate";
import { useNearestExhibition } from "../../hooks/main/useNearestExhibition";
import { useNavigator } from "../../hooks/main/useNavigator";

function MainFourth() {
  const { getday, getMonth } = useGetDate();

  const { isLoading, isError, data } = useNearestExhibition();
  const [imgState, setImgState] = useState(null);
  const {navigatehandle} = useNavigator()

  useEffect(() => {
    if (data && data.length > 0) {
      setImgState(data[0].postImage);
    }
  }, [data]);


  return (
    <Main.CommenLayout height="624" media1440="468">
      <Main.ArticleTitle>
        <Main.MainH1 children="예정 전시"/>
        <Main.MainH5 children="더보기 >" onClick={()=>navigatehandle('/exhibition')}/>
      </Main.ArticleTitle>
      <Main.FourthWrap>
        <Main.FourthImg src={imgState} alt="예정전시 이미지" />
        {isLoading || isError 
          ? <div>로딩 중... </div> 
          : (<Main.FouthInfoWrap>
            {data && data.map(exhibition => (
                <Main.FourthInfo key={exhibition.exhibitionId} onMouseOver={()=>setImgState(exhibition.postImage)}>
                  <Main.FouthInfoDate children={<>
                    <p>{getday(exhibition.startDate)}</p>
                    <p>{getMonth(exhibition.startDate)}</p>
                  </>}/>
                  <Main.FouthInfoTitle children={<>
                    <p>{exhibition.exhibitionTitle}</p>
                    <p>{exhibition.exhibitionEngTitle}</p>
                  </>}/>
                  <Main.FouthInfoAddress children={
                    <p>{exhibition.address}</p>
                  }/>
                </Main.FourthInfo>
              ))}
          </Main.FouthInfoWrap>)}
        
      </Main.FourthWrap>
    </Main.CommenLayout>
  );
}

export default MainFourth;