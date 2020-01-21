import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Form from './components/Form';
import View from './components/View';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={Main} />
        <Route path='/create' exact component={Form} />
        <Route path='/edit/:id' exact component={Form} />
        <Route path='/view/:id' exact component={View} />
      </div>
    </Router>
  );
}

export default App;
