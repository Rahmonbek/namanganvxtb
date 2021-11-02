import video2 from '../videos/bosh3.mp4'
import React, { Component } from 'react'
import NavbarT from './NavbarT'
import style from '../css/Dashboard.module.css'
import styles from '../css/Gallery.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GridLoader from "react-spinners/GridLoader";
import axios from 'axios'
import { idMaktab, url, user } from '../host/Host'
import NavbarA from './NavbarA'
import { Collapse } from 'antd';
import { getNews } from '../host/Config'
import Footer from './Footer'

const { Panel } = Collapse;

export default class Yangiliklar extends Component {
     state={
    loader:true,
   news:null,
    school:null,
  
}
getNews = () => {
    getNews()
      .then((res) => {
      this.setState({
        news:res.data
      })
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    this.getNews();

   
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
<div className={styles.newsY}>
<Collapse accordion defaultActiveKey={['0']}>
    {this.state.news!==null?this.state.news.map((item, key)=>{
return(
<Panel header={item.title} key={key}>
      <div>
          <Container>
              <div className={styles.imag}>
                  <img src={item.image}/>
              </div>
              <div className={styles.yozuv}>
                  <h1>{item.title}</h1>
                  <p><i className="fa fa-calendar"></i>{item.published_time.substring(0,10)}</p>
                  <p>{item.text}</p>
              </div>
          </Container>
      </div>
    </Panel>
  
)
    }):''}
    </Collapse>
</div>
<Footer/>
            </div>
    }</>)
    }
}

