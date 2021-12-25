import video2 from '../videos/bosh2.mp4'
import React, { Component } from 'react'
import NavbarT from './NavbarT'
import style from '../css/Dashboard.module.css'
import styles from '../css/Gallery.module.css'
import { Col, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from 'axios'
import {url, } from '../host/Host'
import NavbarA from './NavbarA'
import Footer from './Footer'
import rasm1 from "../images/rasm1.jpg";
import rasm2 from "../images/rasm2.jpg";
import rasm3 from "../images/rasm3.jpg";
import rasm4 from "../images/rasm4.jpg";
import rasm5 from "../images/rasm5.jpg";
import rasm6 from "../images/rasm6.jpg";
import rasm7 from "../images/rasm7.jpg";
import rasm8 from "../images/rasm8.jpg";
import rasm9 from "../images/rasm9.jpg";
import rasm10 from "../images/rasm10.jpg";


export default class Gallery extends Component {
state={
    loader:true,
   images:null,
}
getImages=()=>{
      axios.get(`${url}/fotos/`).then(res=>{
        console.log(res.data) 
        this.setState({images:res.data,loader:false})
      })
}
 
  


  componentDidMount() {
this.getImages() 
}
    render() {
       
        return (
          <>
          {this.state.loader?<div className={style.load}>
          <GridLoader
 color="violet" loading={this.state.loader} size={40} />
          </div>: <div>
                <NavbarA/>
                <div className={style.video}>
                <video loop={true} autoPlay={true} muted={true}>
      <source src={video2} type="video/mp4" />
  </video>
  </div>
  <div className={style.binaf}>
  
  </div>

<div className={styles.rasmlar}>
    <Row style={{justifyContent:'center'}}>
   {this.state.images!==null?this.state.images.map(item=>{
       return(<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
       <img src={item.foto_lavha}/>
   </Col>)
   }):''}
    </Row>
</div>
<Footer/>
            </div>
    }</>)
    }
}

