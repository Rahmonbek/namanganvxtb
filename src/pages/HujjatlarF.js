import { Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Hujjatlar.module.css'

import uzb from "../images/uzb.png"
import axios from 'axios'
import {url} from '../host/Host'
import NavbarT from './NavbarT'
import Footer from './Footer'
import GridLoader from "react-spinners/GridLoader";

export default class HujjatlarF extends Component {
    state={
        hujjatlar:null,loader:true
    }
    componentDidMount(){
        axios.get(`${url}/hujjatlar/`).then(res=>{
this.setState({hujjatlar:res.data, loader:false})
        })
    }
    render() {
        return (

            <>
            {
                this.state.loader? <div className={style.load}>
                <GridLoader color="violet" loading={this.state.loader} size={40} />
              </div>:<>
              <NavbarT/>
             <br/><br/>    <br/><br/> 
            <div className={style.hujjat}>
               
                <h1 className={style.sarlavha}>Prezident farmonlari, farmoyishlari va qarorlari</h1>
                <Row className={style.rowT}>

               
{
                        this.state.hujjatlar!==null?this.state.hujjatlar.map(item=>{
                            if(item.type===2){
                                return(
                                    <Col lg={6} md={12} className={style.colT} style={{marginTop:'20px'}} sm={12}>
                                    <a className={style.ss} href={item.link} target="_blank">
                                    <Row>
                                        <Col lg={3}><img src={uzb} /></Col>
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


