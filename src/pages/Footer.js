
import axios from 'axios'
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import style from '../css/Footer.module.css'
import { url, user } from '../host/Host'
import logo from '../images/logo.jpg'
export default class Footer extends Component {
    state={
        school:null
    }
    getSchool = () => {
        axios.get(`${url}/school-by-admin/${user}`).then((res) => {
          this.setState({
            school: res.data,
           
          })
       }).catch(err=>{console.log(err)})}
    componentDidMount(){
        this.getSchool()
    }
        render() {
        return (
            <div className={style.foot}>
                <Row>
                <Col lg={4} md={12} sm={12}>
                <ul>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#">Bosh sahifa</a>
                            </li>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#fotolar">Foto lavhalar</a>
                            </li>
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#yangilik">Yangiliklar</a>
                            </li>
                         
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#video">Video lavhalar</a>
                            </li>
                           
                            <li>
                                <a className={style.lik} activeStyle={{color:"gold"}} href="#bog'lanish">Bog'lanish</a>
                            </li>
                        </ul>
                </Col>
                        <Col className={style.colImg} lg={4} md={12} sm={12}>
                        <img src={logo}/>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <p><b>Ishonch telefonlari : </b>{this.state.school!==null?this.state.school.phone:''}<br/>
                       </p>
                        <p><b>Email : </b>{this.state.school!==null?this.state.school.email:''}</p>
                        <p><b>Manzil : </b>{this.state.school!==null?this.state.school.address:''}</p>
                        <div className={style.icons}>
                        <a href={this.state.school!==null?this.state.school.telegram:''}>
                                <i className="fa fa-telegram"></i>
                            </a>
                            <a href={this.state.school!==null?this.state.school.instagra:''}>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href={this.state.school!==null?this.state.school.youtube:''}>
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a href={this.state.school!==null?this.state.school.facebook:''}>
                                <i className="fa fa-facebook"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}