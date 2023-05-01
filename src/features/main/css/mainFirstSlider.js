import styled from "styled-components";

const MainSliderOutline = styled.div`
  position:relative;
  max-width: 1256px;
  width: 1256px;
  height: 704px;
  /* background-color: skyblue; */
`

const MainSliderImg = styled.img`
  display: block;
  width: 492px;
  height: 704px;
  margin-left: 390px;
  /* background-color: lightcyan; */
`
const FirstMainSliderTitleDesc = styled.div`
  /* background-color:lightpink; */
  width:526px;
  position:absolute;
  top:148px;
`
const MainSliderTitle = styled.div`
  /* position: absolute; */
  display: grid;
  grid-template-columns: 56px 1fr;
  align-items: center;
  /* top: 134px; */
  width: fit-content;
  max-width: 526px;
  /* min-height: 96px; */
  /* background-color: lightcoral; */

  .titleNum {
    font-size: 24px;
  }
  .title {
    padding: 12px;
    font-size: 48px;
    background-color: rgba(37, 37, 37, 0.7);
    color: #FFF;
  }
`

const MainSliderDesc = styled.div`
  width: 339px;
  height: 120px;
  margin-top: 88px;
  /* position: absolute; */
  /* top: 344px; */
  word-break: keep-all;
  /* text-align: justify; */
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

const MainSliderLink = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 358px;
  height: 70px;
  border-radius: 50px;
  background-color: #D9D9D9;
`

const MainSliderinfo = styled.div`
  position: absolute;
  /* background-color: #D9D9D9; */
  top: 317px;
  transform: translateX(932px);

  .title {
    font-size: 20px;
    margin-bottom: 4px;
  }

  .content {
    margin-bottom: 40px;
    color: #5A5A5A;
  }
`

const SubSliderOutline = styled.div`
  max-width: 269px;
  width: 269px;
  height: 704px;
  /* background-color: lightcoral; */
`

const SubSliderImg = styled.img`
  display: block;
  width: 269px;
  height: 360px;
  margin: 0 auto;
  background-color: lightcyan;
`
const CurrentSliderIndex = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 63px;
  font-family: 'Montserrat', sans-serif;

  p {
    font-size: 25px;
    font-weight: 700;
  }
  
  span {
    font-size: 20px;
    font-weight: 400;
  }
`


export {
  // MainSlider 부분
  MainSliderOutline,
  MainSliderImg,
  FirstMainSliderTitleDesc,
  MainSliderTitle,
  MainSliderDesc,
  MainSliderLink,
  MainSliderinfo,

  // SubSlider 부분
  SubSliderOutline,
  SubSliderImg,
  CurrentSliderIndex,
}