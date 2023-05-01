import React from 'react'
import Header from '../components/Header'
import { Article } from '../shared/GlobalStyled'
import * as US from '../features/unfiedSearch/unfiedSearch'
import { useNavigate } from 'react-router-dom'
import * as Artgramparts from '../features/artgram/css/ArtgramCss'
import { useRecoilValue } from 'recoil'
import { searchDataArtState } from '../hooks/search/seartStore'
import ArtgramBox from '../features/artgram/ArtgramBox'

function UnifiedSearchArt() {
  const navigate = useNavigate()
  const searchDataArt = useRecoilValue(searchDataArtState)
  return (
    <>
    <Header/>
    <Article>
      <US.Layout>
        <US.H1>아트그램검색 <span>Artgram search</span></US.H1>
        <US.SearchNav>
          <US.SearchNavOther onClick={()=>navigate('/search')} children="통합"/>
          <US.SearchNavOther onClick={()=>navigate('/search/exhibition')} children="전시"/>
          <US.SearchNavSection onClick={()=>navigate('/search/art')} children="아트그램"/>
          <US.SearchNavOther onClick={()=>navigate('/search/users')} children="회원검색"/>
        </US.SearchNav>
       {searchDataArt === undefined
        ? (
          <>
          <US.H2 children={(<>아트그램</>)}/>
          <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
          </>
        )
        :(<>
        <US.H2 children={(<>아트그램<span>{searchDataArt?.length > 0 ? searchDataArt.length : null}</span></>)}/>
        {searchDataArt.length === 0
            ? <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
            : <Artgramparts.Wrap>
            {searchDataArt.map(artgrams => (<ArtgramBox key={artgrams.artgramId} info={artgrams}/>))}
            </Artgramparts.Wrap>}
        </>)}
        
       
      </US.Layout>  
    </Article>
    </>
  )
}

export default UnifiedSearchArt