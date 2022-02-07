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

export default class HujjatlarT extends Component {
    state={
        hujjatlar:null, loader:true
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
              <br/><br/>    <br/><br/> 
            <div className={style.hujjat}>
              
                <h1 className={style.sarlavha}>Ta'limga oid qonunlar</h1>
                <Row className={style.rowT}>

              
                    {
                        this.state.hujjatlar!==null?this.state.hujjatlar.map(item=>{
                            if(item.type===1){
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


