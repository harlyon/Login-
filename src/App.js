import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Landing from './component/Landing';

function App() {
  return (
    <div className="">
     <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/landing" component={Landing} />
     </Router>
    </div>
  );
}

export default App;
