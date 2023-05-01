import styled from "styled-components";
import { Flex } from "../../../components/Flex";
import { Wrap } from "../../../shared/GlobalStyled";

const ArtgramWrap = styled(Wrap)`
  width: 1525px;
  min-width:1525px;
`

const H1 = styled.h1`
  font-size: ${props=>props.fs};
  text-align: ${props=>props.ta};
  font-weight:900;
  font-family: "S-CoreDream-3Light";
  margin: ${props => props.type === "아트그램" ? "81px 75px 0" : "10px" };

  .english {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
  }
  @media (max-width: 1440px) {
    margin: ${props => props.type === "아트그램" ? "60.75px 56.25px 0" : "7.5px" };
  }

`

const MainFlex = styled(Flex)`
  width:1525px;
  min-height:400px;
  margin: 50px 75px 100px;
  /* background-color:yellow; */
`

const UserFlex = styled(Flex)`
  width:364px;
  min-height:61px;
  max-height:61px;
  position:relative;
  padding: 0 16px;
  background-color: lightcoral;
`
const MainDiv = styled.div`
  width: auto;
  margin: 61px 75px 100px;
`;

const Artgrambox = styled(Flex)`
  width:364px;
  min-width:364px;
  min-height:426px;
  max-height:426px;
  background-color:rgb(240, 240, 240);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 7px #878787;
`

const Img = styled.img`
  width:100%;
  height:365px;
  max-height:365px;
  overflow:hidden;
  border-radius: 8px 8px 0 0;
`

const Posting = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis; 
  margin: 0 10px;
  font-size: 1.5rem;
  line-height:2.5rem;
  vertical-align: bottom;
`;

const Desc = styled(Posting)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  height:75px;
  min-height:75px; 
  margin: 0 10px;
  font-size: 1.5rem;
  line-height:2.5rem;
  vertical-align: bottom;
`;

const Nickname = styled.div`
  height:40px;
  min-height:40px; 
  line-height: 40px;
  font-size: 1.8rem;
  margin-left:10px;

  span {
    font-size: 1.8rem;
    color: ${pos => pos.color};
  }
`
const ModalNickname = styled.div`
  min-height:40px; 
  line-height: 40px;
  font-size: 1.8rem;
  margin-left:10px;

  span {
    font-size: 1.8rem;
    color: ${pos => pos.color};
  }
`

const ProflieBox = styled(Nickname)`
  width:40px;
  min-width:40px;
  border-radius:50px;
  background-color:rgba(37, 37, 37, 0.8);
  background-image: url(${props => props.url || "null"});
  background-position: center;
  background-size: cover;
`
const Likes = styled.div`
  position:absolute;
  right:0;
  height:40px;
  min-height:40px; 
  line-height: 40px;
  font-size: 1.8rem;
  margin-right:10px;

  span {
    font-size: 1.5rem;
    color: tomato;
  }
`

const PluralImgs = styled.div`
  position: absolute;
  top:8px;
  right: 8px;
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  
  p{
    position: relative;
    top: 2px;
    font-size: 3.5rem;
  }
`

export {
  ArtgramWrap,
  H1,
  MainFlex,
  UserFlex,
  MainDiv,
  Artgrambox,
  Img,
  Posting,
  Desc,
  ProflieBox,
  Nickname,
  ModalNickname,
  Likes,
  PluralImgs
}