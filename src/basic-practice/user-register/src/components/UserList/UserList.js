import React, { useState } from 'react';
import styled from 'styled-components';

const StyledUserList = styled.ul`
  display: flex;
  flex-direction: column;
`
const StyledUserItem = styled.li`
  height: 30px;
  border: 1px solid rgba(0,0,0,0.5);

  & + & {
    margin-top: 10px;
  }
`
const UserList = props => {
  return (
    <StyledUserList>
      <StyledUserItem>This is user list</StyledUserItem>
      <StyledUserItem>This is user list2</StyledUserItem>
    </StyledUserList>
  )
}

export default UserList;