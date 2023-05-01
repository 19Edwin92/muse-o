import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  height: 590px;
  gap: 153px;

  @media (max-width: 1440px) {
    height: 442.5px;
    gap:114.75
  }
`

const FormLeft = styled.div`
  width: 622px;
  height: 100%;
  @media (max-width: 1440px) {
    width: 466.5px;
  }
`
const FormRigth = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
  @media (max-width: 1440px) {
    gap: 24px;
  }
`

const Formbtn = styled.button`
bottom: 0;
font-size: 1rem;
margin-left: 100px;
border: 1px solid #242424;
border-radius: 50px;
height: 78px;
@media (max-width: 1440px) {
  font-size: 0.75rem;
  height: 58.5px;
}
`

const DropZone = styled.section`
  height: 479x;
  border-radius: 10px;

   @media (max-width: 1440px) {
    height:359.35px
  }
`

const DropZoneMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 10px 10px 0 0;
  background-color: #3C3C3C;
  color: #FFFFFF; 

   @media (max-width: 1440px) {
    height:45px
  }
`

const DropZonePreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 419px;
  padding: 16px;
  gap: 8px;
  border-radius: 0 0 10px 10px;
  border: 1px dashed #242424;
  border-top: none;

   @media (max-width: 1440px) {
    height:314.25px;
    padding: 12px;
    gap: 6px;
  }
`

const PreviewBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 191px;
  height: 191px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1440px) {
    width: 143.25px;
    height: 143.25px;
  }
`

const PreviewBoxDelete = styled.div`
  position: absolute;
  text-align: center;
  right: 8px;
  top: 8px;
  width: fit-content;
  line-height: 20px;
  border-radius: 4px;
  padding: 2px 4px;
  background-color: #242424;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`


const Notification = styled.div`
  margin-top: 16px;
  height: 95px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 1px solid #7E7E7E;
  border-radius: 5px;
  font-size: 12px;
  img {
    display: inline-block;
    position: relative;
    top: 1px;
    width: 12px;

  }

  span {
    color:red;
    margin-right: 4px;
  }

  @media (max-width: 1440px) {
  margin-top: 12px;
  height: 71.25px;
  padding: 15px;
  gap: 6px;
  img {
    width: 9px;
  }
  }
`

// 추후 삭제예정
const DragText = styled.div`
  font-size: 1.3rem;
`
// 추후 삭제예정
const DragIcon = styled.div`
  width: 100px;
  height: 40px;
  margin: 0 auto;
  font-size: 3rem;
`

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16;
  gap: 13px;
`

const Thumb =  styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 4px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 130px;
  height: 130px;
  padding: 4;
  box-sizing: border-box;
`



const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`

const Thumbimg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export {
  Layout,
  FormLeft,FormRigth,
  DropZone,
  DropZoneMsg,Notification,PreviewBox,
  DragText,Formbtn,
  DropZonePreview,
  PreviewBoxDelete,
  DragIcon,
  ThumbsContainer,
  Thumb,
  ThumbInner,
  Thumbimg
}