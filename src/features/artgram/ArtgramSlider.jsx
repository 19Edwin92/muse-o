// 이미지슬라이더를 위한 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import * as Modal from "./css/ArtgramModal";
import styled from "styled-components";
import next_cut_gray from '../../assets/imgs/common/next_cut_gray.png'
import next_cut_white from '../../assets/imgs/common/next_cut_white.png'
import { useState } from "react";


const ArtgramSlider = ({map}) => {
  const settings = {
    speed: 500, // 속도조절
    infinite:false,
    slidesToShow: 1, // 화면에 보여지는 슬라이더의 수 
    slidesToScroll: 1, // 한번에 넘길 슬라이더이더의 수 
    style:{position:"relative"},
    verticalAlign: "middle", // 슬라이드를 상하 중앙으로 정렬
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {map.map((img) => (
        <Modal.ModdalinnerImg key={img.imgUrl} src={img.imgUrl} width="100" />
      ))}
    </Slider>
  );
}

export default ArtgramSlider;


function PrevArrow(props) {
  const { onClick, currentSlide } = props;
  const [arrow, setArrow] =useState(false)
  if(currentSlide === 0 ) {
    return null
  }
  return (
    <PrevArrowST 
      state={arrow}
      onMouseOver={()=>setArrow(true)}
      onMouseOut={()=>setArrow(false)}
      onClick={onClick}
      children={<img src={arrow ? next_cut_white : next_cut_gray}/>}/>
  );
}

function NextArrow(props) {
  const { onClick ,currentSlide, slideCount} = props;
  const [arrow, setArrow] =useState(false)
  // currentSlide 현재 슬라이더의 위치를 추츨해준다. 0부터 개수
  // slideCount 총 슬라이더의 개수를 파악해준다. 1부터 개수
  if(currentSlide === slideCount-1) {
    return null
  }
  return (
    <NextArrowST 
      state={arrow}
      onMouseOver={()=>setArrow(true)}
      onMouseOut={()=>setArrow(false)}
      onClick={onClick}
      children={<img src={arrow ? next_cut_white : next_cut_gray}/>}/>
  );
}


const PrevArrowST = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left:10px;
  top:50%;
  transform: translate(-50% -50%);
  width: 50px;
  height: 50px;
  background-color: ${props => !props.state ? "rgba(238, 238, 238, 0.6)" : "rgba(36, 36, 36, 0.6)"};
  border-radius: 50px;
  z-index:10;
  cursor: pointer;

  img {
    display: block;
    transform: rotate(-180deg);
    width: 10px;
  }

  @media (max-width: 1440px) {
    left:7.5px;
    width: 37.5px;
    height: 37.5px;
    img {
      width: 7.5px;
    }
  }
`

const NextArrowST = styled(PrevArrowST)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* right:10px; */
  left: 90%;
  top:50%;
  transform: translate(-50% -50%);
  width: 50px;
  height: 50px;
  background-color: ${props => !props.state ? "rgba(238, 238, 238, 0.6)" : "rgba(36, 36, 36, 0.6)"};
  border-radius: 50px;
  z-index:10;
  cursor: pointer;

  img {
    display: block;
    transform: rotate(0);
    width: 10px;
  }

  @media (max-width: 1440px) {
    /* right:7.5px; */
    width: 37.5px;
    height: 37.5px;
    img {
      width: 7.5px;
    }
  }
`

const CustomNextButton = styled.div`
    display: block;
    position: absolute;
    right: 5px;
    top: 50%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    transform: rotateY(-50%);
    background-color:rgba(80, 80, 80, 0.2);
    border-radius: 50px;
    color: black;
    z-index: 10;
`;

const CustomPrevButton = styled(CustomNextButton)`
      left: 5px;
`

const Icons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -41%);
  font-size: 2.8rem;
  color: red;
  text-align: center;
`;