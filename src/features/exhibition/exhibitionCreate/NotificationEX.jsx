import React from "react";
import styled from "styled-components";
import exclamtion_mark from "../../../assets/imgs/exhibition/exclamation-mark.png";

//Todo(refactoring)이부분 영찬님Notification과 같음
function NotificationEX({ warning, coment1, coment2 }) {
  return (
    <Notification>
      <p>
        <span
          children={
            <>
              <NotifiImg src={exclamtion_mark} />
              {warning}
            </>
          }
        />
      </p>
      <p children={coment1} />
      <p children={coment2} />
    </Notification>
  );
}

export default NotificationEX;

const NotifiImg = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;
const Notification = styled.div`
  margin-top: 16px;
  height: 95px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border: 1px solid #7e7e7e;
  border-radius: 5px;
  p {
    font-size: 12px;
  }

  span {
    color: red;
    margin-right: 4px;
    font-size: 12px;
  }

  @media (max-width: 1440px) {
    margin-top: 12px;
    height: 71.25px;
    padding: 15px;
    gap: 6px;
  }
`;
