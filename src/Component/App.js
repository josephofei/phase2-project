import React, { useState } from 'react';
import Header from "./Header"
import Form from './Form';
import Contact from "./Contact"

function App() {

  // state that will toggle the login and logout button
  const [isLogin, setIsLogin] = useState(true)

  function handleClick() {
    setIsLogin((preState) => !preState)
  }


  return (
    <div className="App">
      <Header />
      <Form />
      <Contact />
    </div>
  );
}

export default App;
