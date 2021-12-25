import { Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import style from '../css/Hujjatlar.module.css'
import doc from "../images/doc.jpg"
import qoy from "../images/qoy.jpg"
import uzb from "../images/uzb.png"
import axios from 'axios'
import {url} from '../host/Host'
export default class Hujjatlar extends Component {
    state={
        hujjatlar:null
    }
    componentDidMount(){
        axios.get(`${url}/hujjatlar/`).then(res=>{
this.setState({hujjatlar:res.data})
        })
    }
    render() {
        return (
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
     
            
            </div>

        )
    }
}


