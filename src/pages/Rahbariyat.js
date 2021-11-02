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
    rahbariyat: [
      {
        id: 1,
        fullName: "Raximova  Go'zal  Bekturdiyevna",
        phone:"+998-91-452-40-02",
        qabul: "Dushanba - Shanba 9:00 - 17:00",
        email: "bogot__txtb@umail.uz",
        describe:
          "1993-1998 yy. - Nizomiy nomidagi Toshkent Davlat Pedogogika universiteti",
        describe1:
          "1996-1998 yy.-Toshkent shaxar Xamza tumanidagi 307-son kompleks maktabida ukituvchi",
        describe2: "1998-2003 yy  -Bogot tumanidagi 4-son maktabda o'kituvchi",
        describe3:
          "2003-2004 yy –Bogot tumani xalk ta'limi bo'limi tashxis markazi psixolgi",
        describe4:
          "2007-2008 yy- Bogot tumani Maishiy xizmat va axborot texnalogiyalari KXK direktor urinbosari",
        describe5: "2008-2010 yy  -Bogot tumanidagi 4-son maktabda direktor",
        describe6: "2010 y.-x.v     - Bogot tumanidagi 7-son maktabda direktor",
        lavozimi: "Bog'ot tumani xalq ta'limi bo'limi mudiri",
        image: gozal,
        daraja: 1,
      },
      {
        id: 2,
        fullName: "Sapaev Ulug'bek Ollayarovich",
        phone: "+998-91-234-40-50",
        qabul: "Dushanba - Shanba 9:00 - 17:00",
        email: "bogot__txtb@umail.uz",
        describe: "1996-2000 yy.-Urganch davlat universiteti talabasi",
        describe1: "2001-2011 yy.-Bog'ot tuman xalq ta'limi bo'limi metodisti",
        describe2:
          "2011-2013 yy.- Bog'ot tuman XTMFMTTE bo'limi DTSM kichik guruhi eksperti",
        describe3:
          "2013-2017 yy	- Bog'ot tuman XTMFMTTE bo'limi DTSM kichik guruhi rahbari",
        describe4:
          "2017-2021 yy.- Bog'ot tuman XTB ma'naviy axloqiy tarbiya va bolalarni ijtimoiy ximoya qilish sho''basi raxbari ",
        describe5:
          "2021 y x.v – Bog'ot tuman xalq ta'limi bo'limi kadrlar bo'yicha inspektor metodisti",
        describe6: "",
        lavozimi:
          "Bog'ot tuman xalq ta'limi bo'limi kadrlar bo'yicha inspektor metodisti",
        image: sapayev,
        daraja: 1,
      },
      {
        id: 2,
        fullName: "Xudoyberganov Odilbek Shixnazarovich",
        phone: "+998-91-143-40-02",
        qabul: "Dushanba - Shanba 9:00 - 17:00",
        email: "bogot__txtb@umail.uz",
        describe: "2001-2005 yil - Urganch davlat universiteti talabasi",
        describe1:
          "2005-2007 yil - Toshkent axborot texnologiyalari universiteti Urganch filiali magistranti",
        describe2: "2007-2013 yil - Urganch davlat universiteti o'qituvchisi",
        describe3:
          "2013-2014 yil - Bog'ot qishloq xo'jalik kasb-hunar kollejining ishlab chiqarish ta'limi ustasi",
        describe4:
          "2014-2018 yil - Bog'ot tuman xalq ta'limi bo'limi davlat ta'lim standart monitoringi mutaxassisi",
        describe5:
          "2018-2021 yil - Bog'ot tuman xalq ta'limi bo'limi mudiri o'rinbosari",
        describe6:
          "2021 yil - Bog'ot tuman xalq ta'limi bo'limi ma'naviy-axloqiy tarbiya va bolalarning ijtimoiy himoya sho''basi rahbari",
        lavozimi:
          "Bog'ot tuman xalq ta'limi bo'limi ma'naviyat bo'yicha sho'ba raxbari",
        image: rahbar,
        daraja: 1,
      },
    
      // {
      //   id: 2,
      //   fullName: "Axmedov  Anvarbek  Yo'ldoshboyevich",
      //   phone:"+998-91-000-00-00",
      //   qabul: "Dushanba - Shanba 9:00 - 17:00",
      //   email: "bogot__txtb@umail.uz",
      //   describe:
      //     "2007-2008 yy. -O'zbekiston Respublikasi Milliy Xavfsizlik Xizmati Chegara qo'shinlarida oddiy askar ",
      //   describe1:
      //     "2009-2013 yy. -Toshkent Axborot texnologiyalari universiteti talabasi ",
      //   describe2:
      //     "2013-2014 yy. -Bog'ot yengil sanoat kasb-hunar kollejida ishlab chiqarish ta'limi ustasi ",
      //   describe3:
      //     "2014-2017 yy. -Bog'ot yengil sanoat kasb-hunar kollejida o'quv ishlari bo'yicha direktor o'rinbosari ",
      //   describe4:
      //     "2017-2018 yy. -O'zbekiston yoshlar ittifoqi Bog'ot tuman Kengashi bosh mutaxassisi ",
      //   describe5:
      //     "2018 - h.v        - Bog'ot tuman xalq bo'limi ta'lim muassasalari faoliyatini tashkil etish sho'basi bosh mutaxassisi",
      //   describe6: "",
      //   lavozimi:
      //     "Bog'ot tuman xalq bo'limi ta'lim muassasalari faoliyatini tashkil etish sho'basi bosh mutaxassisi",
      //   image: axmedov,
      //   daraja: 1,
      // },
    
      // {
      //   id: 2,
      //   fullName: "Matyakubov   Farxod   Axmedovich",
      //   phone: "+998-91-000-00-00",
      //   qabul: "Dushanba - Shanba 9:00 - 17:00",
      //   email: "bogot__txtb@umail.uz",
      //   describe:
      //     "1977-1983 yy -  Toshkent  ulgurji  kitob  savdosi  “Tashkoopkniga”ishchi ",
      //   describe1:
      //     "1983-1984 yy – Tashtrans  spes  stroy trest  sleser  trubaukladchik",
      //   describe2: "1984-1986-yy    Bogot  rayijroko'm  instruktor",
      //   describe3: "1986-2000-yy     Mexnat  bo'limi direktor  birja  truda",
      //   describe4: "2000-2005-yy     Bog'ot  ASM KUK  maslaxatchi",
      //   describe5: "2010-2011- yy    Maishiy  xizmat  KXK yordamchi  buxgalter",
      //   describe6:
      //     "2015-x/v     Bagat  XTB muhandis xozirgi  kunda MTEX  boshligi",
      //   lavozimi: "Bog'ot tumani  xalq ta'limi bo'limida muhandisi",
      //   image: matyoqubov,
      //   daraja: 1,
      // },
      {
        id: 2,
        fullName: "Аbduraxmanov Oybek Rustamovich",
        phone: "+998-91-653-34-77",
        qabul: "Dushanba - Shanba 9:00 - 17:00",
        email: "bogot__txtb@umail.uz",
        describe: "1994-1999 yy- Urganch davlat universiteti talabasi",
        describe1: "1999-2002 yy - 'Bogʼottumangaz' filiali operatori",
        describe2:
          "2002-2005 yy - Yakka tadbirkorlik faoliyati bilan shugʼullangan ",
        describe3:
          "2005-2010 yy - Bogʼot tumanidagi 9-son umumiy oʼrta taʼlim maktabi oʼqituvchisi ",
        describe4:
          "2010-2014 yy - Bogʼot tumanidagi 9-son umumiy oʼrta taʼlim maktabi direktorining oʼquv ishlari boʼyicha oʼrinbosari",
        describe5:
          "2014-2017 yy - Bogʼot tumanidagi 30-son umumiy oʼrta taʼlim maktabi direktori",
        describe6:
          "2018- x.v. – Bogʼot tuman XTB taʼlim sifati monitoringi boʼlimi inspektor metodisti",
        lavozimi:
          "Bogʼot tumanidagi XTB taʼlim sifati monitoringi bosh inspektor metodisti",
        image: abdurahmonov,
        daraja: 1,
      },
    ],
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
       <GridLoader
color="violet" loading={this.state.loader} size={40} />
       </div>
       
        ) : (
          <div className={style.rahbariyat}>
            <NavbarT />
            <div>
              <div className={style.head}>
                <div className={style.head_text}>
                O'zbekiston Respublikasi Namangan 
      viloyati xalq ta'limi boshqarmasining rahbariyat a'zolari
                </div>
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
                        {this.state.rahbariyat !== []
                          ? this.state.rahbariyat.map((item, key) => {
                              return item.daraja === this.state.daraja ? (
                                <Col lg={12} md={12} sm={12}>
                                  <div className={style.card}>
                                    <Row>
                                      <Col xl={4} lg={5} md={5} sm={5} xs={12}>
                                        <img src={item.image} alt="" />
                                      </Col>
                                      <Col xl={8} lg={7} md={7} sm={7} xs={12}>
                                        <div className={style.cardBody}>
                                          <h4>{item.lavozimi}</h4>
                                          <h4>{item.fullName}</h4>
                                          <h6>
                                            <b>Qabul:</b> {item.qabul}
                                          </h6>
                                          <h6>
                                            <b>Telefon:</b> {item.phone}
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
                              ) : (
                                ""
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
