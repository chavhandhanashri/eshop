import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
       <Switch>
         <Route path="/"  exact component={Products}/>
         <Route path="/cart" exact component={Cart}/>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
