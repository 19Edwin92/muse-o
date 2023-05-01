import React from "react";
import * as Main from "./css/mainparts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAsNavForSliderMainFirst } from "../../hooks/main/useAsNavForSliderMainFirst";
import { useEditTime } from "../../hooks/main/useEditTime";
import { usePersonalExhibition } from "../../hooks/main/usePersonalExhibition";
import { useNavigator } from "../../hooks/main/useNavigator";

function MainFirst() {
  const { firstSliderSettings, secondSliderSettings, currentSlideIndex } = useAsNavForSliderMainFirst();
  const { editTimehandle } = useEditTime();
  const { navigatehandle } = useNavigator();
  const { isLoading, isError, data } = usePersonalExhibition();

  let editLists;
  if (data) {
    const editList = [...data];
    const editshiftitem = editList.shift();
    editList.push(editshiftitem);
    editLists = editList;
  }

  return (
    <Main.CommenLayout height="709" media1440="528">
      <Main.ArticleTitle>
        <Main.MainH4 children="개인전"/>
      </Main.ArticleTitle>
      { isLoading || isError
        ? <div style={{marginTop:"66px"}}>로딩 중...</div>
        : (<Main.FirstWrapGrid>
            <Main.FirstMainSlider>
            <Slider {...firstSliderSettings}>
              {data && data.map(personalEx => (
                <Main.FirstMainSliderWrap key={personalEx.exhibitionId}>
                  <Main.FirstMainSliderTitle children={(
                    <>
                    <div className="titleNum"
                      children={personalEx.index < 9
                        ? `0${personalEx.index}.`
                        : `${personalEx.index}.`}/>
                    <div className="title" children={personalEx.exhibitionTitle}/>
                  </>
                  )}/>
                  <Main.FirstMainSliderImg src={personalEx.postImage}/>
                  <Main.FirstMainSliderDesc children={personalEx.exhibitionDesc}/>
                  <Main.FirstMainSliderBtn onClick={()=>navigatehandle(personalEx.detailRouter)} children="자세히 보러가기"/>
                  <Main.FirstMainSliderInfo>
                    <Main.FirstMainSliderInfoText children={<>
                      <p className="title" children="기간"/>
                      <p className="content contentdate" children={
                        `${editTimehandle(personalEx.startDate)} - ${editTimehandle(personalEx.endDate)}`}/>
                    </>}/>
                    <Main.FirstMainSliderInfoText children={<>
                      <p className="title" children="위치"/>
                      <p className="content" children={personalEx.address}/>
                    </>}/>
                    <Main.FirstMainSliderInfoText children={<>
                      <p className="title" children="작가"/>
                      <p className="content" 
                          children={personalEx.author.length === 1 
                              ? personalEx.author.map(author => `${author}`)
                              : personalEx.author.length < 5 
                              ? personalEx.author.map((author, index) => personalEx.author.length === index+1 ? `${author}` : `${author}, ` )
                              : `${personalEx.author[0]}외 ${personalEx.author.length -1}명`
                            }/>
                    </>}/>
                  </Main.FirstMainSliderInfo> 
                </Main.FirstMainSliderWrap>
              ))}
            </Slider>
            </Main.FirstMainSlider>
            <Main.FirstSubSlider children={
              <Slider {...secondSliderSettings}>
              {editLists && editLists.map(personalEx => (
                <Main.FirstSubSliderWrap 
                  key={personalEx.exhibitionId} 
                  children={<Main.FirstSubSliderImg src={personalEx.postImage} alt="개인전 이미지"/>}/>))}
              </Slider>}
            />
          </Main.FirstWrapGrid>)}
          <Main.FirstSliderIndex children={currentSlideIndex < 10 
            ? <>0{currentSlideIndex}&nbsp;<span>/ 0{editLists?.length}</span></> 
            : <>{currentSlideIndex}&nbsp;<span>/ {editLists?.length}</span></>}/>
    </Main.CommenLayout>
  );
}

export default MainFirst;

