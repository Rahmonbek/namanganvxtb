import video from '../videos/bosh.mp4'
import video2 from '../videos/bosh2.mp4'
import video3 from '../videos/bosh3.mp4'
import React, { Component } from 'react'
import NavbarT from './NavbarT'
import style from '../css/Dashboard.module.css'
import { Col, Row } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import school from "../images/gerb.jpg";
import her2 from "../images/h2.jpg";
import her3 from "../images/h3.jpg";
import her4 from "../images/h4.jpg";
import her5 from "../images/h5.png";
import her6 from "../images/h6.png";
import YouTube from '@u-wave/react-youtube';
import Footer from './Footer'
import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps'
import GridLoader from "react-spinners/GridLoader";
import axios from 'axios'
import { idMaktab, url, user } from '../host/Host'
import {getNews} from '../host/Config'
import pic20 from "../images/twitter 2.png";
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  state={
    loader:true,
    news:null,
    school:null,
  region:null,
  staff:null,
spec:null,
event:null,  
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
  getStaff=()=>{
    axios.get(`${url}/staff-by-school/${idMaktab}/`).then(res=>{
      this.setState({
        staff:res.data
      })
    })
  }
  getEvent=()=>{
    axios.get(`${url}/event/${idMaktab}/`).then(res=>{
      this.setState({
        event:res.data
      })
    })
  }
  getSpec=()=>{
  axios.get(`${url}/spec/`).then(res=>{
    this.setState({
      spec:res.data
    })
  })
}
echoSpec=(id)=>{
  var s=""
  this.state.spec.map(item=>{
    if(item.id===id){
s=item.name
    }
  })
  return(s)
}
  componentDidMount() {
    this.getNews();
    this.getEvent();
    this.getSchool();
this.getStaff()
this.getSpec()
  
    }
    render() {
        const responsive1 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 6,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2,
            },
          };
          const responsive2 = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 3,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
      
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };
        return (
          <>
          {this.state.loader?<div className={style.load}>
          <GridLoader
 color="violet" loading={this.state.loader} size={40} />
          </div>: <div>
                <NavbarT/>
                <div className={style.video}>
                <video loop={true} autoPlay={true} muted={true}>
      <source src={video} type="video/mp4" />
  </video>
  </div>
  <div className={style.binaf}>
      <h1>O'zbekiston Respublikasi Namangan 
      <br/>viloyati xalq ta'limi boshqarmasi</h1>
  </div>
      <div className={style.second}>
        
<div className={style.second_item}>
    <Row>
    <Col lg={6} md={12} sm={12}>
        <p className={style.fikr}>
        {this.state.school!==null?this.state.school.m_h_o:''}
    </p>
    <p className={style.ism}>
    {this.state.school!==null?this.state.school.m_h_o_t:''}
</p>
        </Col>
    <Col lg={6} md={12} sm={12}>
            <img src= {this.state.school!==null?this.state.school.m_h_o_r:''}/>
        </Col>
    </Row>
</div>
      </div>
      <div className={style.elem}>
              <Row style={{ alignItems: "center" }}>
                <Col className={style.htr} lg={2} md={12} sm={12}>
                  <h2 className={style.colT}>
                    Bizning ijtimoiy sahifalarimiz:
                  </h2>
                </Col>

                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.telegram:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png" />
                    <p>Telegram sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.instagram:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                    <p>Instagram sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.facebook:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
                    <p>Facebook sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href="#" className={style.colT} target="_blank">
                    <img src={pic20} />
                    <p>Twitter sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.youtube:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" />
                    <p>You tube sahifasi</p>
                  </a>
                </Col>
              </Row>
            </div>

      <div className={style.items}>
      <h1 className={style.sarlavha}> Bizning afzalliklarimiz</h1>
<br/>
          <Row>
          <Col lg={3} md={6} sm={12}>
                  <div class={style.items_item}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACNCAMAAABWt7KUAAAAAXNSR0IB2cksfwAAALRQTFRFAAAARSFPSCBQRSBQQyJQRCBNRxxQRR9PQCBQSBRNRiBQQCBQUwBTRCBQQyFORhxNRSFPRCJORSBOQyBQSCRcRCBORSFORCBPRCFPPxhLRCBOQhNGRCFPRCBPRh5ORCBORCBNRCFPRCFORCBNRCFOQB1LRCFPRRtNRCFPQR1PRB9ORB9ORiJKRCBPRCBPRCBORSBOQh9MQyBOQx9NRSFORCBOQCBORCBORCBOQx9ORSBOQSFMKLn+rgAAADx0Uk5TAP8goJDAHNwwCrAQBkC+JLLk9lAEw+pvzA3+GvqtNpRnqJhNdy3aEp4XYX9C7+CGtyhUW46kR3vXitA7CUvo/AAABR1JREFUeJzt3Gt7mjAYBuBgOy0toy3Dsyhq56Haqq2t7fb//9fqNBCSF3IgAXfN59u4hN01EDB5CUI40/FicKEng914inKlH/QsnekFfXVMe6bVcsisraipTgxoLOujqqTpPhvRWNb9rYLGrxvSqHmaxjQqHrthkCPveYx27dXf8vQ2d/g4w3pP3XONd3S7kn8IlSt8oBvUdZU9uK0+7HwakoOcO0VPG+/1mFOT4Ch7qninn1o5qp4K3qeil6PoMcZR85jjJD2ChzfISXgmN1n7FsJJeIblcxKeZfkc0uOeAIf0iDyNmeYgZ423i/T7xjlo6h23D06Cg4Lj9uvT4FxKnMsGOGn5duacOXA2p8Xxn06Kw/39WDAH7bwsTeEc1F7+AHJXFgfO5Zlz5pw5BXPs+dTncObN7aVqFr/FOc5rcP+1uddaxcMVLOclu2/lZehT/2sKxw+JUcD1Jo1zm3f4fSHEmbuJnbwwhbPKqbEaIhx2ZH0HcwL6c9KhB/8BTrXG7haCnEFejUefPCwH0ljeBuL083JG3MYCNV/nM8RBD/k0LWaihuakaP4OTwL9zu/R+ptqhqFDa2gOqZmE/eWog//1WUKvTGrcv9/kGHt+Fc9JaI4j6/jq6flFcyANWuIt84I5oCa+mKvFckhNI54DCfE2u1BO8gqP+qc2vmE0Cj2VP6j+5uixo5tpAHOcakUwVbaXSecwGSU11ivEmV5IPPB4ArPlqZy9h9DszyaG47TEMfvUmcctcY41isdVD7d0hvMI7ZaVV1lOnXgMJKbwXR/ivMlymDs4h+PaP6HJ6doclcHZ936Ap3YYk2c4IfNJTuQa69AXM56jBjiVf8lpWlKnMr4zUB6sgS70ocRvid4bd9oMvk8lPJEG7AZt0V6wUuFPvsMa5LiQxvhNIk1zB2pMcyQ1hjmyGrMcaY1RjrzGJEdBY5CjooE4/cG1aILtlVYNwJErTeuEOjX5hww6G/agQppnaF6d4WQ8u8FZqWngGpr8w00XGjUs51OWw4wF5tCwnI3kUKXH9BCJX3cxVqjaKe9ArvcjU2NZDzIaqN+pNsWHtZtzjgZ7BCvBdPfKNvtsuxLXaOdAT/4r8So53Ryw+PlTuGZPM6cbjTu6Y/CS4FQQauZEN7yv/mYJeHj1jJo5uK28/cAG6+FWV+rlRG11qBKkPfxaT4hz+1041B8RtdULAjwClacspyL1ZoCbeEyI2grfqd6JjzYE6mAZTlvyrYkJ8UOUaqtk76c2NSv9nkIYH4xuq4RGjTOU5czigyXayn+fJSt6lDgXspy4OpFoK8aiynmR5YyjY0VtNWAtqhx/DRwpI0F8LM4lqVZl4Cwkrq3aLh78iu9XOjnKObHar5S2mpRTbAW3Vatpl1Oh8gpYHvb3hXI49IT3wVIaZwxaSuP4NchSGgdtaoClPA5yXnaPwDPNP1T7deacOWfOyXL8m7RA022GOfNh+nBdp84uGmCWM02rJDvEYzxmObyyy3qxHF6NRoc+f8rlWMVythxNi97BLKebvdpA571YDtpk/dp8HjOfN94Nzq/SAo0o/W83if+Go28tg9TgCte1wGf1rfSQGnwhCr2Rrm0djLREY7nQHC4TbauEpGQcjcuxPRIQbWuogAni9yGehL5+syvMENmKfZsm198h8sTMmsIxuDoRGeEr19jaTWREXtU/xtDKVmQET5xDjKz7ReSJWwhKRfeqaGTuFwpLtmlcM47IbNvsc4tS4/wBplZt8L334k4AAAAASUVORK5CYII="/>
                      <p>
                          Sifatli va samarali ta'lim tizimi
                      </p>
                  </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                  <div class={style.items_item}>
                      <img src="data:image/png;base64,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"/>
                      <p>
                      Oliy ma'lumotli va malakali ustolar jamoasi
                      </p>
                  </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                  <div class={style.items_item}>
                      <img src="data:image/png;base64,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"/>
                      <p>
                       Barcha anjomalar bilan jihozlangan maktab binosi 
                      </p>
                  </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                  <div class={style.items_item}>
                      <img src="data:image/png;base64,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"/>
                      <p>
                          Qulaysharoit va sifatli ta'lim
                      </p>
                  </div>
              </Col>
          </Row>
          <div id="rahbariyat"></div>
          
      </div>
      <div className={style.new}>
          <div className={style.back}></div>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{this.state.staff!==null && this.state.spec!==null?this.state.staff.map(item=>{
  return(<div>
    <div className={style.ustoz_item}> 
    <div>
    <img src={item.image}/>
        <h4>{item.full_name}</h4>
        <p>{this.echoSpec(item.speciality[0])}</p>
        </div>
    </div>
</div>
)
}):<div></div>}
</Carousel>
<div id="fotolar"></div>
      </div>
      <div className={style.gal}>
  <h1 className={style.sarlavha}> Fotolavhalar</h1>
<br/>
       <Row>
       <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.b_r1:''}/>
           </div>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.m_h_h1:''}/>
           </div>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.m_h_h2:''}/>
           </div>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.m_h_h3:''}/>
           </div>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.m_h_h4:''}/>
           </div>
           </Col>
           <Col lg={4} md={6} sm={12}>
           <div className={style.gal_item}>
               <img src={this.state.school!==null?this.state.school.foto5:''}/>
           </div>
           </Col>
          
       </Row>
       
   <br/>
   <br/>
   <Link to="/gallery" className={style.but}>Barchasini ko'rish</Link>
  </div>
      <div className={style.video1}>
                <video loop={true} autoPlay={true} muted={true}>
      <source src={video2} type="video/mp4" />
  </video>
  </div>
  <div className={style.binaf1}>

      <h1>Haqiqiy ta'lim odamni odamiylikka tayyorlashdir</h1>
  </div>
  <div className={style.ustoz}>
  <div id="yangilik"></div>

      <h1 className={style.sarlavha}> Yangiliklar</h1>
<br/>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{this.state.news!==null?this.state.news.map((item)=>{
    return(
    <div>
      <div className={style.new_item}> 
      <div>
      <img src={item.image}/>
          <h4>{item.title}</h4>
         <p className={style.date}><i className="fa fa-calendar"></i>{item.published_time.substring(0,10)}</p>
  
          </div>
      </div>
  </div>)
  }):<div></div>}
</Carousel>
<br/>
       <br/>
              <br/>
<Link to="/yangiliklar"  className={style.but}>Barchasini ko'rish</Link>

      </div>
      <Cards/>
           
      <div className={style.video1}>
                <video loop={true} autoPlay={true} muted={true}>
      <source src={video3} type="video/mp4" />
  </video>
  </div>
  <div className={style.binaf1}>

<h1>Hayot yo‘lida birinchi masala — maktab masalasidir</h1>
</div>
      <div className={style.videos}>
<div id="video"></div>

  <h1 className={style.sarlavha}> Videolavhalar</h1>
<br/>
      <Row>
      <Col lg={6} md={6} sm={12}>
     
              <div className={style.videos_item}>
              <YouTube
  video='5WJMIfsgQrk'                
  className={style.you}
  autoplay={true}
  muted={true}                
  />
              </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
         
              <div className={style.videos_item}>
              <YouTube
  video="ERl3IPN9l30"                
  className={style.you}
  autoplay={true}
  muted={true}                
  />
              </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
         
              <div className={style.videos_item}>
              <YouTube
  video="k6sD_RHLiVg"                
  className={style.you}
  autoplay={true}
  muted={true}                
  />
              </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
         
              <div className={style.videos_item}>
              <YouTube
  video="x3M_2IBy_Lk"                
  className={style.you}
  autoplay={true}
  muted={true}                
  />
              </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
         
              <div className={style.videos_item}>
              <YouTube
  video="-zZ54gFLkq4"                
  className={style.you}
  autoplay={true}
  muted={true}                
  />
              </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
         
              <div className={style.videos_item}>
              <YouTube
  video="Xjp5L7QvilA"                
  className={style.you}
  autoplay={true}
  muted={true}  />
              </div>
          </Col>
      </Row>
      </div>    
  
  <div className={style.tad}>
  
      <h1 className={style.sarlavha}> Tadbirlar</h1>
<br/>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={100}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{this.state.event!==null?this.state.event.map((item)=>{
    return(
    <div>
      <div className={style.tad_item}> 
      <div>
      <img src={item.image}/>
          <h4>{item.title}</h4>
         <p className={style.date}><i className="fa fa-calendar"></i>{item.date}</p>
         <p className={style.mar}><i className="fa fa-map-marker"></i>{item.address}</p>
         <p className={style.time}><i className="fa fa-clock-o"></i>{item.time}</p>
  
          </div>
      </div>
  </div>)
  }):<div></div>}
</Carousel>
<br/>    </div>
<div style={{ backgroundColor: "white", marginTop: "-30px",textAlign:'center', }} className={style.homiy}> 
          <h1 className={style.sarlavha}> Bizning hamkorlarimiz</h1>
<br/>

          <div className="sliderHomiy" style={{ backgroundColor: "white" }}>
            <Carousel
              responsive={responsive1}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              infinite={true}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                  
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://president.uz/oz" target="_blank">
                    <img src={school} />
                  </a>
                </div>
                <p >O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://www.gov.uz/uz" target="_blank">
                    <img src={her2} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasining Hukumat portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                  
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://lex.uz/" target="_blank">
                    <img src={her3} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                  
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://my.gov.uz/oz" target="_blank">
                    <img src={her4} />
                  </a>
                </div>
                <p>Interaktiv davlat xizmatlarining Yagona portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                  
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://www.uzedu.uz/" target="_blank">
                    <img src={her5} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                  
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://ittower.uz/" target="_blank">
                    <img src={her6} />
                  </a>
                </div>
                <p>IT Tower firmasi </p>
              </div>
            </Carousel>
          </div>
          <div id="bog'lanish"></div>

        </div>
        <div className={style.xarita}>

<h1 className={style.sarlavha}> Bizning manzilimiz</h1>
<br/>

<YMaps>
<div>
<Map style={{width:'100%', height:'400px'}} defaultState={{ center: [41.000630,71.669404], zoom: 12 }} >
<Clusterer
              options={{
                groupByCoordinates: false,
              }}
            >
              <Placemark
                key={-1}
                geometry={[41.000630,71.669404]}
                options={{
                  iconLayout: "default#image",
                }}
                properties={{
                  hintContent: `<h6><b className="personStyle">1 - maktab</b></h6>`,
                }}
                modules={["geoObject.addon.hint"]}
              />
            </Clusterer>
</Map>
</div>
</YMaps>
</div>
<Footer/>        
            </div>}
           
            </>
        )
    }
}
