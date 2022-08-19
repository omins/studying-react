import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const LOGIN_KEY = 'isLoggedIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem(LOGIN_KEY);

    if (userLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem(LOGIN_KEY, '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(LOGIN_KEY);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
