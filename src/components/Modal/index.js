import React from 'react'
import styled from 'styled-components';
import './styles.css';

const Modal = styled.div`
  position: fixed;
  height: 100%;
  margin: 0;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  overflow: hidden;
  @media(max-width: 600px) {
    align-items: flex-end;
  }
`;
const Content = styled.div`
  width: 60%;
  height: 60%;
  background: var(--primary);
  border-radius: 2rem;
  padding: 2rem;
  overflow: scroll;
  @media(max-width: 600px) {
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: var(--accent);
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
`;

const Modal = ({children, toggle, title, onClose}) => {
  return (
    <div>
      {
        toggle && <Modal>
          <Content>
            <CloseButtonContainer
              onClick={onClose}
            > 
              <CloseButton className="close-button">x</CloseButton>
            </CloseButtonContainer>
            <h4 style={{ fontWeight: 600}}>{title}</h4>
            {children}
          </Content>
        </Modal>
      }
    </div>
  )
}

export default Modal