
import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import styles from '../css/Gallery.module.css'
import { Col, Row } from 'react-bootstrap'
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from 'axios'
import {url, } from '../host/Host'
import NavbarA from './NavbarA'
import Footer from './Footer'


export default class Gallery extends Component {
state={
    loader:true,
   images:null,
   boshqarma:null,
}
getImages=()=>{
  axios.get(`${url}/boshqarma`).then(res=>{
    this.setState({
      boshqarma:res.data[0]
    })
   
    axios.get(`${url}/fotos/`).then(res=>{
      this.setState({images:res.data,loader:false})
    })
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
      <source src={this.state.boshqarma!==null?this.state.boshqarma.video2:''} type="video/mp4" />
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

