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
import { idMaktab, url, user } from '../host/Host'
import NavbarA from './NavbarA'
import Footer from './Footer'


export default class Gallery extends Component {
     state={
    loader:true,
   
    school:null,
  
}
  
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${user}`).then((res) => {
    
      this.setState({
        school: res.data,

       
      });
axios.get(`${url}/region/${res.data.region}/`).then(res1=>{
  this.setState({region:res1.data})
  setTimeout(() => {
    this.setState({
      loader: false,
    });
  }, 3000);
})
     
    });
  };
 

  componentDidMount() {
    
    this.getSchool();

   
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
      <h1>{this.state.region!==null?this.state.region.address:''} {this.state.region!==null?this.state.region.region_name:''} tumani 
      <br/> {this.state.school!==null?this.state.school.school_number:''} - {this.state.school!==null?this.state.school.type:''}</h1>
  </div>

<div className={styles.rasmlar}>
    <Row style={{justifyContent:'center'}}>
    {
         this.state.school!==null && this.state.school.b_r1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.b_r1}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.b_c1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.b_c1}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.b_c2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.b_c2}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.b_c3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.b_c3}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_h1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h1}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_h2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h2}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.m_h_h3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h3}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.m_h_h4!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h4}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.m_h_h5!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_h5}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_navruz!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_navruz}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_mustaqillik!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_mustaqillik}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_bitiruv!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_bitiruv}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_t!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_t}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.m_h_oshxona!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_oshxona}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_musiqa!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_musiqa}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.m_h_sport!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.m_h_sport}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto1!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto1}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto2!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto2}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.foto3!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto3}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto4!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto4}/>
     </Col>:""
     } */}
    {
         this.state.school!==null && this.state.school.foto5!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto5}/>
     </Col>:""
     }
    {
         this.state.school!==null && this.state.school.foto6!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto6}/>
     </Col>:""
     }
    {/* {
         this.state.school!==null && this.state.school.foto7!==null?<Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={this.state.school.foto7}/>
     </Col>:""
     } */}
        
    </Row>
</div>
<Footer/>
            </div>
    }</>)
    }
}

