import React, { Component } from "react";
import style from "../css/Dashboard.module.css";
import styled from "../css/Darslar.module.css";
import styles from "../css/Gallery.module.css";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import word from "../images/word.png"
import excel from "../images/excel.png"
import power from "../images/power.png"
import pdf from "../images/pdf.png"
import file from "../images/file.png"
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";
import NavbarA from "./NavbarA";
import { Collapse } from "antd";
import Footer from "./Footer";

const { Panel } = Collapse;

export default class Loyihalar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    tumanlar:null,
    raqam:"0",
  };

  componentDidMount() {
    this.getNews();
    
    axios.get(`${url}/regions/`).then(res=>{
      this.setState({tumanlar:res.data, timePassed:true})
    }) 
   

  }
  download=(id)=>{
    this.setState({loader:true})
    var b=this.state.news[id]
    b.download+=1
    axios.patch(`${url}/projects/${b.id}/`, {download:b.download}).then(res=>{console.log(res)})
this.getNews()
  }
  getNews = () => {
    axios.get(`${url}/boshqarma`).then(res=>{
      this.setState({
        school:res.data[0]
      })
      axios.get(`${url}/projects/`).then((res) => {
        this.setState({
          news: res.data.reverse(),
          
        });
        setTimeout(()=>{
          this.setState({loader:false})
        },1000)
      })});  
      
 
   
  };
 getTuman=(id)=>{
var a=[]
var b=this.state.news
for(let i=0; i<b.length; i++){
  if (b[i].region===id){
    a.push(b[i])
  }
}
return(a)
 }
  render() {
    return (
      <>
        {this.state.loader ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div>
            <NavbarA />
            <div className={style.video}>
              <video loop={true} autoPlay={true} muted={true}>
                <source src={this.state.school!==null?this.state.school.video1:''} type="video/mp4" />
              </video>
            </div>

            <div className={style.binaf}></div>
            <div className={styles.newsY}>
              <Collapse accordion defaultActiveKey={[this.state.raqam]}>
              <Panel className={styled.panel} header="Namangan viloyati">
                          <div>
                            <Container>
                         <Row>
                           {this.getTuman(null).length!==0?this.getTuman(null).map((item,key)=>{
                             return( <Col lg={6} md={12} className={styled.colT} style={{marginTop:'20px'}} sm={12}>
                             <div className={styled.ss}>
                               <div className={styled.bag}><i className="fa fa-download"></i>  {item.download===null?0:item.download}</div>
                             <Row>
                            
                                 <Col lg={3}><img src={item.file.indexOf(".ppt")!==-1?power:(item.file.indexOf(".doc")!==-1?word:(item.file.indexOf(".xls")!==-1?excel:(item.file.indexOf(".pdf")!==-1?pdf:(file))))} /></Col>
                                 <Col lg={9}
                                  style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column'}}><h1 style={{textAlign:'left'}}>
                                                                    {item.name}</h1>
                                 <a className={styled.but} onClick={()=>{this.download(key)}} href={item.file} target="_blank">Yuklab olish</a>

                                 </Col>
                             
                             </Row></div>
                             </Col>           
                             )
                           }):<h1 className={styled.HT}><i className="fa fa-folder-open"></i> Loyiha mavjud emas!!!</h1>}
                                            
                         </Row>
                            </Container>
                          </div>
                        </Panel>
                {this.state.tumanlar !== null
                  ? this.state.tumanlar.map((item1) => {
                      return (
                        <Panel className={styled.panel} header={item1.name}>
                          <div>
                            <Container>
                         <Row>
                         {this.getTuman(item1.id).length!==0?this.getTuman(item1.id).map((item,key)=>{
                             return( <Col lg={6} md={12} className={styled.colT} style={{marginTop:'20px'}} sm={12}>
                             <div className={styled.ss}>
                               <div className={styled.bag}><i className="fa fa-download"></i>  {item.download===null?0:item.download}</div>
                             <Row>
                            
                                 <Col lg={3}><img src={item.file.indexOf(".ppt")!==-1?power:(item.file.indexOf(".doc")!==-1?word:(item.file.indexOf(".xls")!==-1?excel:(item.file.indexOf(".pdf")!==-1?pdf:(file))))} /></Col>
                                 <Col lg={9}
                                  style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column'}}><h1 style={{textAlign:'left'}}>
                                                                    {item.name}</h1>
                                 <a className={styled.but} onClick={()=>{this.download(key)}} href={item.file} target="_blank">Yuklab olish</a>

                                 </Col>
                             
                             </Row></div>
                             </Col>           
                             )
                           }):<h1 className={styled.HT}><i className="fa fa-folder-open"></i> Loyiha mavjud emas!!!</h1>}
                                                  
                                                        
                         </Row>
                            </Container>
                          </div>
                        </Panel>
                      );
                    })
                  : ""}
              </Collapse>
            </div>
            <Footer />
          </div>
        )}
      </>
    );
  }
}
