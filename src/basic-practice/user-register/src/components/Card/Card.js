import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: ${(props) => props.width || "700px"};
  background-color: #fff;
  border-radius: 15px;

  &:first-child {
    margin-top: 0px;
  }
`
const Card = ({ width, className, children }) => {
  return (<StyledCard width={width} className={className}>{children}</StyledCard>)
}

export default Card;