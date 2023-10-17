import React from 'react'
import login from './login'
import './App.css'
import registration from './registration';
import home from './home';
import {Route,Routes,Router} from 'React-router-dom';
import signup from './signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={signup}></Route>
          <Route path="/" element={login}></Route>
          <Route path="/" element={registration}></Route>
          <Route path="/" element={home}></Route>
          <Route path="/login" element={<login/>}></Route>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App
