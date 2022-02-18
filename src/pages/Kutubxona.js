import React, { Component } from 'react'
import styles from '../css/Hujjatlar.module.css'
import style from '../css/Kutubxona.module.css'
import Footer from './Footer'
import NavbarT from './NavbarT'
import GridLoader from "react-spinners/GridLoader";
import { Col, Container, Row } from 'react-bootstrap'
import sinf1 from '../images/1sinf.png'
import sinf2 from '../images/2sinf.png'
import sinf3 from '../images/3sinf.png'
import sinf4 from '../images/4sinf.png'
import sinf5 from '../images/5sinf.png'
import sinf6 from '../images/6sinf.png'
import sinf7 from '../images/7sinf.png'
import sinf8 from '../images/8sinf.png'
import sinf9 from '../images/9sinf.png'
import sinf10 from '../images/10sinf.png'
import sinf11 from '../images/11sinf.png'
export default class Kutubxona extends Component {
    state={
        loader:true
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loader:false})
        },2000)
    }
    render() {
        return (
            <div>
                {
            this.state.loader? <div className={styles.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>:
<>
<NavbarT/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className={style.sinflar}>
    <Container>
        <Row style={{justifyContent:'center'}}>
        <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf1} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/146" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf2} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/147" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf3} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/148" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf4} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/149" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf5} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/150" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf6} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/151" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf7} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/152" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf8} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/153" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf9} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/154" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf10} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/155" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
            <Col style={{padding:'15px'}} xl={3} lg={4} md={6} sm={12}>
            <div className={style.sinf}>
<img src={sinf11} slt="..."/>
<a className={style.but} href="https://www.kitob.uz/catalog/subgenres/156" target="_blank">Kitoblarni ko'rish</a>
<br/>
            </div>
            </Col>
        </Row>
    </Container>
</div>
<br/>
<br/>

<Footer/>
</>}
            </div>
        )
    }
}
