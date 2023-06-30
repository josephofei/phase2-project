import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import Form from './Form';
import Contacts from "./Contacts"
// import NavBar from './NavBar';

function App() {

  const [page, setPage] = useState("/")

  // state that will toggle the login and logout button
  const [isLogin, setIsLogin] = useState(false)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
  }, [])


  function handleClick() {
    setIsLogin((preState) => !preState)
    console.log("click")
  }
  function handleNewObj(obj) {
    setContacts([...contacts, obj])
  }

  return (
    <div className="App">
      <Header click={handleClick} isLogin={isLogin} />
      <Form handleNewObj={handleNewObj} />
      <Contacts contacts={contacts} />
      {/* <NavBar onChangePage={setPage} />

      <Switch>

        <Route path="/form">
          <Form handleNewObj={handleNewObj} />
        </Route>

        <Route path="/contact">
          <Contacts contacts={contacts} />
        </Route>

/* <Header click={handleClick} isLogin={isLogin} />

<Route exact path="/home">
  <App />
</Route>

<Route path="*">
  <h1>404 not found</h1>
</Route>

</Switch> */}


    </div>
  );
}

export default App;
