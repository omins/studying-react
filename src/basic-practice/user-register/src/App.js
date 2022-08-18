import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Modal from './components/Modal/Modal';
import NewUserForm from './components/User/NewUserForm/NewUserFrom';
import UserList from './components/User/UserList/UserList';

const MainInner = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  background-color: black;
`

function App() {
  const [userList, setUserList] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    isActive: false,
    message: 'This is modal message.'
  });

  const onUserRegister = newUser => {
    setUserList((prevUser) => [newUser, ...prevUser])
  }

  return (
    <MainInner className="App">
      <NewUserForm onUserRegister={onUserRegister} onInvalidUser={setModalInfo}/>
      {userList.length > 0 && <UserList userList={userList}/>}
      {modalInfo.isActive && <Modal onModalClose={setModalInfo} message={modalInfo.message}/>}
    </MainInner>
  );
}

export default App;
