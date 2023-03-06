import Header from "./components/header/Header";
import Users from "./components/users/Users";
import Timer from "./components/timer/Timer";
import React, { useEffect, useState } from "react";
import Login from "./components/login-form/Login";

function App() {
  const [isLoggenIn, setIsloggenIn] = useState(false);
  const [timer, setTimer] = useState(false);
  const [users, setUsers] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem("AUTCH");
    setIsloggenIn(Boolean(result));
  }, []);

  const loginHandler = () => {
    setIsloggenIn(true);
    localStorage.setItem("AUTCH", JSON.stringify(true));
  };

  const logoutHandler = () => {
    setIsloggenIn(false);
    localStorage.removeItem("AUTCH");
    setTimer(false);
  };

  const userHandler = () => {
    setUsers(true);
    setTimer(false);
  };

  const timerHandler = () => {
    setTimer(true);
    setUsers(false);
  };

  const loginState = !users && !timer && isLoggenIn;
  const userShow = users && isLoggenIn;
  const timerShow = timer && isLoggenIn;
  return (
    <React.Fragment>
      <Header
        userHandler={userHandler}
        isAuthenticated={isLoggenIn}
        onLogout={logoutHandler}
        timerHandler={timerHandler}
      />
      <main>
        {!isLoggenIn && <Login onLogin={loginHandler} />}
        {loginState && <Users />}
        {userShow && <Users />}
        {timerShow && <Timer />}
      </main>
    </React.Fragment>
  );
}

export default App;
