import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';

const StyledUserList = styled.ul`
  display: flex;
  flex-direction: column;
`

const UserList = props => {
  const { userList } = props;
  console.log(userList)
  return (
    <StyledUserList>
      {userList.map(el => {
        return <UserItem key={el.id} name={el.name} age={el.age}/>
      })}
    </StyledUserList>
  )
}

export default UserList;