import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

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

const ModalInner = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 50%;
  width: 700px;
  height: 300px;
  padding: 15px;
  border-radius: 15px;
  background-color: #fff;
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

  & button {
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
`

const ModalText = styled.p`
  font-size: 24px;
  font-weight: 400;
`

const Modal = props => {
  return (
    <ModalBackground>
      <ModalInner>
        <ModalHeader>
          <ModalTitle>This is Modal Header</ModalTitle>
        </ModalHeader>
        <ModalMain>
          <ModalText>Warning!</ModalText>
          <Button>Okay</Button>
        </ModalMain>
      </ModalInner>
    </ModalBackground>
  )
}

export default Modal;