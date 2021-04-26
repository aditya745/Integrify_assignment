import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './components/Users';
import User from './components/User';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);
  return (
    <Router>
        <Route exact path='/'>
          <Users users={users} />
        </Route>
        <Route path='/:id'>
          <User users={users} />
        </Route>
    </Router>
  );
}

export default App;
