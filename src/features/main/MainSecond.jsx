import React from "react";
import * as Main from "./css/mainparts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCurrentExhibitonSlider } from "../../hooks/main/useCurrentExhibitonSlider";
import { useOpenExhibitionByDate } from "../../hooks/main/useOpenExhibitionByDate";
import { useNavigator } from "../../hooks/main/useNavigator";
import { useEditTime } from "../../hooks/main/useEditTime";

function MainSecond() {
  const { slidersettings } = useCurrentExhibitonSlider();
  const { isLoading, isError, data } = useOpenExhibitionByDate();
  const { editTimehandle } = useEditTime();
  const { navigatehandle } = useNavigator();

  return (
    <Main.CommenLayout height="497" media1440="372.75">
      <Main.ArticleTitle>
        <Main.MainH1 children="최신 전시" />
        <Main.MainH5 children="더보기 >" onClick={()=>navigatehandle('/exhibition')}/>
      </Main.ArticleTitle>
      { isLoading || isError
        ? <div style={{marginTop:"66px"}}>로딩 중...</div>
        : 
        <Main.SecondSliderWrap>
            <Slider {...slidersettings}>
              {data.map(exhibition => (
                <Main.SecondSlider key={exhibition.exhibitionId} onClick={() => navigatehandle(exhibition.detailRouter)}>
                  <Main.SecondSliderImg src={exhibition.postImage} alt='최신전시 이미지'/>
                  <Main.SecondSliderTitle children={exhibition.exhibitionTitle}/>
                  <Main.SecondSliderDate children={`${editTimehandle(exhibition.startDate)} ${editTimehandle(exhibition.endDate)}`}/>
                  <Main.SecondSliderlocation children={exhibition.address}/>
                </Main.SecondSlider>
              ))}
            
            </Slider>
        </Main.SecondSliderWrap>
      }
    </Main.CommenLayout>
  );
}

export default MainSecond;