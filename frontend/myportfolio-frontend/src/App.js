import './App.css';
import axios from './axios-default';

import React, {useState, useEffect} from 'react';
function App() {

  const [data, setData] = useState();

  useEffect( () => {
    axios.get("users/").then( (res) => {
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>HELLO WORLD</h1>
      <div>{data && console.log(data[0].email)}</div>
    </>
  );
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */

}

export default App;
