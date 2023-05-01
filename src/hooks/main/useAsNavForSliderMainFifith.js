import { useEffect, useRef, useState } from "react";
import next_cut_gray from '../../assets/imgs/common/next_cut_gray.png'
import next_cut_white from '../../assets/imgs/common/next_cut_white.png'
import styled from "styled-components";

export const useAsNavForSliderMainFifith = () => {
  const [mainSlider, setMainSlider] = useState(null);
  const [subSlider, setSudSilder] = useState(null);
  const mainSliderRef = useRef(null);
  const subSliderRef = useRef(null);

  useEffect(() => {
    setInterval(()=> {
      setMainSlider(mainSliderRef.current);
      setSudSilder(subSliderRef.current);
     }, 3000)
  }, [subSliderRef]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const Indexhandler = (oldIndex, newIndex) => {
    setCurrentSlideIndex(newIndex + 1);
  };

  const mainSliderSettings = {
    asNavFor: subSlider,
    ref: (slider) => (mainSliderRef.current = slider),
    slidesToShow: 1,
    swipeToSlide: true,
    infinite: true,
    dots: false,
    arrows: false,
  };
  const subSliderSettings = {
    asNavFor: mainSlider,
    ref: (slider) => (subSliderRef.current = slider),
    slidesToShow: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    style: { position: "static"},
    beforeChange: Indexhandler,
  };
  return { mainSliderSettings, subSliderSettings, currentSlideIndex };
};

function PrevArrow(props) {
  const { onClick } = props;
  const [arrow, setArrow] =useState(false)
  const arrowHandle = () => {
    setArrow(pre=>!pre)
  }
  return (
    <PrevArrowST
      state={arrow}
      onMouseOver={arrowHandle}
      onMouseOut={arrowHandle}
      onClick={onClick}
      children={<img src={arrow ? next_cut_white : next_cut_gray}/>}/>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  const [arrow, setArrow] =useState(false)
  const arrowHandle = () => {
    setArrow(pre=>!pre)
  }
  return (
    <NextArrowST
      state={arrow}
      onMouseOver={arrowHandle}
      onMouseOut={arrowHandle}
      onClick={onClick}
      children={<img src={arrow ? next_cut_white : next_cut_gray}/>}/>
  );
}


const PrevArrowST = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 470px;
  width: 63px;
  height: 63px;
  background-color: ${props => props.state ? "#3C3C3C" : "#EEEEEE"};
  border-radius: 50px;
  z-index:1;
  cursor: pointer;

  img {
    display: block;
    transform: rotate(-180deg);
    width: 10px;
  }

  @media (max-width: 1440px) {
    left: 352.5px;
    width: 47.25px;
    height: 47.25px;
    img {
      width: 7.5px;
    }
  }
`

const NextArrowST = styled(PrevArrowST)`
  bottom: 0;
  left: 707px;
  img {
    transform: rotate(0deg);
  }
  @media (max-width: 1440px) {
    left: 530.25px;
  }
`