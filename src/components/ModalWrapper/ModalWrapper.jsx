import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4); /* dim background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = ({ children }) => {
  return (
    <Overlay>
      <ModalContent>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default ModalWrapper;
