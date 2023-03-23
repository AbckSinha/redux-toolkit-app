import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './module/Layout/Layout';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { UserList } from './module/User/UserList';
import { AddUser } from './module/User/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
        <Route path="/list" element={< UserList />}> </Route>
          <Route path="/list" element={< UserList />}> </Route>
          <Route path="/add" element={<AddUser />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
