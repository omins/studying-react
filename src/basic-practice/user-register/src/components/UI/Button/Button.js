import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  border: none;
  background-color: #40005d;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const Button = ({ className, children, onClick, type }) => {
  return <StyledButton onClick={onClick} className={className} type={type || 'button'}>{children}</StyledButton>
}

export default Button;