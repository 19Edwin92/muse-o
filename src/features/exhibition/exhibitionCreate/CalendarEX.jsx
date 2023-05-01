import React, { useState } from "react";
import styled from "styled-components";

const CalendarEX = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <CalendarToggle onClick={togglePopup}>{children}</CalendarToggle>
      {isOpen && (
        <Popup>
          <p>팝업 창 내용</p>
        </Popup>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 235px;
  height: 42px;
`;

const CalendarToggle = styled.div`
  width: 100px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Popup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 462px;
  height: 502px;
  background-color: #b4b4b4;
  border: 1px solid #e0e0e0;
  z-index: 10;
`;

export default CalendarEX;
