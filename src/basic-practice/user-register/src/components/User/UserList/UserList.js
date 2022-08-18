import React from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card/Card';
import UserItem from '../UserItem/UserItem';

const StyledUserList = styled.ul`
  display: flex;
  flex-direction: column;
`

const UserList = props => {
  const { userList } = props;
  console.log(userList)
  return (
    <Card>
      <StyledUserList>
        {userList.map(el => {
          return <UserItem key={el.id} name={el.name} age={el.age}/>
        })}
      </StyledUserList>
    </Card>
  )
}

export default UserList;