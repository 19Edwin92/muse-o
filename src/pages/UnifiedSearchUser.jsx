import React from 'react'
import Header from '../components/Header'
import { Article } from '../shared/GlobalStyled'
import * as US from '../features/unfiedSearch/unfiedSearch'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { searchDataUserState } from '../hooks/search/seartStore'

function UnifiedSearchUser() {
  const navigate = useNavigate()
  const searchDataUser = useRecoilValue(searchDataUserState)
  return (
    <>
    <Header/>
    <Article>
      <US.Layout>
        <US.H1>회원검색 <span>User search</span></US.H1>
        <US.SearchNav>
          <US.SearchNavOther onClick={()=>navigate('/search')} children="통합"/>
          <US.SearchNavOther onClick={()=>navigate('/search/exhibition')} children="전시"/>
          <US.SearchNavOther onClick={()=>navigate('/search/art')} children="아트그램"/>
          <US.SearchNavSection onClick={()=>navigate('/search/users')} children="회원검색"/>
        </US.SearchNav>
        {searchDataUser === undefined
        ? (
          <>
          <US.H2 children={(<>회원검색</>)}/>
          <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
          </>
        )
        :(<>
         <US.H2 children={(<>회원검색<span>{searchDataUser?.length > 0 ? searchDataUser.length : null}</span></>)}/>
          {searchDataUser && searchDataUser?.length === 0
            ? <US.SearchBoxNoone children="검색된 결과가 없습니다."/>
            : <US.SearchBoxUse>
                {searchDataUser.map(user=>(
                  <US.SearchUse key={user.profileId} children={<>
                    <img src={user.profileImg} alt='profileImg'/>
                    <div children={user.profileNickname}/>
                  </>}/>
                ))}
              </US.SearchBoxUse>}     
        </>)}
      </US.Layout>  
    </Article>
    </>
  )
}

export default UnifiedSearchUser