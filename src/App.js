import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Yangiliklar from './pages/Yangiliklar';
import Tumanlar from './pages/Tumanlar';
import Rahbariyat from './pages/Rahbariyat';
import Boglanish from './pages/Boglanish';
import Eslatma from './pages/Eslatma';
import {Xarita} from './pages/Xarita';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
     
<Switch>
<Route exact path="/">
  <Dashboard/>
  </Route>
  <Route exact path="/gallery">
  <Gallery/>
  </Route>
  <Route exact path="/yangiliklar">
  <Yangiliklar/>
  </Route>
  <Route exact path="/tumanlar">
  <Tumanlar/>
  </Route>
  <Route exact path="/rahbariyat">
  <Rahbariyat/>
  </Route>
  <Route exact path="/boglanish">
  <Boglanish/>
  </Route>
  <Route exact path="/maktablar">
  <Xarita/>
  </Route>
</Switch>
      <Eslatma/>
        </BrowserRouter>
      </div>
    )
  }
}
