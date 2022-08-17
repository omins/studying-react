import './App.css';
import styled from 'styled-components';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import NewUserForm from './components/NewUserForm/NewUserFrom';
import UserList from './components/UserList/UserList';


const MainInner = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: black;
`

function App() {
  return (
    <MainInner className="App">
      <Card>
        <NewUserForm/>
      </Card>
      <Card>
        <UserList/>
      </Card>
      {/* <Modal/> */}
    </MainInner>
  );
}

export default App;
