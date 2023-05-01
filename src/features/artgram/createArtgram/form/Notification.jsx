import React from 'react'
import exclamationMark from '../../../../assets/imgs/artgram/exclamationMark.png'
import * as ArtgramFormparts from "../ArtgramFormImgparts";

function Notification() {
  return (
    <ArtgramFormparts.Notification>
    <p>
      <span
        children={
          <>
            <img src={exclamationMark} alt='경고이미지'/> 필수입력
          </>
        }
      />
    </p>
    <p children="사진은 1개 이상 6개까지 입력이 가능합니다." />
    <p children="전시 제목과 설명은 필수 입력사항입니다." />
  </ArtgramFormparts.Notification>
  )
}

export default Notification