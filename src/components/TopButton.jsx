import React from 'react'
import topButton from '../assets/imgs/common/topButton.png'
import { TopButtun, TopButtunWrap } from '../shared/GlobalStyled'

function TopButton() {
  const topbutton = ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }

  return (
    <TopButtunWrap children={<TopButtun onClick={topbutton} children={<img src={topButton}/>}/>}/>
    
  )
}

export default TopButton;