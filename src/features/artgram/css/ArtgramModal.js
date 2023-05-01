import styled from 'styled-components';

const ModalBackground = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  /* background-color: ; */
  background-color: rgba(35, 35, 35, 0.7);
  z-index: 10200;
`
const ModalWindow = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 1400px;
  height: 900px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: #f2f2f2;
  border-radius: 15px;
  z-index: 10200;
`

const ModalinnerDiv = styled.div`
  position: relative;
  width: ${pos => pos.width};
`

const ModalinnerImgDiv = styled(ModalinnerDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModdalinnerImg = styled.img`
  display: block;
  width: 100%;
`

const ModalUsers = styled.div`
  padding: 10px;
  border-bottom: 1px solid gray;
  position: relative;

  .options {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const ModalCommentsBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: yellow;
  width: 100%;
  min-height: 100px;
`

const ModalInner = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  padding: 10px;
`

export {
  ModalBackground,
  ModalWindow,
  ModalinnerDiv,
  ModalinnerImgDiv,
  ModdalinnerImg,
  ModalUsers,
  ModalCommentsBox,
  ModalInner
}  