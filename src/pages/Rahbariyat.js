import React, { Component } from "react";
import NavbarT from "./NavbarT";
import Footer from "./Footer";
import { Modal } from "antd";
import style from "../css/Rahbariyat.module.css";
import gerb from "../images/gerb.png";
import lex from "../images/h3.jpg";
import gov from "../images/h4.jpg";
import par from "../images/logo_small.png";
import xalq from "../images/logo.png";
import GridLoader from "react-spinners/GridLoader";
import axios from "axios";
import { url } from "../host/Host";

import {
  Button,
  // Card,
  Col,
  Row,
  Container,
} from "react-bootstrap";
// import Loader from "./Loader";

export default class Rahbariyat extends Component {
  state = {
    rahbariyat: null,
    timePassed: false,
    show: false,
    image: null,
    full_name: "",
    phone: "",
    email: "",
    description: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    lavozimi: "",
    daraja: 1,
    option:null,
  };
  openModal = (id) => {
    this.setState({
      show: true,
      full_name: this.state.rahbariyat[id].full_name,
      
      phone: this.state.rahbariyat[id].phone,
      email: this.state.rahbariyat[id].email,
      description: this.state.rahbariyat[id].description,
      image: this.state.rahbariyat[id].image,
      lavozimi: this.state.rahbariyat[id].spec,
    });
  };
  closeModal = () => {
    this.setState({
      show: false,
      full_name: "",
      phone: "",
      email: "",
      description: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      image: null,
      lavozimi: "",
    });
  };
  echoOptions = (a) => {
    var g = "";
    this.state.options.map((item) => {
      if (item.id === a) {
        g = item.name;
      }
    });
    return g;
  };
  getSpec = () => {
    axios.get(`${url}/speciality/`)
      .then((res) => {
        this.setState({ options: res.data, timePassed:true });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
   
    this.getRahbariyat();
  }

  getRahbariyat = () => {
    axios.get(`${url}/rahbariyat/`).then((res) => {
      this.setState({
        rahbariyat: res.data,
       
      });
      this.getSpec()
    });
  };
  render() {
    return (
      <div>
        {this.state.timePassed === false ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div className={style.rahbariyat}>
            <NavbarT />
            <div>
              <div className={style.head}>
                {/* <div className={style.head_text}>
                O'zbekiston Respublikasi Namangan 
      viloyati xalq ta'limi boshqarmasining rahbariyat a'zolari
                </div> */}
              </div>
              <div className={style.rahbariyatTitle}>
                <h3>Rahbariyat</h3>
              </div>
              <div className={style.line}></div>
              <div className={style.rahbariyatBody}>
                <Container fluid>
                  <Row>
                    <Col lg={9} sm={12}>
                      <Row>
                        {this.state.rahbariyat !== null
                          ? this.state.rahbariyat.map((item, key) => {
                              return (
                                <Col lg={12} md={12} sm={12}>
                                  <div className={style.card}>
                                    <Row>
                                      <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                        <img src={item.image} alt="" />
                                      </Col>
                                      <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                        <div className={style.cardBody}>
                                          <h4>{this.echoOptions(item.spec)}</h4>
                                          <h4>{item.full_name}</h4>
                                          <h6>
                                            <b>Qabul kunlari:</b> {item.qabul}
                                          </h6>
                                          <h6>
                                            <b>Telefon:</b>
                                            {item.phone}
                                          </h6>
                                          <h6>
                                            <b>Email:</b> {item.email}
                                          </h6>
                                          <div className={style.cardBodyBtn}>
                                            <Button
                                              style={{
                                                backgroundColor: "#1105e6",
                                                borderRadius: "none",
                                              }}
                                              onClick={() =>
                                                this.openModal(key)
                                              }
                                              className={style.btn}
                                            >
                                              Batafsil
                                            </Button>
                                          </div>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </Col>
                              );
                            })
                          : ""}
                      </Row>
                    </Col>
                    <Col lg={3} sm={12}>
                      <div className={style.saytlar}>
                        <ul>
                          <li>
                            <img src={gerb} />
                            <a href="https://president.uz/uz" target="_blank">
                              O'zbekiston Respublikasi prezidentining veb sayti
                            </a>
                          </li>
                          <li>
                            <img src={lex} />
                            <a href="https://lex.uz/" target="_blank">
                              O'zbekiston Respublikasi Qonunchilik ma'lumotlari
                              milliy bazasi
                            </a>
                          </li>

                          <li>
                            <img src={xalq} />
                            <a href="https://uzedu.uz/oz" target="_blank">
                              O'zbekiston Respublikasi Xalq ta'limi veb sayti
                            </a>
                          </li>
                          {/* <li><img src={gerb}/><a href="https://dtm.uz/" target="_blank">O'zbekiston Respublikasi vazirlar mahamasi huzuridagi Davlat text markazi veb sayti</a></li> */}
                          <li>
                            <img src={gov} />
                            <a href="https://my.gov.uz/oz" target="_blank">
                              Yagona interaktiv davlat xizmatlari portali
                            </a>
                          </li>
                          <li>
                            <img src={gerb} />
                            <a href="https://xorazm.uz/" target="_blank">
                              O'zbekiston Respublikasi Xorazm viloyat hokimligi
                              veb sayti
                            </a>
                          </li>
                          {/* <li><img src={gerb}/><a href="https://piima.uz/" target="_blank">O'zbekiston Respublikasi prezident, ijod va ixtisoslashtirilgan maktablarni rivojlantirish agentligi</a></li> */}
                          <li>
                            <img src={par} />
                            <a
                              href="https://parliament.gov.uz/uz/"
                              target="_blank"
                            >
                              O'zbekiston Respublikasi Oliy majlis qonunchilik
                              palatasi
                            </a>
                          </li>
                          {/* <li><a href="#" target="_blank"><img src={gerb}/>O'zbekiston Respublikasi prezidentining veb sayti</a></li> */}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <Modal
              width="100%"
              title="Rahbar haqida ma'lumotlar"
              // centered
              onCancel={() => this.closeModal()}
              zIndex="6524"
              centered
              footer={
                <Button variant="primary" onClick={() => this.closeModal()}>
                  Yopish
                </Button>
              }
              visible={this.state.show}
            >
              <Row>
                <Col md={4} style={{ minHeight: "320px" }}>
                  <img
                    src={this.state.image}
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col
                  md={8}
                  className={style.modalBody}
                  style={{ minHeight: "320px" }}
                >
                  <p style={{ textAlign: "center", marginBottom: "0" }}>
                    {this.echoOptions(this.state.lavozimi)}
                  </p>
                  <p style={{ textAlign: "center" }}>{this.state.full_name}</p>
                  <p>
                   
                    <p>{this.state.description}</p>
                    
                  </p>
                </Col>
              </Row>
            </Modal>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
