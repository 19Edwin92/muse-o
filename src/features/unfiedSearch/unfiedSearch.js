import styled from "styled-components";

const Layout = styled.div`
  padding: 80px 75px;
  @media (max-width: 1440px) {
    padding: 60px 56.25px;
  }
`

const H1 = styled.h1`
  font-size: 48px;
  font-family: 'S-CoreDream-3Light';

  span {
    font-family: 'Montserrat';
    font-size: 32px;
  }
  @media (max-width: 1440px) {
    font-size: 36px;
    span {
      font-size: 24px;
    }
  }
`
const H2 = styled.h2`
  font-size: 24px;
  font-family: 'S-CoreDream-3Light';
  margin-top: 81px;

  span {
    font-family: 'Montserrat';
    margin-left: 9px;
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    span {
      font-size: 15px;
    }
  }
`

const SearchNav = styled.div`
  margin-top: 46px;
  display: flex;
  gap: 40px;

  @media (max-width: 1440px) {
    margin-top: 34.5px;
    gap: 30px;
    margin-bottom: 60.75px;
  }
  `

const SearchNavSection = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 1440px) {
    font-size: 18px;
  }
`
const SearchNavOther = styled(SearchNavSection)`
  color: #7E7E7E;
`

const SearchBoxEx = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 23px;
  margin-top: 42px;
  width: 100%;
  min-height: 144px;
  
  // background-color: 

  @media (max-width: 1440px) {
    margin-top: 31.5px;
    gap: 17.25px;
    min-height: 108px;
  }
`;

const SearchBoxArt = styled(SearchBoxEx)`
  min-height: 426px;
  background-color: lightcoral;
  background-color: aliceblue;

  @media (max-width: 1440px) {
    min-height: 319.5px;
  }
`;

const SearchBoxNoone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  height: 144px;
  background-color: #F7F7F9;
  color: #242424;
`

const SearchEx = styled.div`
  width: 235px;
  min-height: 445px;

  @media (max-width: 1440px) {
    width: 176.25px;
    min-height: 333.75px;
  }
`
const SearchBoxExImg = styled.img`
  display: block;
  width: 235px;
  height: 338px;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    width: 176.25px;
    height: 253.5px;
    margin-bottom: 15px;
  }
`
const SearchBoxExTitle = styled.div`
  font-size: 20px;
  color: #242424;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-bottom: 12px;
  
  @media (max-width: 1440px) {
    font-size: 15px;
    margin-bottom: 9px;
  }
`

const SearchBoxExlocation = styled.div`
  font-size: 16px;
  color: #5A5A5A;
  @media (max-width: 1440px) {
    font-size: 12px;
  }
`

const SearchBoxExDate = styled(SearchBoxExlocation)`
  font-family: 'Montserrat';
  margin-bottom: 10px;
  @media (max-width: 1440px) {
    margin-bottom: 7.5px;
  }
`
const SearchBoxUse = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 23px;
  margin-top: 42px;
  width: 100%;
  min-height: 190px;
  
  // background-color: 

  @media (max-width: 1440px) {
    margin-top: 31.5px;
    gap: 17.25px;
    min-height: 142.5px;
  }
`;

const SearchUse = styled.div`
  width: 150px;
  height: 190px;
  img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  div{
    margin-top: 16px;
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;

/* 3 */

color: #242424;

  }
`



  export {
    Layout,
    H1,H2,
    SearchNav,
    SearchNavSection,
    SearchNavOther,
    SearchBoxNoone,
    // SearchBoxEx 관련부분
    SearchBoxEx,
    SearchEx,
    SearchBoxExImg,
    SearchBoxExTitle,
    SearchBoxExDate,
    SearchBoxExlocation,
    // SearchBoxArt 관련부분
    SearchBoxArt,

    // SearchBoxUser 관련부분
    SearchBoxUse,
    SearchUse

  }