import React from 'react';
import styled from 'styled-components';

const StyledUserItem = styled.li`
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border: 1px solid rgba(0,0,0,0.5);

  & + & {
    margin-top: 10px;
  }
`

const UserItem = props => {
  const { name, age } = props;
  return (
      <StyledUserItem>{`${name} (${age} years old)`}</StyledUserItem>
  )
}

export default UserItem;