import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Form from './Form';
import Contacts from "./Contacts"
import Main from './Main';

function App() {

  // const [page, setPage] = useState("/")

  // state that will toggle the login and logout button
  const [isLogin, setIsLogin] = useState(false)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
  }, [])


  // function handleClick() {
  //   setIsLogin((preState) => !preState)
  //   console.log("click")
  // }
  function handleNewObj(obj) {
    setContacts([...contacts, obj])
  }

  return (
    <div className="App">
      <NavBar click={handleClick} isLogin={isLogin} />

      <Switch>
        <Route exact path="/">
          <Main contacts={contacts} />

        </Route>

        <Route exact path="/form">
          <Form handleNewObj={handleNewObj} />
        </Route>

        <Route exact path="/contact">
          <Contacts contacts={contacts} />
        </Route>

        <Route exact path="*">
          <h1>404 not found</h1>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
