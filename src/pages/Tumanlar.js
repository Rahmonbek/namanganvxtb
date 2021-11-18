import React, { Component } from "react";
import Footer from "./Footer";
import NavbarT from "./NavbarT";
import style from "../css/Tumanlar.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
// import Loader from "./Loader";
import sanakulov from "../images/sanakulov.jpg";
import sharahmetov from "../images/sharahmetov.jpg";
import djulibekov from "../images/djulibekov.jpg";
import tuman1 from "../images/tuman1.jpg";
import tuman2 from "../images/tuman2.jpg";
import tuman3 from "../images/tuman3.jpg";
import tuman4 from "../images/tuman4.jpg";
import person from "../images/person.jpg";
import chortoqrah from "../images/Chortoq tumanirah.jpg";
import chustrah from "../images/chustrah.jpg";
import mingbuloqrah from "../images/Mingbuloq tumanirah.jpg";
import namangantumrah from "../images/Namangan tumanirah.jpg";
import norinrah from "../images/Norin tumanirah.jpg";
import poprah from "../images/pop tumanirah.jpg";
import namanganshrah from "../images/namangan shaxarrah.jpg";
import toraqqorgonrah from "../images/Toraqorgon tumanirah.jpg";
import uchqorgonrah from "../images/Uchqorgon tumanirah.jpg";
import uychirah from "../images/Uychi tumanirah.jpg";
import yangiqorgonrah from "../images/Yangiqorgonrah.jpg";
import davlatobodrah from "../images/Davlatobod tumanirah.jpg";
import kosonsoyrah from "../images/Kosonsoy tumanirah.jpg";
import chortoq from "../images/Chortoq tumani.jpg";
import chust from "../images/Chust tumani.jpg";
import davlatobod from "../images/Davlatobod tumani.jpg";
import kosonsoy from "../images/Kosonsoy tumani.jpg";
import mingbuloq from "../images/Mingbuloq tumani.jpg";
import namangansh from "../images/Namangan shaxar muduri.jpg";
import namangant from "../images/Namangan tumani muduri.jpg";
import norin from "../images/Norin tumani.jpg";
import pop from "../images/Pop tumani muduri.jpg";
import toraqorgon from "../images/To'raqo'rg'on tumani.jpg";
import uchqorgon from "../images/Uchqorgon tumani muduri.jpg";
import uychi from "../images/UYchi tumani.jpg";
import yanginamangan from "../images/Yangi Namangan tumani.jpg";
import yangiqorgon from "../images/Yangiqorgon tumani.jpg";
import GridLoader from "react-spinners/GridLoader";
import Rasm from "../images/dxorazm0.jpg";
export default class Tumanlar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 3000);
  }
  render() {
    return (
      <div>
        {this.state.timePassed == false ? (
          <div className={style.load}>
            <GridLoader color="violet" loading={this.state.loader} size={40} />
          </div>
        ) : (
          <div>
            <NavbarT />
            <div className={style.head}>
              {/* <div className={style.head_text}>
                O'zbekiston Respublikasi Namangan viloyati xalq ta'limi
                boshqarmasining tumanlaridagi bo'limlari
              </div> */}
            </div>
            <div className={style.tumanlar}>
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Chortoq tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={chortoq} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Bahodirov Fayzullaxon Abdullayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="chortoq_txtb@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: chortoq_txtb@xtv.uz                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/1020634188706212/?ref=share"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 94 300 57 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 94 300 57 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={chortoqrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Chust tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={chust} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Karimov Quvonchbek</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="chusttxtb@xtv.uz ">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: chusttxtb@xtv.uz
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/chustxtb/?multi_permalinks=670397927279829"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 376 76 86">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 376 76 86}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={chustrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Kosonsoy tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={kosonsoy} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Ergashev Soxibjon Ubaydullayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title=" kosonsoy-xtb@inbox.uz  "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto:  kosonsoy-xtb@inbox.uz  
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/profile.php?id=100068972252751"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 916 88 55">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 916 88 55}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={kosonsoyrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Davlatobod tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={davlatobod} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Abduqodirov Isroil Abdupattayevich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/222091629666161/?ref=share_group_link"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 91 177 00 00">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 91 177 00 00}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={davlatobodrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Mingbuloq tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={mingbuloq} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Maqsudova Xaqiqat</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title=" mingbuloqxtb@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto:  mingbuloqxtb@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://facebook.com/groups/1549796655354486/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 942 05 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 942 05 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={mingbuloqrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Namangan shahri</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={namangansh} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Lutfullayev Jahongir </p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="namangan_shxtb@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: namangan_shxtb@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/namanganshxtb/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 251 50 50">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 251 50 50}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={namanganshrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Namangan tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={namangant} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Yuldashev Nodirjon Normatovich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title=" namangan_txtb@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto:  namangan_txtb@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/1240427446468350/?ref=share"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 94 152 55 55">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 94 152 55 55}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={namangantumrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Norin tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={norin} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Normuhammedov Javlon</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="NorinTXTB@xtv.uz ">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: NorinTXTB@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/Norinxtb"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 97 254 87 77">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 97 254 87 77}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={norinrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>To'raqo'rg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={toraqorgon} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Bozorov Fayzulla</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="turakurgan_txtb@uzedu.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: turakurgan_txtb@uzedu.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/376064277043880/permalink/606130964037209/"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 058 03 03">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 058 03 03}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={toraqqorgonrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Uchqurg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={uchqorgon} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Zayniyev Boburjon</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title=" uchkurgon_txtb@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto:  uchkurgon_txtb@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/profile.php?id=100072324061993"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 99 398 47 07">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 99 398 47 07}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />

                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={uchqorgonrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Uychi tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={uychi} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Muminov Muzaffar Abdusamatovich</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="Uychitxtb@xtb.uz ">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: Uychitxtb@xtb.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/uychixtb/?ref=share"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 914 64 00">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 914 64 00}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={uychirah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />

              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Yangiqo'rg'on tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={yangiqorgon} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Aralov Davron</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title="Yangiqurgon_txtb@exat.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto: Yangiqurgon_txtb@exat.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/groups/1645400222322751/?ref=share"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 91 114 05 85">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 91 114 05 85}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={yangiqorgonrah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
              <br />
              <div className={style.tumanlar_item}>
                <h1 className={style.sarlavha}>Pop tumani</h1>

                <Row>
                  <Container className={style.container}>
                    <Col className={style.Col1} lg={6} md={6} sm={12}>
                      <h4>Bo'lim mudiri</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <img className={style.Rasm} src={pop} />
                      <br />

                      <div className={style.NameTag}>
                        <p>Xusainov Avazbek</p>
                        <p>Bo'limning ijtimoiy sahifalari:</p>
                      </div>
                      <div className={style.iconsHead}>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://t.me/samarqand_33_maktab"
                          >
                            <i className="fab fa-telegram"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip
                            placement="bottom"
                            title=" Pop _TXTB@xtv.uz "
                          >
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`mailto:  Pop _TXTB@xtv.uz 
                    }`}
                            >
                              <i className="fas fa-envelope"></i>
                            </a>
                          </Tooltip>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.instagram.com/33_maktab_official/"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                        <div id={style.mediaa11}>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.facebook.com/PopTXTB/posts/434742101646016"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className={style.ahref}
                            href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </div>
                        <div>
                          <Tooltip placement="bottom" title="+998 93 231 00 08">
                            {" "}
                            <a
                              target="_blank"
                              className={style.ahref}
                              href={`tel: +998 93 231 00 08}`}
                            >
                              <i className="fas fa-phone"></i>
                            </a>{" "}
                          </Tooltip>
                        </div>
                      </div>
                      <a href="#" className={style.but} target="_blank">
                        Bo'limning veb saytiga o'tish
                      </a>
                    </Col>
                    <Col
                      className={style.Col1}
                      lg={6}
                      md={6}
                      sm={12}
                      style={{ position: "relative" }}
                    >
                      <h4>Bo'lim haqida</h4>
                      <div className={style.chiziq}></div>
                      <br />
                      <div className={style.NameTag}>
                        <p>Bo'lim videosi</p>
                      </div>

                      <YouTube
                        videoId="qaJGUdMi_kc"
                        opts={{
                          playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                          },
                        }}
                        className={style.video}
                      />
                      <div className={style.NameTag}>
                        <p
                          style={{
                            paddingTop: "15px",
                            borderTop: "3px solid rgb(111, 3, 90)",
                          }}
                        >
                          Bo'lim rasmi
                        </p>
                      </div>
                      <div className={style.Yimage}>
                        <img src={poprah} style={{ width: "100%" }} />
                      </div>
                    </Col>
                  </Container>
                </Row>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
