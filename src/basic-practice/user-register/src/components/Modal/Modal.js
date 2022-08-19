import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 5000;
`

const ModalInner = styled(Card)`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 50%;
  height: 300px;
  padding: 15px;
  overflow: hidden;
  transform: translateX(-50%);
  z-index: 5001;
`

const ModalHeader = styled.div`
  width: 710px;
  height: 50px;
  background-color: #40005d;
  margin: -16px -16px 0 -16px;
  padding: 15px;
`

const ModalTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`
const ModalMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const ModalText = styled.p`
  font-size: 24px;
  font-weight: 400;
`

const ModalButton = styled(Button)`
  position: fixed;
  bottom: 15px;
  right: 15px;
`

const Modal = props => {
  const { message, onModalClose } = props;
  
  const modalCloseHandler = event => {
    event.stopPropagation();
    onModalClose(prev => {return {...prev, isActive: false}})
  }

  return (
    ReactDOM.createPortal(
      <ModalBackground onClick={modalCloseHandler}>
      <ModalInner onClick={event => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Invalid Input</ModalTitle>
        </ModalHeader>
        <ModalMain>
          <ModalText>{message}</ModalText>
          <ModalButton onClick={modalCloseHandler}>Okay</ModalButton>
        </ModalMain>
      </ModalInner>
    </ModalBackground>
    , document.querySelector('#modal-root'))
    
  )
}

export default Modal;