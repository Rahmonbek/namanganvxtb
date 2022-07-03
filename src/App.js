import React, { Component } from 'react';
import Dashboard from './pages/Dashboard';
import "./App.css";
import "./comment.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Yangiliklar from './pages/Yangiliklar';
import Tumanlar from './pages/Tumanlar';
import Rahbariyat from './pages/Rahbariyat';
import Boglanish from './pages/Boglanish';
import Eslatma from './pages/Eslatma';
import HujjatlarT from './pages/HujjatlarT';
import HujjatlarF from './pages/HujjatlarF';
import HujjatlarO from './pages/HujjatlarO';
import {Xarita} from './pages/Xarita';
import Kutubxona from './pages/Kutubxona';
import Darslar from './pages/Darslar';
import Loyihalar from './pages/Loyihalar';
import HujjatV from './pages/HujjatV';
import HujjatV10 from './pages/HujjatV10';
import HujjatV9 from './pages/HujjatV9';
import HujjatV8 from './pages/HujjatV8';
import HujjatV7 from './pages/HujjatV7';
import HujjatV6 from './pages/HujjatV6';
import HujjatV5 from './pages/HujjatV5';

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
  <Route path="/yangiliklar">
  <Yangiliklar/>
  </Route>
  <Route exact path="/tumanlar">
  <Tumanlar/>
  </Route>
  <Route exact path="/talim">
  <HujjatlarT/>
  </Route>
  <Route exact path="/farmon">
  <HujjatlarF/>
  </Route>
  <Route exact path="/oquvchi">
  <HujjatlarO/>
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
  <Route exact path="/kutubxona">
  <Kutubxona/>
  </Route>
  <Route exact path="/ishlanma">
  <Darslar/>
  </Route>
  <Route exact path="/xalq_ta'limi_vazirligi_hay'at_qarorlari">
<HujjatV/>
  </Route>
  
  <Route exact path="/xalq_ta'limi_vazirligi_me'yoriy_hujjatlari">
<HujjatV5/>
  </Route>
  
  <Route exact path="/ochiq_malumotlar">
<HujjatV6/>
  </Route>
  
  <Route exact path="/me'yoriy_hujjatlar_loyihalari">
<HujjatV7/>
  </Route>
  <Route exact path="/ta'limga_oid_normativ-huquqiy_hujjatlar">
<HujjatV8/>
  </Route>
  <Route exact path="/vazirlik_ishtirokidagi_xalqaro_shartnomalar">
<HujjatV9/>
  </Route>
  <Route exact path="/davlat_tiliga_oid_normativ-huquqiy_hujjatlar">
<HujjatV10/>
  </Route>
  <Route path="/loyihalar">
  <Loyihalar/>
  </Route>
</Switch>
      <Eslatma/>
        </BrowserRouter>
      </div>
    )
  }
}
