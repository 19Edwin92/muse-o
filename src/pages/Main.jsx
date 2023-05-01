import React, { useEffect }  from "react";
import Header from "../components/Header";
import { Article } from "../shared/GlobalStyled";
import { MainLayout } from "../features/main/css/mainparts";
import MainFirst from '../features/main/MainFirst'
import MainSecond from '../features/main/MainSecond'
import MainThird from '../features/main/MainThird'
import MainFourth from '../features/main/MainFourth'
import MainFifith from '../features/main/MainFifith'
import TopButton from "../components/TopButton";
import { useRecoilState } from "recoil";
import { headerStatedefalut } from "../components/headerStore";

function Main() {
  const [headerState, setHeaderState] = useRecoilState(headerStatedefalut)
  useEffect(()=> {
    setHeaderState({...headerState, home:true})
  },[])
  return (
    <>
      <Header />
      <Article>
        <MainLayout>
          <MainFirst />
          <MainSecond />
          <MainThird />
          <MainFourth />
          <MainFifith />
          <TopButton/>
        </MainLayout>
      </Article>
    </>
  );
}

export default Main;
