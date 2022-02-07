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

export default class HujjatlarO extends Component {
    state={
        hujjatlar:null, loader:true,
    }
    componentDidMount(){
        axios.get(`${url}/hujjatlar/`).then(res=>{
this.setState({hujjatlar:res.data, loader:false})
        })
    }
    render() {
        return (
            
            <>
            { this.state.loader? <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>:<>
          <NavbarT/>
            <br/><br/>    <br/><br/> 
            <div className={style.hujjat}>
              
                <h1 className={style.sarlavha}>O`quvchilar uchun</h1>
                <Row>


{
                        this.state.hujjatlar!==null?this.state.hujjatlar.map(item=>{
                            if(item.type===3){
                                return(
                                    <Col lg={12} md={12} className={style.colT} style={{marginTop:'20px', borderRight:"none"}} sm={12}>
<a className={style.ss} href={item.link} target="_blank">
<Row>
    <Col lg={3} style={{display:'flex', justifyContent:'center'}}><img style={{width:'75%'}} src={qoy} /></Col>
    <Col lg={9} style={{display:'flex', alignItems:'center'}}><h1 style={{ width:'100%'}}>
   {item.title}
</h1></Col>

</Row></a>                    </Col>

                                )
                            }
                            
                        }):''
                    }
                </Row>
                <br/><br/>            
              
            
            </div>
<Footer/>
          </>}
           
</>
        )
    }
}


