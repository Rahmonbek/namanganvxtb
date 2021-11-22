import React, { Component } from "react";
import NavbarT from "./NavbarT";
import Footer from "./Footer";
import { Modal } from "antd";
import style from "../css/Rahbariyat.module.css";
import rahbar from "../images/Xudoyberganov.png";
import gozal from "../images/gozal.png";
import axmedov from "../images/axmedov.png";
import sapayev from "../images/sapayev.jpg";
import matyoqubov from "../images/matyoqubov.png";
import abdurahmonov from "../images/abdurahmonov.png";
import gerb from "../images/gerb.png";
import lex from "../images/h3.jpg";
import gov from "../images/h4.jpg";
import par from "../images/logo_small.png";
import xalq from "../images/logo.png";
import GridLoader from "react-spinners/GridLoader";
import rustambek from "../images/rustambek.jpg";
import tohirjon from "../images/tohirjon.jpg";
import muzaffar from "../images/muzaffar.png";
import xayrullo from "../images/xayrullo.jpg";

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
    timePassed: false,
    show: false,
    image: null,
    fullName: "",
    phone: "",
    email: "",
    describe: "",
    describe1: "",
    describe2: "",
    describe3: "",
    describe4: "",
    describe5: "",
    describe6: "",
    lavozimi: "",
    daraja: 1,
  };
  openModal = (id) => {
    this.setState({
      show: true,
      fullName: this.state.rahbariyat[id].fullName,
      phone: this.state.rahbariyat[id].phone,
      email: this.state.rahbariyat[id].email,
      describe: this.state.rahbariyat[id].describe,
      describe1: this.state.rahbariyat[id].describe1,
      describe2: this.state.rahbariyat[id].describe2,
      describe3: this.state.rahbariyat[id].describe3,
      describe4: this.state.rahbariyat[id].describe4,
      describe5: this.state.rahbariyat[id].describe5,
      describe6: this.state.rahbariyat[id].describe6,
      image: this.state.rahbariyat[id].image,
      lavozimi: this.state.rahbariyat[id].lavozimi,
    });
  };
  closeModal = () => {
    this.setState({
      show: false,
      fullName: "",
      phone: "",
      email: "",
      describe: "",
      describe1: "",
      describe2: "",
      describe3: "",
      describe4: "",
      describe5: "",
      describe6: "",
      image: null,
      lavozimi: "",
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2500);
  }
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
                        <Col lg={12} md={12} sm={12}>
                          <div className={style.card}>
                            <Row>
                              <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                <img src={rustambek} alt="" />
                              </Col>
                              <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                <div className={style.cardBody}>
                                  <h4>Boshqarma boshlig'i</h4>
                                  <h4>Israilov Rustambek Ibragimovich</h4>
                                  <h6>
                                    <b>Qabul:</b> 09:00-16:00
                                  </h6>
                                  <h6>
                                    <b>Telefon:</b>+998 69 232-61-15
                                  </h6>
                                  <h6>
                                    <b>Email:</b> namangan_vxtb@xtv.uz
                                  </h6>
                                  <div className={style.cardBodyBtn}>
                                    <Button
                                      style={{
                                        backgroundColor: "#1105e6",
                                        borderRadius: "none",
                                      }}
                                      // onClick={() =>
                                      //   this.openModal(key)
                                      // }
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
                        <Col lg={12} md={12} sm={12}>
                          <div className={style.card}>
                            <Row>
                              <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                <img src={muzaffar} alt="" />
                              </Col>
                              <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                <div className={style.cardBody}>
                                  <h4>
                                    Boshqarma boshlig'i birinchi o'rinbosari
                                  </h4>
                                  <h4>Isayev Muzaffar Qahramonovich</h4>
                                  <h6>
                                    <b>Qabul:</b> 09:00-16:00
                                  </h6>
                                  <h6>
                                    <b>Telefon:</b>+998 69 232-61-15
                                  </h6>
                                  <h6>
                                    <b>Email:</b> namangan_vxtb@xtv.uz
                                  </h6>
                                  <div className={style.cardBodyBtn}>
                                    <Button
                                      style={{
                                        backgroundColor: "#1105e6",
                                        borderRadius: "none",
                                      }}
                                      // onClick={() =>
                                      //   this.openModal(key)
                                      // }
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
                        <Col lg={12} md={12} sm={12}>
                          <div className={style.card}>
                            <Row>
                              <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                <img src={xayrullo} alt="" />
                              </Col>
                              <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                <div className={style.cardBody}>
                                  <h4>Boshqarma boshlig'i o'rinbosari</h4>
                                  <h4>Abdurahmonov Xayrullo Abdurasulovich</h4>
                                  <h6>
                                    <b>Qabul:</b> 09:00-16:00
                                  </h6>
                                  <h6>
                                    <b>Telefon:</b>+998 69 232-61-15
                                  </h6>
                                  <h6>
                                    <b>Email:</b> namangan_vxtb@xtv.uz
                                  </h6>
                                  <div className={style.cardBodyBtn}>
                                    <Button
                                      style={{
                                        backgroundColor: "#1105e6",
                                        borderRadius: "none",
                                      }}
                                      // onClick={() =>
                                      //   this.openModal(key)
                                      // }
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
                        <Col lg={12} md={12} sm={12}>
                          <div className={style.card}>
                            <Row>
                              <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                <img src={tohirjon} alt="" />
                              </Col>
                              <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                <div className={style.cardBody}>
                                  <h4>Boshqarma boshlig'i o'rinbosari</h4>
                                  <h4>Qirg'izov Tohirjon Foziljonovich</h4>
                                  <h6>
                                    <b>Qabul:</b> 09:00-16:00
                                  </h6>
                                  <h6>
                                    <b>Telefon:</b>+998 69 232-61-15
                                  </h6>
                                  <h6>
                                    <b>Email:</b> namangan_vxtb@xtv.uz
                                  </h6>
                                  <div className={style.cardBodyBtn}>
                                    <Button
                                      style={{
                                        backgroundColor: "#1105e6",
                                        borderRadius: "none",
                                      }}
                                      // onClick={() =>
                                      //   this.openModal(key)
                                      // }
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
                    {this.state.lavozimi}
                  </p>
                  <p style={{ textAlign: "center" }}>{this.state.fullName}</p>
                  <p>
                    Qo'shimcha ma'lumot:
                    <p>{this.state.describe}</p>
                    <p>{this.state.describe1}</p>
                    <p>{this.state.describe2}</p>
                    <p>{this.state.describe3}</p>
                    <p>{this.state.describe4}</p>
                    <p>{this.state.describe5}</p>
                    <p>{this.state.describe6}</p>
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
