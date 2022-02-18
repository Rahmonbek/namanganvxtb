import axios from "axios";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "../css/Footer.module.css";
import { url } from "../host/Host";
import logo from "../images/logo.png";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      boshqarma:null
    };
  }
  componentDidMount() {
   axios.get(`${url}/boshqarma`).then(res=>{
     this.setState({
boshqarma:res.data[0],


    })
   })
  }
  render() {
    return (
      <div className={style.foot}>
        <Row>
        <Col lg={4} md={12} sm={12}>
            <ul>
              <li>
                 <NavLink className={style.lik} to="/rahbariyat">Rahbariyat</NavLink>
              </li>
              <li>
                 <NavLink className={style.lik} to="/yangiliklar/0">Yangiliklar</NavLink>
              </li>
              <li>
                 <NavLink className={style.lik} to="/tumanlar">Tumanlar</NavLink>
              </li>

              <li>
              <NavLink className={style.lik} to="/talim">Ta'limga oid qonunlar</NavLink>
              </li>

              <li>
              <NavLink className={style.lik} to="/farmon">Prezident farmonlari</NavLink>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <ul>
              <li>
              <NavLink className={style.lik} to="/oquvchi">O`quvchilar uchun qonunlar</NavLink>
              </li>
              <li>
              <NavLink className={style.lik} to="/ishlanma">Dars ishlanmalar</NavLink>
              </li>
              <li>
              <NavLink className={style.lik} to="/kutubxona">Elektron kutubxona</NavLink>
              </li>

              <li>
              <NavLink className={style.lik} to="/maktablar">Xarita</NavLink>
              </li>

              <li>
              <NavLink className={style.lik} to="/boglanish">Bog'lanish</NavLink>
              </li>
            </ul>
          </Col>
          {/* <Col className={style.colImg} lg={3} md={12} sm={12}>
            <img src={logo} />
          </Col> */}
          <Col lg={4} md={12} sm={12}>
            <p>
              <b>Ishonch telefonlari : </b>{this.state.boshqarma!==null?this.state.boshqarma.phone:''}
              <br />
            </p>
            <p>
              <b>Email manzili: </b>{this.state.boshqarma!==null?this.state.boshqarma.email:''}
            </p>
            <p>
              <b>Ехаt manzili: </b>namangan_vxtb@exat.uz
            </p>
             
            <p>
              <b>Manzil : </b>{this.state.boshqarma!==null?this.state.boshqarma.manzil:''}
            </p>
           
          </Col>
        </Row>
        <div className={style.icons}>
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.telegram:''}>
                <i className="fa fa-telegram"></i>
              </a>
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.instagram:''}
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.youtube:''}
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a target="_blank" href={`tel: ${this.state.boshqarma!==null?this.state.boshqarma.phone:''}`}
              >
                <i className="fa fa-phone"></i>
              </a>
              <a target="_blank" href={`mailto: ${this.state.boshqarma!==null?this.state.boshqarma.email:''}`}
              >
                <i className="fa fa-envelope"></i>
              </a>
            
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.facebook:''}>
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <p className={style.g}>Sayt muallifi: <a href="http://ittower.uz/">IT TOWER MCHJ</a></p>
      </div>
    );
  }
}
