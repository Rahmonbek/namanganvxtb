import { Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Hujjatlar.module.css'
import doc from "../images/doc.jpg"
import qoy from "../images/qoy.jpg"
import uzb from "../images/uzb.png"
import axios from 'axios'
import {url} from '../host/Host'
import Footer from './Footer'
import NavbarT from './NavbarT'
import GridLoader from "react-spinners/GridLoader";

export default class HujjatV extends Component {
    state={
        hujjatlar:null, loader:true,
        type:[{type:1, nom:"Ta'limga oid qonunlar"},
        {type:2, nom:"Prezident farmonlari, farmoyishlari va qarorlari"},
        {type:3, nom:"O`quvchilar uchun qarorlar"},
        {type:4, nom:"Xalq ta'limi vazirligi Hay'at qarorlari "},
        {type:5, nom:"Xalq ta'limi vazirligi me'yoriy hujjatlari "},
        {type:6, nom:"O'z kuchini yo'qotgan me'yoriy-huquqiy hujjatlar"},
        {type:7, nom:"Me'yoriy hujjatlar loyihalari "},
        {type:8, nom:"Ta'limga oid normativ-huquqiy hujjatlar"},
        {type:9, nom:"Vazirlik ishtirokidagi Xalqaro shartnomalar"},
        {type:10, nom:"Davlat tiliga oid normativ-huquqiy hujjatlar"},],
    }
    componentDidMount(){
        axios.get(`${url}/hujjatlar/`).then(res=>{
this.setState({hujjatlar:res.data, loader:false})
        })
    }
    render() {
        return (<>{
            this.state.loader? <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>:
<>
<NavbarT/>
<div className={style.head}>
<h1 className={style.sarlavha}>{this.state.type[10-1].nom}</h1>
              
              </div>   <br/><br/> 
            <div className={style.hujjat}>
              
                <Row className={style.rowT}>

              
                    {
                        this.state.hujjatlar!==null?this.state.hujjatlar.map(item=>{
                            if(item.type===10){
                                return(
                                    <Col lg={6} md={12} className={style.colT} style={{marginTop:'20px'}} sm={12}>
                                    <a className={style.ss} href={item.link} target="_blank">
                                    <Row>
                                        <Col lg={3}><img src={doc} /></Col>
                                        <Col lg={9} style={{display:'flex', alignItems:'center'}}><h1>
                                    
                                        {item.title}</h1></Col>
                                    
                                    </Row></a>
                                                        </Col>
                                )
                            }
                            
                        }):''
                    }


                </Row>
            
                <br/><br/>            
            
            
            </div>
            <Footer/>
          
</>
        }
            </>

        )
    }
}


