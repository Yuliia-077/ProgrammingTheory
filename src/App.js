import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Redirect } from 'react-router-dom';
import Routes from './Routes'
import Check from './components/CheckLogin'

function App() {
  return (
    <div className="App">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <h1 className="brand">Новини у світі програмування</h1>
          </Navbar.Brand>
          <Link className="headLink" to="/home">Головна</Link>
          <Redirect from='/' to='/home' />
          <Link className="headLink" to="/news">Новини</Link>
          <Link className="headLink" to="/profile">Профіль</Link>
          <Check />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
