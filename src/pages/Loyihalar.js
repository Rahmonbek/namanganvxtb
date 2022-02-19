import React, { Component } from "react";
import { message, Collapse } from "antd";

import style from "../css/Dashboard.module.css";
import styled from "../css/Darslar.module.css";
import styles from "../css/Gallery.module.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
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
import Footer from "./Footer";

const { Panel } = Collapse;

export default class Loyihalar extends Component {
  state = {
    loader: true,
    news: null,
    school: null,
    tumanlar:null,
    showComment:false,
    showCommentT:false,
    raqam:"0",
    comments:[],
    id:null
  };

  componentDidMount() {
    this.getNews();
    
    axios.get(`${url}/regions/`).then(res=>{
      this.setState({tumanlar:res.data, timePassed:true})
    }) 
   

  }

  handleClose=()=>{
    this.setState({
      showComment:false
    })
  }
  openModal=(id)=>{
    this.setState({
   showComment:true,
comments:this.numberComment(id)
    })


  }
addComment=()=>{
var name=document.getElementById('name').value
var email=document.getElementById('email').value
var comment=document.getElementById('comment').value

var config={
  name,
  email,
  comment,
  project:this.state.id
}
if(name.length!==0 && email.length!==0 && comment.length!==0){
  axios.post(`${url}/comments/`, config).then(res=>{
    this.handleCloseT()
    this.getNews();
    console.log('qoshildi')
    message.success({content:"Izoh qo'shildi",
    style: {
      position:'fixed',
      bottom:'20px',
      left:'20px',
      zIndex:'5432',
      color:'rgb(53, 15, 89)'
    },
  duration:3})
    
  }).catch(err=>{
   
  
    console.log('qoshilmadi')
    message.error({content:"Siz bu loyiha uchun izoh qoldirgansiz",
      style: {
      position:'fixed',
      bottom:'20px',
      left:'20px',
      zIndex:'5432',
      color:'rgb(53, 15, 89)'
    },
  duration:3})
    
  })
}else{
 
  message.error({content:"Iltimos so'ralgan barcha ma'lumotlarni kiriting",
  style: {
      position:'fixed',
      bottom:'20px',
      left:'20px',
      zIndex:'5432',
      color:'rgb(53, 15, 89)'
      
    },
duration:3})
 
}
}
numberComment=(id)=>{
  var a=this.state.comments
  var b=[]
  for(let i=0; i<a.length; i++){
if(a[i].project===id){
  b.push(a[i])
}
  }
  return(b)
}
  handleCloseT=()=>{
    this.setState({
      showCommentT:false
    })
  }
  openModalT=(id)=>{

    this.setState({
      showCommentT:true,
      id:id
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
       
    
      
          axios.get(`${url}/comments/`).then(res1=>{
       this.setState({
            
              comments:res1.data,
            })
          })
            
        
        this.setState({
          news: res.data.reverse(),
          loader:false
        });
        setTimeout(()=>{
         
          console.log(this.state.comments, this.state.news)
        },2000)
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
          <div className="loyiha">
            <NavbarA />
            <div className={style.video}>
              <video loop={true} autoPlay={true} muted={true}>
                <source src={this.state.school!==null?this.state.school.video1:''} type="video/mp4" />
              </video>
            </div>

            <div className={style.binaf}></div>
            <div className={styles.newsY}>
            <h1 className={style.sarlavha}>Namangan viloyati xalq ta’limi tizimini 2022 yilda rivojlantirish dasturi</h1><br/><br/>
              <Collapse accordion defaultActiveKey={[this.state.raqam]}>
              <Panel className={styled.panel} header="Namangan viloyati">
                          <div>
                            <Container>
                         <Row>
                           {this.getTuman(null).length!==0?this.getTuman(null).map((item,key)=>{
                             return( <Col lg={6} md={12} className={styled.colT} style={{marginTop:'20px'}} sm={12}>
                             <div className={styled.ss}>
                             <div className={styled.bag1}  onClick={()=>{this.openModal(item.id)}} ><i className="fa fa-comments"></i>  {this.numberComment(item.id).length}</div>
                               <div className={styled.bag}><i className="fa fa-download"></i>  {item.download===null?0:item.download}</div>
                             <Row>
                            
                                 <Col lg={3}><img src={item.file.indexOf(".ppt")!==-1?power:(item.file.indexOf(".doc")!==-1?word:(item.file.indexOf(".xls")!==-1?excel:(item.file.indexOf(".pdf")!==-1?pdf:(file))))} /></Col>
                                 <Col lg={9}
                                  style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column'}}><h1 style={{textAlign:'left'}}>
                                                                    {item.name}</h1>
                                                                  </Col>

                             </Row>
                             <br/>

                            <div className={styled.butlar}>
                            <buttun onClick={()=>{this.openModalT(item.id)}}  className={styled.but1}>Izoh qoldirish</buttun>

<a className={styled.but} onClick={()=>{this.download(key)}} href={item.file} target="_blank">Yuklab olish</a>

                              </div> 
                  

                             </div>
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
                             <div className={styled.bag1} onClick={()=>{this.openModal(item.id)}}><i className="fa fa-comments"></i>   {this.numberComment(item.id).length}</div>
                            
                               <div className={styled.bag}><i className="fa fa-download"></i>  {item.download===null?0:item.download}</div>
                             <Row>
                            
                                 <Col lg={3}><img src={item.file.indexOf(".ppt")!==-1?power:(item.file.indexOf(".doc")!==-1?word:(item.file.indexOf(".xls")!==-1?excel:(item.file.indexOf(".pdf")!==-1?pdf:(file))))} /></Col>
                                 <Col lg={9}
                                  style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column'}}><h1 style={{textAlign:'left'}}>
                                                                    {item.name}</h1>
                                </Col>
                             
                             </Row>
                             <br/>

<div className={styled.butlar}>
<buttun onClick={()=>{this.openModalT(item.id)}}   className={styled.but1}>Izoh qoldirish</buttun>

<a className={styled.but} onClick={()=>{this.download(key)}} href={item.file} target="_blank">Yuklab olish</a>

  </div> 
                             </div>
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
            <Modal style={{zIndex:'4789'}} show={this.state.showComment} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={style.sarlavha}>Foydalanuvchilarning fikrlari</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className="comments">
  {this.state.comments!==null && this.state.comments.length!==0?
this.state.comments.map(item=>{
  return(<div className="comment mt-4 text-justify float-left"> <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
  <h4>{item.name}</h4> <br/><span>{item.date_created}</span> <br/>
  <p>{item.comment}</p>
</div>)
}):<h6 style={{textAlign:'center'}}>Izoh mavjud emas!!!</h6>}


</div>
        </Modal.Body>
     
      </Modal>
      <Modal style={{zIndex:'4789'}} show={this.state.showCommentT} onHide={this.handleCloseT}>
        <Modal.Header closeButton>
          <Modal.Title className={style.sarlavha}>Fikringiz biz uchun muhim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className="comments">
<form id="algin-form">
                    <div className="form-group">
                        <label for="message">Izohni yozing</label> <textarea name="msg" id="comment" msg cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group"> <label for="name">Ism familiyani yozing</label> <input required type="text" name="name" id="name" className="form-control"/> </div>
                    <div className="form-group"> <label for="email">Emailni yozing</label> <input required type="text" name="email" id="email" className="form-control"/> </div>
                  <div className="form-group"> <button type="button" id="post" onClick={this.addComment} className="btn">Yuborish</button> </div>
                </form>
</div>
        </Modal.Body>
       
      </Modal>
            <Footer />
          </div>
        )}
      </>
    );
  }
}
