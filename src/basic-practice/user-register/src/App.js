import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import NewUserForm from './components/NewUserForm/NewUserFrom';
import UserList from './components/UserList/UserList';


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
      <Card>
        <NewUserForm onUserRegister={onUserRegister} onInvalidUser={setModalInfo}/>
      </Card>
      {userList.length > 0 && 
      <Card>
        <UserList userList={userList}/>
      </Card>
      }
      {modalInfo.isActive && <Modal onModalClose={setModalInfo} message={modalInfo.message}/>}
    </MainInner>
  );
}

export default App;
