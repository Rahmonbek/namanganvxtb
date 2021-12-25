import axios from "axios";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
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
                <a
                  className={style.lik}
                  activeStyle={{ color: "gold" }}
                  href="#"
                >
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  className={style.lik}
                  activeStyle={{ color: "gold" }}
                  href="#fotolar"
                >
                  Foto lavhalar
                </a>
              </li>
              <li>
                <a
                  className={style.lik}
                  activeStyle={{ color: "gold" }}
                  href="#yangilik"
                >
                  Yangiliklar
                </a>
              </li>

              <li>
                <a
                  className={style.lik}
                  activeStyle={{ color: "gold" }}
                  href="#video"
                >
                  Video lavhalar
                </a>
              </li>

              <li>
                <a
                  className={style.lik}
                  activeStyle={{ color: "gold" }}
                  href="#bog'lanish"
                >
                  Bog'lanish
                </a>
              </li>
            </ul>
          </Col>
          <Col className={style.colImg} lg={4} md={12} sm={12}>
            <img src={logo} />
          </Col>
          <Col lg={4} md={12} sm={12}>
            <p>
              <b>Ishonch telefonlari : </b>{this.state.boshqarma!==null?this.state.boshqarma.phone:''}
              <br />
            </p>
            <p>
              <b>Email : </b>{this.state.boshqarma!==null?this.state.boshqarma.email:''}
            </p>
            <p>
              <b>Manzil : </b>{this.state.boshqarma!==null?this.state.boshqarma.manzil:''}
            </p>
            <div className={style.icons}>
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.telegram:''}>
                <i className="fa fa-telegram"></i>
              </a>
              <a
                target="_blank"
                href={this.state.boshqarma!==null?this.state.boshqarma.instagram:''}
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                target="_blank"
                href={this.state.boshqarma!==null?this.state.boshqarma.youtube:''}
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a target="_blank" href={this.state.boshqarma!==null?this.state.boshqarma.facebook:''}>
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
