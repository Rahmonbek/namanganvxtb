import { Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Darslar.module.css'


import word from "../images/word.png"
import excel from "../images/excel.png"
import power from "../images/power.png"
import pdf from "../images/pdf.png"
import file from "../images/file.png"
import axios from 'axios'
import {url} from '../host/Host'
import NavbarT from './NavbarT'
import Footer from './Footer'
import GridLoader from "react-spinners/GridLoader";

export default class Darslar extends Component {
    state={
        hujjatlar:null,loader:true
    }
    componentDidMount(){
        axios.get(`${url}/presentations/`).then(res=>{
            
            
            console.log(res.data)
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
              <div className={style.head}>
               
              <h1 className={style.sarlavha}>Dars ishlanmalar</h1>
              </div>
             <br/><br/>  
            <div className={style.hujjat}>
              
                <Row>

               
{
                        this.state.hujjatlar!==null?this.state.hujjatlar.map(item=>{
                           
                                return(
                                    <Col lg={6} md={12} className={style.colT} style={{marginTop:'20px'}} sm={12}>
                                    <div className={style.ss}>
                                    <Row>
                                   
                                        <Col lg={3}><img src={item.file.indexOf(".ppt")!==-1?power:(item.file.indexOf(".doc")!==-1?word:(item.file.indexOf(".xls")!==-1?excel:(item.file.indexOf(".pdf")!==-1?pdf:(file))))} /></Col>
                                        <Col lg={9}
                                         style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column'}}><h1>
                                   
                                        {item.name}</h1>
                                        <a className={style.but} href={item.file} target="_blank">Yuklab olish</a>

                                        </Col>
                                    
                                    </Row></div>
                                                        </Col>
                                )
                         
                            
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


